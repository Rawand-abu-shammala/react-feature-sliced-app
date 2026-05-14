import type { UnknownAction } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";

import { userActions } from "@/entities/user";
import type { User } from "@/entities/user";

export const applyUserSession = (
  user: User,
  dispatch: (action: UnknownAction) => unknown
) => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
  dispatch(userActions.setUserData(user));
};
