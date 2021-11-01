import { BASE_URL, TOKEN_CYBERSOFT } from '../config';
import { IUserLogin } from '../formatTypes/Account';
import axios from 'axios';

export const loginService = (account: IUserLogin) => {
    const URL = BASE_URL + '/api/QuanLyNguoiDung/DangNhap';
    return axios({
        method: 'POST',
        url: URL,
        headers: {
            'TokenCybersoft': TOKEN_CYBERSOFT,
            'Access-Control-Allow-Origin': '*',
        },
        data: account,
    });
};

export const getUserInfoByAccessTokenService = (accessToken: string) => {
    const URL = BASE_URL + '/api/QuanLyNguoiDung/ThongTinTaiKhoan';

    const promise = axios({
        method: 'POST',
        url: URL,
        headers: {
            'TokenCybersoft': TOKEN_CYBERSOFT,
            'Authorization':
                'Bearer '+ accessToken,
            'Access-Control-Allow-Origin': '*',
        },
    });
    promise.then((rs) => {});
    return promise;
};
