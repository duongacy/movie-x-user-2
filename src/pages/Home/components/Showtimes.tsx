import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getShowtimeByFilm } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { ICinema } from '../../../formatTypes/Cinema';
import { IInterest } from '../../../formatTypes/Interest';

interface IShowtimesProps {}

const Showtimes: React.FC<IShowtimesProps> = (props) => {
    const { showtimes } = useSelector((state: RootState) => state.home);
    const [cinemas, setCinemas] = useState<ICinema[] | undefined>([]);
    const [interests, setInterests] = useState<IInterest[] | undefined>([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShowtimeByFilm(1282));
    }, []);
    const handleSelectMultiplex = (maHeThongRap: string) => {
        const multiplexFind = showtimes?.heThongRapChieu.find(
            (item) => item.maHeThongRap === maHeThongRap
        );
        setInterests([]);
        setCinemas(multiplexFind?.cumRapChieu);
    };
    const handleSelectCinema = (maCumRap: string) => {
        const cinemaFind = cinemas?.find((item) => item.maCumRap === maCumRap);
        setInterests(cinemaFind?.lichChieuPhim);
    };
    return (
        <Container className="pt-1 showtime">
            <h2 className="text-light">Lịch chiếu</h2>
            <div className="d-flex py-3">
                <div className="border p-5 d-flex flex-column gap-3">
                    {showtimes &&
                        showtimes.heThongRapChieu.map((item, key) => (
                            <MultiplexItem
                                {...item}
                                key={`heThongRapChieu-${key}`}
                                callbackClick={() => handleSelectMultiplex(item.maHeThongRap)}
                            />
                        ))}
                </div>
                <div className="border p-5 d-flex flex-column gap-3 text-light">
                    {cinemas &&
                        cinemas.map((item, key) => (
                            <CinemaItem
                                {...item}
                                key={`cinema-item-${key}`}
                                callbackClick={() => handleSelectCinema(item.maCumRap)}
                            />
                        ))}
                </div>
                <div className="border p-5" style={{ flex: 'auto' }}>
                    <Row>
                        {interests &&
                            interests.map((item, key) => {
                                return <InterestItem {...item} key={`interest-item-${key}`} />;
                            })}
                    </Row>
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
                <p className="text-truncate" style={{ maxWidth: '200px', fontSize: '14px' }}>
                    {props.diaChi}
                </p>
                <Button variant="danger" size="sm" className="mt-2 px-4">
                    Đặt vé
                </Button>
            </div>
        </div>
    );
};

interface IInterestItemProps {
    tenRap?: string;
    ngayChieuGioChieu?: string;
}
const InterestItem: React.FC<IInterestItemProps> = (props) => {
    return (
        <Col md="6">
            <div className="w-100 bg-warning p-3 text-center rounded-2 mb-3 fs-4 fw-bold">
                {props.ngayChieuGioChieu}
            </div>
        </Col>
    );
};
