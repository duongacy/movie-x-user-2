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
