import axios from 'axios';
import { BASE_URL, MA_NHOM, TOKEN_CYBERSOFT } from '../config';
import { ITicketBooking } from '../formatTypes/Ticket';

export const getTicketRoomService = (maLichChieu: number) => {
    const URL = `${BASE_URL}api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return axios({
        method: 'get',
        url: URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};

export const bookTicketService = (data: ITicketBooking) => {
    const URL = `${BASE_URL}/api/QuanLyDatVe/DatVe`;
    return axios({
        method: 'post',
        data: data,
        url: URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImN5YmVyc29mdEBnbWFpbC5jb20uemJjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIktoYWNoSGFuZyIsImN5YmVyc29mdEBnbWFpbC5jb20uemJjIiwiR1AwMSJdLCJuYmYiOjE2MzM4NzM3ODIsImV4cCI6MTYzMzg3NzM4Mn0.bDaYy6IeQ9T32QyupRmU4fyop2UTnJ9l3P8jkG0UD3o`,
        },
    });
};
