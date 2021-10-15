import { BASE_URL, TOKEN_CYBERSOFT } from '../config';
import { IUserLogin } from '../formatTypes/Account';
import axios from 'axios';

export const loginService = (account: IUserLogin) => {
    const data = {
        taiKhoan: '123@admin',
        matKhau: '234@!qwe',
    };
    console.log('hahahahh');

    const promise = axios({
        method: 'POST',
        url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        headers: {
            'TokenCybersoft':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg2ODQ4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODgzMjQwMH0.x2aYBurEV6HW_u5m4Fhmr7bbp60q1hcW3_KcQ6nrySI',
            'Access-Control-Allow-Origin': '*',
        },
        data: data,
    });
    promise.then((rs) => console.log('rs ne:', rs));
    // console.log('account ne:', account);
    // var data = JSON.stringify(account);

    // const URL = `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
    // const promise = axios({
    //     method: 'post',
    //     url: URL,
    //     data: data,
    //     headers: {
    //         'TokenCybersoft':
    //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg2ODQ4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODgzMjQwMH0.x2aYBurEV6HW_u5m4Fhmr7bbp60q1hcW3_KcQ6nrySI',
    //         'Content-Type': 'application/json',
    //     },
    // });
    return promise;
};
