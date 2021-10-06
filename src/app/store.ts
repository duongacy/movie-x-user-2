import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import homeReducer from './homeSlice';
import detailReducer from './detailSlice';
import ticketBookingReducer from './ticketBookingSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        detail: detailReducer,
        ticketBooking: ticketBookingReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
