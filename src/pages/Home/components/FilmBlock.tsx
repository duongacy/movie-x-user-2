import { useEffect } from 'react';
import { Card, Container, Nav, Button, Ratio } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilm } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';

interface Props {}

const FilmBlock = (props: Props) => {
    const dispatch = useDispatch();
    const { films } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(getAllFilm());
    }, []);

    const breakPoints = [
        { width: 320, itemsToShow: 1 },
        { width: 576, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 992, itemsToShow: 3, itemsToScroll: 3 },
    ];
    return (
        <div className="film-block py-5">
            <Container className="py-4" style={{ overflow: 'hidden' }}>
                <h2 className="text-light">Đang chiếu</h2>
                <Carousel
                    className="py-4 d-flex gap-1"
                    breakPoints={breakPoints}
                    itemPadding={[0, 8]}
                    pagination={false}
                >
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                </Carousel>
            </Container>
            <Container className="py-4" style={{ overflow: 'hidden' }}>
                <h2 className="text-light">Sắp chiếu</h2>
                <Carousel
                    className="py-4 d-flex gap-1"
                    breakPoints={breakPoints}
                    itemPadding={[0, 8]}
                    pagination={false}
                >
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                    <CardItem tenPhim="Ma cà rồng" />
                </Carousel>
            </Container>
        </div>
    );
};

export default FilmBlock;

interface ICardItemProps {
    tenPhim: string;
}
const CardItem: React.FC<ICardItemProps> = ({ tenPhim }) => (
    <Ratio className="ratio-16x9">
        <Card
            className="w-100 rounded-0 border-0"
            style={{
                backgroundImage: 'url(images/200.jpeg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-uppercase text-light fs-3">{tenPhim}</Card.Title>
                <Button variant="danger" className="rounded-0">
                    Đặt vé
                </Button>
            </Card.Body>
        </Card>
    </Ratio>
);
