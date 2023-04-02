import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject, from, map, of, switchMap, takeUntil, throwError } from "rxjs";
import * as db from "../../../db/_DATA.js";
import { User, UserPollData } from "../../models/user.js";
import * as AuthSelectors from "../../state/selectors/auth.selectors";

type UsersData = { [userId: string]: User };

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  private _userId!: string;
  private destroySubscriptions = new Subject();

  constructor(private store: Store) {
    this.store
      .select(AuthSelectors.selectUser)
      .pipe(takeUntil(this.destroySubscriptions))
      .subscribe((user) => (this._userId = user?.id ?? ""));
  }

  login(userId: string) {
    return this.getUserById(userId).pipe(
      switchMap((user) => {
        if (!user) return throwError(() => new Error("User not Found!"));
        else return of(user);
      })
    );
  }

  signUp(firstName: string, lastName: string, avatarUrl: string) {
    const { id: _userId, userData: _userData } = this._formatUserData(
      firstName,
      lastName,
      avatarUrl
    );

    return from<Promise<UsersData>>(db._addUser(_userData)).pipe(
      map((userData) => userData[_userId])
    );
  }

  getUserById(id: string) {
    return from<Promise<UsersData>>(db._getUsers()).pipe(
      map((users) => users[id])
    );
  }

  getAllUsers() {
    return from<Promise<UsersData>>(db._getUsers()).pipe(
      map((users) => {
        let _users: User[] = [];
        for (let id in users) _users.push(users[id]);
        return _users;
      })
    );
  }

  updateUserPollData = () => {
    return this.getUserById(this._userId);
  };

  private _formatUserData(
    firstName: string,
    lastName: string,
    avatarUrl: string
  ) {
    let _userId =
      (firstName + lastName).toLowerCase() +
      "-" +
      Math.random().toString(36).substring(2, 6);
    let _user: UsersData = {
      [_userId]: {
        id: _userId,
        name: `${firstName} ${lastName}`,
        avatarURL: avatarUrl,
        questions: [],
        answers: {},
      },
    };

    return { id: _userId, userData: _user };
  }

  ngOnDestroy(): void {
    this.destroySubscriptions.complete();
  }
}
