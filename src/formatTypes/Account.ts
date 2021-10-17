import { ISeat } from './Ticket';

export interface IUserLogin {
    taiKhoan: string;
    matKhau: string;
}

export interface IUser {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri';
    accessToken: string;
}

export interface IAccount {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: 'QuanTri' | 'KhachHang';
    loaiNguoiDung: {
        maLoaiNguoiDung: 'QuanTri' | 'KhachHang';
        tenLoai: 'Quản trị' | 'Khách hàng';
    };
}

export interface IBookingInfo {
    danhSachGhe: ISeat[];
    maVe: number;
    ngayDat: string;
    tenPhim: string;
    hinhAnh: string;
    giaVe: number;
    thoiLuongPhim: number;
}
