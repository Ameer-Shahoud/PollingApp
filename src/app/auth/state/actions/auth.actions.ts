import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";

export const login = createAction(
  "[Login Page] Login",
  props<{ userId: string }>()
);

export const loginSuccess = createAction(
  "[Login Effect] Login Success",
  props<{ user: User }>()
);

export const loginFailure = createAction(
  "[Login Effect] Login Failure",
  props<{ error: string }>()
);

export const signUp = createAction(
  "[SignUp Page] SignUp",
  props<{ firstName: string; lastName: string; avatarUrl: string }>()
);

export const signUpSuccess = createAction(
  "[SignUp Effect] SignUp Success",
  props<{ user: User }>()
);

export const signUpFailure = createAction(
  "[SignUp Effect] SignUp Failure",
  props<{ error: string }>()
);

export const logout = createAction("[Logout Header] Logout");
export const logoutSuccess = createAction("[Logout Effect] Logout Success");

export const getAllUsers = createAction("[Root Component] Get Users");

export const getAllUsersSuccess = createAction(
  "[GetUsers Effect] Get Users Success",
  props<{ users: User[] }>()
);

export const getAllUsersFailure = createAction(
  "[GetUsers Effect] Get Users Failure",
  props<{ error: string }>()
);

export const getUpdatedUserPollData = createAction(
  "[updateUserPollData Effect] updateUserPollData"
);

export const getUpdatedUserPollDataSuccess = createAction(
  "[getUpdatedUserPollData Effect] getUpdatedUserPollData Success",
  props<{ updatedUserData: User }>()
);

export const getUpdatedUserPollDataFailure = createAction(
  "[getUpdatedUserPollData Effect] getUpdatedUserPollData Failure",
  props<{ error: string }>()
);
