export interface ITicket {
    maGhe: number;
    giaVe: number;
    tenGheHienThi?: string;
}

export interface ITicketBooking {
    maLichChieu: number;
    danhSachVe: ITicket[];
}



export interface ISeat {
    maHeThongRap: string;
    tenHeThongRap: string;
    maCumRap: string;
    tenCumRap: string;
    maRap: number;
    tenRap: string;
    maGhe: number;
    tenGhe: string;
}
