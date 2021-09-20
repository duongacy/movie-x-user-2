import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Ratio, Dropdown, Card, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMultiplex, getAllShowtimeByMultiplex } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { ICinema } from '../../../formatTypes/Cinema';
import { IFilm } from '../../../formatTypes/Film';

interface IShowtimesProps {}

const Showtimes: React.FC<IShowtimesProps> = (props) => {
    const { multiplexes, cinemas } = useSelector((state: RootState) => state.home);
    const [films, setFilms] = useState<IFilm[]>([]);
    const [multiplexSelectedId, setMultiplexSelectedId] = useState('');
    const [cinemaSelectedId, setCinemaSelectedId] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMultiplex());
    }, []);

    const handleSelectMultiplex = (maHeThongRap: string) => {
        setMultiplexSelectedId(maHeThongRap);
        dispatch(getAllShowtimeByMultiplex(maHeThongRap));
    };
    const handleSelectCinema = (maCumRap: string) => {
        setCinemaSelectedId(maCumRap);
        const cinemaFind = cinemas?.find((item) => item.maCumRap === maCumRap);
        setFilms(cinemaFind?.danhSachPhim!);
    };
    return (
        <Container className="pt-1 showtime">
            <h2 className="text-light">Lịch chiếu theo rạp</h2>
            <Row className="py-3 m-0">
                <Col
                    lg={2}
                    className="border p-5 d-flex flex-column align-items-center gap-3"
                    style={{ marginRight: '-1px', maxHeight: '800px', overflowY: 'auto' }}
                >
                    {multiplexes.map((item, key) => (
                        <MultiplexItem
                            {...item}
                            active={item.maHeThongRap === multiplexSelectedId}
                            key={`heThongRapChieu-${key}`}
                            callbackClick={() => handleSelectMultiplex(item.maHeThongRap)}
                        />
                    ))}
                </Col>
                <Col
                    lg={5}
                    className="p-5 border d-flex flex-column gap-3 text-light"
                    style={{ marginRight: '-1px', maxHeight: '800px', overflowY: 'auto' }}
                >
                    {cinemas.map((item: ICinema, key: number) => {
                        return (
                            <CinemaItem
                                {...item}
                                active={ item.maCumRap === cinemaSelectedId }
                                key={`cinema-item-${key}`}
                                callbackClick={() => handleSelectCinema(item.maCumRap)}
                            />
                        );
                    })}
                </Col>
                <Col
                    lg={5}
                    className="p-5 border"
                    style={{
                        flex: 'auto',
                        marginRight: '-1px',
                        maxHeight: '800px',
                        overflowY: 'auto',
                    }}
                >
                    {films.map((item, key) => (
                        <>
                            <Card
                                className="rounded-3 border-0 mb-3 text-light"
                                style={{ backgroundColor: '#ffffff10' }}
                            >
                                <Card.Body>
                                    <Ratio className="ratio-16x9">
                                        <img src={item.hinhAnh} className="rounded-3" alt="" />
                                    </Ratio>
                                    <Card.Title className="mt-3 fw-bold">
                                        <span className="fs-3 text-uppercase">{item.tenPhim}</span>
                                        {item.hot && (
                                            <span className="fs-6 bg-danger px-2 py-1 ms-2 rounded-1">
                                                Hot
                                            </span>
                                        )}
                                    </Card.Title>
                                    <Card.Title className="mt-3 fs-5">Lịch chiếu</Card.Title>
                                    <div
                                        className="d-flex gap-2 py-2"
                                        style={{ maxWidth: '100%', overflowX: 'auto' }}
                                    >
                                        {item.lstLichChieuTheoPhim.map((item, key) => (
                                            <a
                                                href="#"
                                                key={`showtime-${key}`}
                                                className="fw-bold time-item w-100 text-decoration-none text-warning bg-secondary text-center rounded-2"
                                            >
                                                <div className="py-2 px-3">
                                                    {moment(item.ngayChieuGioChieu).format('HH:MM')}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Showtimes;

interface MultiplexItem {
    maHeThongRap?: string;
    tenHeThongRap?: string;
    logo?: string;
    callbackClick?: () => void;
    active?: boolean;
}
const MultiplexItem: React.FC<MultiplexItem> = (props) => {
    return (
        <div className="rounded-circle bg-light multiplex-item" onClick={props.callbackClick}>
            <div className={`multiplex-item__overlay ${props.active ? 'active' : ''}`} />
            <img src={props.logo} className="w-100" alt="" />
        </div>
    );
};

interface ICinemaItemProps {
    tenCumRap?: string;
    hinhAnh?: string;
    diaChi?: string;
    active?: boolean;
    callbackClick?: () => void;
}
const CinemaItem: React.FC<ICinemaItemProps> = (props) => {
    return (
        <div
            className={`p-3 rounded-3 d-flex gap-3 cinema-item ${props.active ? 'active' : ''}`}
            onClick={props.callbackClick}
        >
            <img src={props.hinhAnh} width="80" height="80" className="rounded-2" alt="" />
            <div className="d-flex flex-column">
                <p className="text-truncate" style={{ maxWidth: '200px' }}>
                    {props.tenCumRap}
                </p>
                <p className="text-truncate" style={{ maxWidth: '200px', fontSize: '14px' }}>
                    {props.diaChi}
                </p>
            </div>
        </div>
    );
};
