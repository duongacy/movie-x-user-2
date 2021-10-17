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
            'TokenCybersoft':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg2ODQ4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODgzMjQwMH0.x2aYBurEV6HW_u5m4Fhmr7bbp60q1hcW3_KcQ6nrySI',
            'Authorization':
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImN5YmVyc29mdEBnbWFpbC5jb20uemJjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJjeWJlcnNvZnRAZ21haWwuY29tLnpiYyIsIkdQMDEiXSwibmJmIjoxNjM0NDA0MzEzLCJleHAiOjE2MzQ0MDc5MTN9.n9hpYkJe456An0G5hgyIDY9tHBJwrSJ6voioUOs8pps',
            'Access-Control-Allow-Origin': '*',
        },
    });
    promise.then((rs) => {
        console.log('hhhh:', rs);
    });
    return promise;
};
