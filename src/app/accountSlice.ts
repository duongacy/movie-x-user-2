import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserLogin } from '../formatTypes/Account';
import { loginService } from '../services/account.services';
// import { IFilm } from '../formatTypes/Film';
// import { IShowtimes } from '../formatTypes/Showtimes';
// import { getFilmDetailService, getShowtimeByFilmService } from '../services/film.services';

interface IAccountState {
    isLogged: boolean;
    userLocal: any | null;
}
// interface DetailState {
//     filmDetail: IFilm | null;
//     filmShowtimes: IShowtimes | null;
// }

const initialState: IAccountState = {
    isLogged: false,
    userLocal: null,
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
            console.log('aaaa');
        });
    },
});

export default accountSlice.reducer;
