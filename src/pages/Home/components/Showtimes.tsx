import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Ratio, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMultiplex, getAllShowtimeByMultiplex } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { IFilm } from '../../../formatTypes/Film';

interface IShowtimesProps {}

const Showtimes: React.FC<IShowtimesProps> = (props) => {
    const { multiplexes, cinemas } = useSelector((state: RootState) => state.home);
    const [films, setFilms] = useState<IFilm[]>([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMultiplex());
    }, []);

    const handleSelectMultiplex = (maHeThongRap: string) => {
        dispatch(getAllShowtimeByMultiplex(maHeThongRap));
    };
    const handleSelectCinema = (maCumRap: string) => {
        const cinemaFind = cinemas?.find((item) => item.maCumRap === maCumRap);
        setFilms(cinemaFind?.danhSachPhim!);
        console.log('cinemaFind?.danhSachPhim!:', cinemaFind?.danhSachPhim!);
    };
    return (
        <Container className="pt-1 showtime">
            <h2 className="text-light">Lịch chiếu theo rạp</h2>
            <div className="d-flex py-3">
                <div className="border p-5 d-flex flex-column gap-3">
                    {multiplexes &&
                        multiplexes.map((item, key) => (
                            <MultiplexItem
                                {...item}
                                key={`heThongRapChieu-${key}`}
                                callbackClick={() => handleSelectMultiplex(item.maHeThongRap)}
                            />
                        ))}
                </div>
                <div className="border p-5 d-flex flex-column gap-3 text-light">
                    {cinemas.map((item: any, key: number) => {
                        return (
                            <CinemaItem
                                {...item}
                                key={`cinema-item-${key}`}
                                callbackClick={() => handleSelectCinema(item.maCumRap)}
                            />
                        );
                    })}
                </div>
                <div className="border p-5" style={{ flex: 'auto' }}>
                    {films.map((item, key) => (
                        <Row key={`film-showtimes-${key}`}>
                            <Col sm={12} className="mb-5 px-3">
                                <Ratio className="ratio ratio-16x9">
                                    <img src={item.hinhAnh} className="w-100 rounded-3" alt="" />
                                </Ratio>
                            </Col>
                            <Col sm={12} className="text-light ">
                                <h3 className="text-uppercase text-truncate">
                                    {item.tenPhim}
                                </h3>
                                <Dropdown.Divider />
                                <h4 className="my-3">Lịch chiếu</h4>
                                <div className="border rounded-3 p-3">
                                    <Row>
                                        {item.lstLichChieuTheoPhim.map((item, key) => (
                                            <Col lg={4} md={6} className="mb-2">
                                                <Button
                                                    variant="warning"
                                                    className="w-100"
                                                    key={`interest-${key}`}
                                                >
                                                    {moment(item.ngayChieuGioChieu).format('HH:MM')}
                                                </Button>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Showtimes;

interface MultiplexItem {
    maHeThongRap?: string;
    tenHeThongRap?: string;
    logo?: string;
    callbackClick?: () => void;
}
const MultiplexItem: React.FC<MultiplexItem> = (props) => {
    return (
        <div className="rounded-circle bg-light multiplex-item" onClick={props.callbackClick}>
            <div className="multiplex-item__overlay" />
            <img src={props.logo} className="w-100" alt="" />
        </div>
    );
};

interface ICinemaItemProps {
    tenCumRap?: string;
    hinhAnh?: string;
    diaChi?: string;
    callbackClick?: () => void;
}
const CinemaItem: React.FC<ICinemaItemProps> = (props) => {
    return (
        <div className="p-3 rounded-3 d-flex gap-3 cinema-item" onClick={props.callbackClick}>
            <img src={props.hinhAnh} width="115" height="115" className="rounded-2" alt="" />
            <div className="d-flex flex-column">
                <p className="text-truncate" style={{ maxWidth: '200px' }}>
                    {props.tenCumRap}
                </p>
                m,m,
                <p className="text-truncate" style={{ maxWidth: '200px', fontSize: '14px' }}>
                    {props.diaChi}
                </p>
            </div>
        </div>
    );
};
