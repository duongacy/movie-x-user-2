import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICinema } from '../formatTypes/Cinema';
import { IFilm } from '../formatTypes/Film';
import { IMultiplex } from '../formatTypes/Multiplex';
import { IShowtimes } from '../formatTypes/Showtimes';
import { getAllFilmService, getShowtimeByFilmService } from '../services/film.services';
import { getAllMultiplexService } from '../services/multiplex.services';
import { getAllShowtimeByMultiplexService } from '../services/showtimes.services';

interface HomeState {
    value: number;
    showtimes: any | null;
    cinemas: ICinema[];
    multiplexes: IMultiplex[];
    films: IFilm[];
    showingFilms: IFilm[];
    comingFilms: IFilm[];
}

const initialState: HomeState = {
    value: 0,
    showtimes: null,
    cinemas: [],
    multiplexes: [],
    films: [],
    showingFilms: [],
    comingFilms: [],
};

// export const getShowtimeByFilm = createAsyncThunk(
//     'home/getShowtimeByFilm',
//     async (maPhim: number) => {
//         const result = await getShowtimeByFilmService(maPhim);
//         return result.data.content;
//     }
// );

export const getAllMultiplex = createAsyncThunk('home/getAllMultiplex', async () => {
    const result = await getAllMultiplexService();
    return result.data.content;
});

export const getAllCinemaByMultiplex = createAsyncThunk(
    'home/getAllCinemaByMultiplex',
    async (maHeThongRap: string) => {}
);

export const getAllShowtimeByMultiplex = createAsyncThunk(
    'home/getAllShowtimeByMultiplex',
    async (maHeThongRap: string) => {
        const result = await getAllShowtimeByMultiplexService(maHeThongRap);
        return result.data.content;
    }
);

export const getAllFilm = createAsyncThunk('home/getAllFilm', async () => {
    getAllFilmService();
    const result = await getAllFilmService();
    return result.data.content;
});

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
        builder.addCase(getAllMultiplex.fulfilled, (state, action) => {
            state.multiplexes = action.payload;
        });

        builder.addCase(getAllShowtimeByMultiplex.fulfilled, (state, action) => {
            state.cinemas = action.payload[0].lstCumRap;
            console.log('showtimes ne:', action);
        });

        builder.addCase(getAllFilm.fulfilled, (state, action) => {
            state.films = action.payload;
            state.showingFilms = action.payload.filter((item: IFilm) => item.dangChieu === true);
            console.log('showing:', state.showingFilms);

            state.comingFilms = action.payload.filter((item: IFilm) => item.sapChieu === true);
        });
    },
});

export default homeSlice.reducer;
export const { increment, decrement } = homeSlice.actions;
