import axios from 'axios';
import { BASE_URL, MA_NHOM, TOKEN_CYBERSOFT } from '../config';
export const getAllShowtimeByMultiplexService = (maHeThongRap: string) => {
    const URL = `${BASE_URL}api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${MA_NHOM}`;
    return axios({
        method: 'get',
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
        url: URL,
    });
};
