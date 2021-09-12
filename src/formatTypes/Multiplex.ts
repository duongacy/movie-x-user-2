import { ICinema } from './Cinema';

export interface IMultiplex {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
    cumRapChieu: ICinema[];
}
