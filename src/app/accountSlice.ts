import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBookingInfo, IUser, IUserLogin } from '../formatTypes/Account';
import { getUserInfoByAccessTokenService, loginService } from '../services/account.services';

interface IAccountState {
    userLocal: IUser | null;
    bookingInfo: IBookingInfo[];
}

const initialState: IAccountState = {
    userLocal: null,
    bookingInfo: [],
};

export const login = createAsyncThunk('account/login', async (user: IUserLogin) => {
    const result = await loginService(user);
    return result.data.content;
});

export const getUserLocal = createAsyncThunk('account/getUserLocal', async () => {
    const userLocal = localStorage.getItem('userLocal');
    const result = JSON.parse(userLocal || '');
    if (result === '') {
        return await null;
    } else {
        return await result;
    }
});

export const getUserInfoByAccessToken = createAsyncThunk(
    'account/getUserInfoByAccessToken',
    async (accessToken: string) => {
        const result = await getUserInfoByAccessTokenService(accessToken);
        return result.data.content;
    }
);

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem('userLocal', JSON.stringify(action.payload));
        });
        builder.addCase(getUserLocal.fulfilled, (state, action) => {
            state.userLocal = action.payload;
        });
        builder.addCase(getUserInfoByAccessToken.fulfilled, (state, action) => {
            state.bookingInfo = action.payload.thongTinDatVe;
        });
    },
});

export default accountSlice.reducer;
