import axios from 'axios';
import { BASE_URL, MA_NHOM, TOKEN_CYBERSOFT } from '../config';

export const getShowtimeByFilmService = (maPhim: number) => {
    const URL = `${BASE_URL}api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return axios({
        method: 'get',
        url: URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};

export const getAllFilmService = () => {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
    return promise;
};

export const getFilmDetailService = (maPhim: number) => {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
    return promise;
};

export const getBannerService = () => {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}api/QuanLyPhim/LayDanhSachBanner`,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
    return promise;
};
