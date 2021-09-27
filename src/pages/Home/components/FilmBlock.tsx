import { useEffect } from 'react';
import { Card, Container, Nav, Button, Ratio } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilm } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { Link } from 'react-router-dom';

interface Props {}

const FilmBlock = (props: Props) => {
    const dispatch = useDispatch();
    const { films, showingFilms, comingFilms } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(getAllFilm());
    }, []);
    useEffect(() => {
        console.log('films:', films);
    }, [films]);

    const breakPoints = [
        { width: 320, itemsToShow: 1 },
        { width: 576, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 992, itemsToShow: 3, itemsToScroll: 3 },
    ];
    return (
        <div className="film-block py-5">
            <Container className="py-4" style={{ overflow: 'hidden' }}>
                <h2 className="text-light">Đang chiếu</h2>
                <div style={{ backgroundColor: '#ffffff10' }} className="p-2">
                    <Carousel
                        className="py-4 d-flex gap-1"
                        breakPoints={breakPoints}
                        itemPadding={[0, 8]}
                        pagination={false}
                    >
                        {showingFilms.map((item, key) => (
                            <CardItem {...item} key={`dang-chieu-${key}`} />
                        ))}
                    </Carousel>
                </div>
            </Container>
            <Container className="py-4" style={{ overflow: 'hidden' }}>
                <h2 className="text-light">Sắp chiếu</h2>
                <div style={{ backgroundColor: '#ffffff10' }} className="p-2">
                    <Carousel
                        className="py-4 d-flex gap-1"
                        breakPoints={breakPoints}
                        itemPadding={[0, 8]}
                        pagination={false}
                    >
                        {comingFilms.map((item, key) => (
                            <CardItem {...item} key={`dang-chieu-${key}`} />
                        ))}
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default FilmBlock;

interface ICardItemProps {
    tenPhim?: string;
    hinhAnh?: string;
    maPhim: number;
}
const CardItem: React.FC<ICardItemProps> = ({ tenPhim, hinhAnh, maPhim }) => (
    <Ratio className="ratio-16x9">
        <Card
            className="w-100 rounded-3 border-0"
            style={{
                backgroundImage: `url(${hinhAnh})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title
                    className="text-uppercase text-danger fw-bold fs-4 p-3 rounded-2"
                    style={{ backgroundColor: '#ffffff50' }}
                >
                    {tenPhim}
                </Card.Title>

                <div className="d-flex justify-content-end gap-1">
                    <Button variant="secondary" className="rounded-0">
                        <Link to={`/detail/${maPhim}`}>Chi tiết phim</Link>
                    </Button>
                    <Button variant="danger" className="rounded-0">
                        Đặt vé
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Ratio>
);
