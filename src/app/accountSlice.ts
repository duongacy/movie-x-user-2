import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserLogin } from '../formatTypes/Account';
import { loginService } from '../services/account.services';

interface IAccountState {
    userLocal: IUser | null;
}

const initialState: IAccountState = {
    userLocal: null,
};

export const login = createAsyncThunk('account/login', async (user: IUserLogin) => {
    console.log('user:', user);
    const result = await loginService(user);
    console.log('result.data.content login:', result.data.content);

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

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
        });
        builder.addCase(getUserLocal.fulfilled, (state, action) => {
            state.userLocal = action.payload;
        });
    },
});

export default accountSlice.reducer;
