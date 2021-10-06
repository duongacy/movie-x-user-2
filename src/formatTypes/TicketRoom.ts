export interface ITicketRoom {
    thongTinPhim: IFilmInfo;
    danhSachGhe: ISeat[];
}

export interface ISeat {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: string;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: string;
}

export interface IFilmInfo {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
}
