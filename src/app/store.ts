import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import homeReducer from './homeSlice';
import detailReducer from './detailSlice';
import ticketBookingReducer from './ticketBookingSlice';
import accountSlice from './accountSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        detail: detailReducer,
        ticketBooking: ticketBookingReducer,
        account: accountSlice,
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
