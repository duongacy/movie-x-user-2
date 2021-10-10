export interface ITicket {
    maGhe: number;
    giaVe: number;
    tenGheHienThi?: string;
}

export interface ITicketBooking {
    maLichChieu: number;
    danhSachVe: ITicket[];
}
