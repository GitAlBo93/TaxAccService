import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAuth = (state: RootState) => state.auth;

export const selectAuthData = createSelector([selectAuth], (auth) => auth.user?.username);
