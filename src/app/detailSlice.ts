import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../formatTypes/Film';
import { IShowtimes } from '../formatTypes/Showtimes';
import { getFilmDetailService, getShowtimeByFilmService } from '../services/film.services';

interface DetailState {
    filmDetail: IFilm | null;
    filmShowtimes: IShowtimes | null;
}
const initialState: DetailState = {
    filmDetail: null,
    filmShowtimes: null,
};

export const getFilmDetail = createAsyncThunk('detail/getFilmDetail', async (maPhim: number) => {
    const result = await getFilmDetailService(maPhim);
    return result.data.content;
});

export const getShowtimeByFilm = createAsyncThunk(
    'detail/getShowtimeByFilm',
    async (maPhim: number) => {
        const result = await getShowtimeByFilmService(maPhim);
        return result.data.content;
    }
);

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFilmDetail.fulfilled, (state, action) => {
            state.filmDetail = action.payload;
        });

        builder.addCase(getShowtimeByFilm.fulfilled, (state, action) => {
            state.filmShowtimes = action.payload;
        });
    },
});
export default detailSlice.reducer;
