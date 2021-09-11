import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

interface IShowtimesProps {}

const Showtimes: React.FC<IShowtimesProps> = (props) => {
    return (
        <Container className="pt-1 showtime">
            <h2 className="text-light">Lịch chiếu</h2>
            <div className="d-flex py-3">
                <div className="border p-5 d-flex flex-column gap-3">
                    <MultiplexItem src="images/cinema-1.png" />
                    <MultiplexItem src="images/cinema-2.png" />
                    <MultiplexItem src="images/cinema-3.png" />
                    <MultiplexItem src="images/cinema-4.png" />
                    <MultiplexItem src="images/cinema-5.png" />
                </div>
                <div className="border p-5 d-flex flex-column gap-3 text-light">
                    <CinemaItem />
                </div>
                <div className="border p-5" style={{ flex: 'auto' }}>
                    <Row>
                        <ShowtimeItem time="20:45" />
                        <ShowtimeItem time="21:45" />
                        <ShowtimeItem time="23:45" />
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Showtimes;

interface MultiplexItem {
    src: string;
}
const MultiplexItem: React.FC<MultiplexItem> = (props) => {
    return (
        <div className="rounded-circle bg-light multiplex-item">
            <div className="multiplex-item__overlay" />
            <img {...props} className="w-100" alt="" />
        </div>
    );
};

interface ICinemaItemProps {}
const CinemaItem: React.FC<ICinemaItemProps> = (props) => {
    return (
        <div className="p-3 rounded-3 d-flex gap-3 cinema-item">
            <img src="images/bhd-1.png" width="115" height="115" className="rounded-2" alt="" />
            <div className="d-flex flex-column">
                <p className="text-truncate" style={{ maxWidth: '200px' }}>
                    BHD Star - Vincom 3/2
                </p>
                <p className="text-truncate" style={{ maxWidth: '200px', fontSize: '14px' }}>
                    Tầng 7, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội
                </p>
                <Button variant="danger" size="sm" className="mt-2 px-4">
                    Đặt vé
                </Button>
            </div>
        </div>
    );
};

interface IShowtimeItemProps {
    time: string;
}
const ShowtimeItem: React.FC<IShowtimeItemProps> = ({ time }) => {
    return (
        <Col md="6">
            <div className="w-100 bg-warning p-3 text-center rounded-2 mb-3 fs-4 fw-bold">{time}</div>
        </Col>
    );
};
