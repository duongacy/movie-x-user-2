import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IShowtimes } from '../formatTypes/Showtimes';
import { getShowtimeByFilmService } from '../services/film.services';
import { RootState } from './store';

interface HomeState {
    value: number;
    showtimes: IShowtimes | null;
}

const initialState: HomeState = {
    value: 0,
    showtimes: null,
};

export const getShowtimeByFilm = createAsyncThunk(
    'home/getShowtimeByFilm',
    async (maPhim: number) => {
        const result = await getShowtimeByFilmService(maPhim);
        return result.data.content;
    }
);
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getShowtimeByFilm.fulfilled, (state: HomeState, action) => {
            console.log('payload:', action.payload);
            state.showtimes = action.payload;
        });
    },
});

export default homeSlice.reducer;
export const { increment, decrement } = homeSlice.actions;
