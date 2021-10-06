import axios from 'axios';
import { BASE_URL, MA_NHOM, TOKEN_CYBERSOFT } from '../config';

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

