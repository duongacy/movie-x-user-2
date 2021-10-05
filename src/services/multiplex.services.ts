import axios from 'axios';
import { BASE_URL, TOKEN_CYBERSOFT } from '../config';
export const getAllMultiplexService = () => {
    const URL = `${BASE_URL}api/QuanLyRap/LayThongTinHeThongRap`;
    return axios({
        method: 'get',
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
        url: URL,
    });
};
