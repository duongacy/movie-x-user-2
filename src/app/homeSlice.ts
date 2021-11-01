import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBanner } from '../formatTypes/Banner';
import { ICinema } from '../formatTypes/Cinema';
import { IFilm } from '../formatTypes/Film';
import { IMultiplex } from '../formatTypes/Multiplex';
import {
    getAllFilmService,
    getBannerService,
} from '../services/film.services';
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
    banners: IBanner[];
}

const initialState: HomeState = {
    value: 0,
    showtimes: null,
    cinemas: [],
    multiplexes: [],
    films: [],
    showingFilms: [],
    comingFilms: [],
    banners: [],
};

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
    const result = await getAllFilmService();
    return result.data.content;
});

export const getBanners = createAsyncThunk('home/getBanners', async () => {
    const result = await getBannerService();
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
        });

        builder.addCase(getAllFilm.fulfilled, (state, action) => {
            state.films = action.payload;
            state.showingFilms = action.payload.filter((item: IFilm) => item.dangChieu === true);

            state.comingFilms = action.payload.filter((item: IFilm) => item.sapChieu === true);
        });
        builder.addCase(getBanners.fulfilled, (state, action) => {
            state.banners = action.payload;
        });
    },
});

export default homeSlice.reducer;
export const { increment, decrement } = homeSlice.actions;
