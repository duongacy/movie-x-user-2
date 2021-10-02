import { useEffect, Fragment } from 'react';
import { Ratio } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilm } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Rating from '@mui/material/Rating';

interface Props {}

const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 576, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 992, itemsToShow: 3, itemsToScroll: 3 },
];
const FilmBlock = (props: Props) => {
    const dispatch = useDispatch();
    const { films, showingFilms, comingFilms } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(getAllFilm());
    }, []);
    useEffect(() => {
        console.log('films:', films);
    }, [films]);

    return (
        <Fragment>
            <Container
                sx={{
                    paddingY: '2rem',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                    Đang chiếu
                </Typography>
                <Carousel breakPoints={breakPoints} itemPadding={[0, 8]} pagination={false}>
                    {showingFilms.map((item, key) => (
                        <Card
                            key={`dang-chieu-${key}`}
                            sx={{
                                borderRadius: '.4rem',
                                boxShadow: 'none',
                                border: '#ccc solid 1px',
                                width: '100%',
                            }}
                        >
                            <Link to={`/detail/${item.maPhim}`}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={item.hinhAnh}
                                />
                            </Link>

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    style={{
                                        width: '100%',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {item.tenPhim}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ height: '60px', overflowY: 'scroll' }}
                                >
                                    {item.moTa}
                                </Typography>
                                <Box
                                    sx={{
                                        paddingTop: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating name="read-only" value={item.danhGia / 2} readOnly />
                                    <Button variant="contained">Đặt vé</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Carousel>
            </Container>
            <Container className="py-4" style={{ overflow: 'hidden' }}>
                <h2 className="text-light">Sắp chiếu</h2>
                <div style={{ backgroundColor: '#ffffff10' }} className="p-2">
                    <Carousel breakPoints={breakPoints} itemPadding={[0, 8]} pagination={false}>
                        {comingFilms.map((item, key) => (
                            <div></div>
                            // <CardItem {...item} key={`dang-chieu-${key}`} />
                        ))}
                    </Carousel>
                </div>
            </Container>
        </Fragment>
    );
};

export default FilmBlock;

