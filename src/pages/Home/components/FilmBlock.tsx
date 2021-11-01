import { useEffect, FC, ReactNode } from 'react';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilm } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { Link } from 'react-router-dom';
import { Container, Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';

interface Props {}

const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 576, itemsToShow: 3, itemsToScroll: 3, pagination: false },
    { width: 992, itemsToShow: 4, itemsToScroll: 4 },
];
const FilmBlock = (props: Props) => {
    const { i18n, t } = useTranslation(['home']);
    const dispatch = useDispatch();
    const { films, showingFilms, comingFilms } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(getAllFilm());
    }, []);

    return (
        <Box>
            <FilmBlockContainer>
                <Typography
                    variant="h4"
                    sx={{ marginBottom: '1rem', color: 'secondary.contrastText' }}
                >
                    {t('home:now-showing')}
                </Typography>
                <Box
                    sx={{
                        bgcolor: 'secondary.light',
                        padding: '2rem',
                        borderRadius: '.5rem',
                    }}
                >
                    <Carousel
                        isRTL={false}
                        breakPoints={breakPoints}
                        itemPadding={[0, 8]}
                        pagination={false}
                    >
                        {showingFilms.map((item, key) => (
                            <FilmBlockItem.Wrapper key={`dang-chieu-${key}`}>
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
                                        <Rating
                                            name="read-only"
                                            value={item.danhGia / 2}
                                            readOnly
                                        />
                                        {/* <Button variant="contained">{t('home:booking')}</Button> */}
                                    </Box>
                                </CardContent>
                            </FilmBlockItem.Wrapper>
                        ))}
                    </Carousel>
                </Box>
            </FilmBlockContainer>
            <FilmBlockContainer>
                <Typography
                    variant="h4"
                    sx={{ marginBottom: '1rem', color: 'secondary.contrastText' }}
                >
                    {t('home:coming-soon')}
                </Typography>
                <Box
                    sx={{
                        bgcolor: 'secondary.light',
                        padding: '2rem',
                        borderRadius: '.5rem',
                    }}
                >
                    <Carousel
                        isRTL={false}
                        breakPoints={breakPoints}
                        itemPadding={[0, 8]}
                        pagination={false}
                    >
                        {comingFilms.map((item, key) => (
                            <FilmBlockItem.Wrapper key={`sap-chieu-${key}`}>
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
                                        <Rating
                                            name="read-only"
                                            value={item.danhGia / 2}
                                            readOnly
                                        />
                                        {/* <Button variant="contained">{t('home:booking')}</Button> */}
                                    </Box>
                                </CardContent>
                            </FilmBlockItem.Wrapper>
                        ))}
                    </Carousel>
                </Box>
            </FilmBlockContainer>
        </Box>
    );
};

export default FilmBlock;

const FilmBlockContainer: FC = ({ children }) => {
    return (
        <Container
            sx={{
                marginBottom: '3rem',
            }}
        >
            {children}
        </Container>
    );
};

interface ICommon {
    children: ReactNode | ReactNode[] | string;
}
const FilmBlockItem = {
    Wrapper: ({ children }: ICommon) => {
        return (
            <Card
                sx={{
                    borderRadius: '.4rem',
                    boxShadow: 'none',
                    width: '100%',
                }}
            >
                {children}
            </Card>
        );
    },
};
