import { IFilm } from './Film';
import { IInterest } from './Interest';
import { IRoom } from './Room';
export interface ICinema {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    hinhAnh: string;
    danhSachRap?: IRoom[];
    lichChieuPhim: IInterest[];
    danhSachPhim: IFilm[];
}
