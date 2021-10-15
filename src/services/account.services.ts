import { BASE_URL, TOKEN_CYBERSOFT } from '../config';
import { IUserLogin } from '../formatTypes/Account';
import axios from 'axios';

export const loginService = (account: IUserLogin) => {
    const URL = `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`;
    return axios({
        method: 'post',
        url: URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        },
    });
};
