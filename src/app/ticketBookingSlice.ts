import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITicketRoom } from '../formatTypes/TicketRoom';
import { getTicketRoomService } from '../services/ticket.services';

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

const ticketBookingSlice = createSlice({
    name: 'ticketBooking',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTicketRoom.fulfilled, (state, action) => {
            state.ticketRoom = action.payload;
        });
    },
});

export default ticketBookingSlice.reducer;
