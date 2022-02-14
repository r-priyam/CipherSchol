import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/redux/store';

export interface UserState {
    loggedIn: boolean;
}

const initialState: UserState = {
    loggedIn: false
};

export const userReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        logIn: (state) => {
            state.loggedIn = true;
        },
        logOut: (state) => {
            state.loggedIn = false;
        }
    }
});

export const { logIn, logOut } = userReducer.actions;
export const loggedIn = (state: RootState) => state.user.loggedIn;
export default userReducer.reducer;
