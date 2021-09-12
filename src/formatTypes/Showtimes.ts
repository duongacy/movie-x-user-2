import { IMultiplex } from './Multiplex';

export interface IShowtimes {
    biDanh: string;
    dangChieu: boolean;
    danhGia: number;
    hinhAnh: string;
    hot: boolean;
    maNhom: string;
    maPhim: number;
    moTa: string;
    ngayKhoiChieu: string;
    sapChieu: boolean;
    tenPhim: string;
    trailer: string;
    heThongRapChieu: IMultiplex[];
}
