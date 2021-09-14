import axios from 'axios';

export const getShowtimeByFilmService = (maPhim: number) => {
    const URL = `http://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1282`;
    return axios({
        method: 'get',
        url: 'http://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1282',
        headers: {
            TokenCybersoft:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM1MDA4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzY0ODQwMH0.ufODEd--n4Nm91XfL2RnIB9E1_kvZ4Dy1dyDst3wKuE',
        },
    });
};

export const getAllFilmService = () => {
    const promise = axios({
        method: 'get',
        url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00',
        headers: {
            TokenCybersoft:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM1MDA4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzY0ODQwMH0.ufODEd--n4Nm91XfL2RnIB9E1_kvZ4Dy1dyDst3wKuE',
        },
    });
    return promise;
};
