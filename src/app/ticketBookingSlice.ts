import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITicketBooking } from '../formatTypes/Ticket';
import { ITicketRoom } from '../formatTypes/TicketRoom';
import { bookTicketService, getTicketRoomService } from '../services/ticket.services';

interface TicketBookingState {
    ticketRoom: ITicketRoom | null;
}
const initialState: TicketBookingState = {
    ticketRoom: null,
};
export const getTicketRoom = createAsyncThunk('getTicketRoom', async (maLichChieu: number) => {
    const result = await getTicketRoomService(maLichChieu);
    return result.data.content;
});

export const bookTicket = createAsyncThunk('bookTicket', async (ticketBooking: ITicketBooking) => {
    const result = await bookTicketService(ticketBooking);
    return result.data.content;
});

const ticketBookingSlice = createSlice({
    name: 'ticketBooking',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTicketRoom.fulfilled, (state, action) => {
            state.ticketRoom = action.payload;
        });
        builder.addCase(bookTicket.fulfilled, (state, action) => {
            console.log('book ve thanh cong');
        });
    },
});

export default ticketBookingSlice.reducer;
