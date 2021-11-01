import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMultiplex, getAllShowtimeByMultiplex } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { Link } from 'react-router-dom';
import { IFilm } from '../../../formatTypes/Film';
import {
    Box,
    InputLabel,
    Container,
    MenuItem,
    FormControl,
    Select,
    CardMedia,
    Grid,
    CardContent,
    Typography,
    CardActions,
    Card,
    Button,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

interface IShowtimesProps {}

const Showtimes: React.FC<IShowtimesProps> = (props) => {
    const { i18n, t } = useTranslation(['home']);
    const { multiplexes, cinemas } = useSelector((state: RootState) => state.home);
    const [films, setFilms] = useState<IFilm[]>([]);
    const [multiplexSelectedId, setMultiplexSelectedId] = useState('');
    const [cinemaSelectedId, setCinemaSelectedId] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMultiplex());
    }, []);

    const handleSelectMultiplex = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setMultiplexSelectedId(value);
        dispatch(getAllShowtimeByMultiplex(value));
        setFilms([]);
    };
    const handleSelectCinema = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setCinemaSelectedId(value);
        const cinemaFind = cinemas?.find((item) => item.maCumRap === value);
        setFilms(cinemaFind?.danhSachPhim!);
    };

    return (
        <Container sx={{ paddingBottom: '3rem' }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: '1rem',
                    color: 'white',
                }}
            >
                {t('home:showtimes')}
            </Typography>
            <Box
                sx={{ flexGrow: 1 }}
                style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '.5rem' }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                            <InputLabel id="demo-simple-select-label">
                                {t('home:theater-system')}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={multiplexSelectedId}
                                label={t('home:theater-system')}
                                onChange={handleSelectMultiplex}
                            >
                                {multiplexes.map((item, key) => (
                                    <MenuItem value={item.maHeThongRap} key={`hethongrap-${key}`}>
                                        {item.tenHeThongRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                            <InputLabel id="demo-simple-select-label-2">
                                {t('home:cinema')}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label-2"
                                value={cinemaSelectedId}
                                label={t('home:cinema')}
                                onChange={handleSelectCinema}
                            >
                                {cinemas.map((item, key) => (
                                    <MenuItem value={item.maCumRap} key={`cumrap-${key}`}>
                                        {item.tenCumRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            maxHeight: '700px',
                            overflowY: 'scroll',
                        }}
                    >
                        {films.map((item, key) => (
                            <Card
                                sx={{
                                    marginBottom: '1rem',
                                }}
                                key={`film-${key}`}
                            >
                                <Link to={`/detail/${item.maPhim}`}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        image={item.hinhAnh}
                                        sx={{
                                            objectFit: 'cover',
                                            height: '300px',
                                        }}
                                    />
                                </Link>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.tenPhim}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.moTa}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'auto auto auto auto',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        {item.lstLichChieuTheoPhim.map((item, key) => {
                                            if (key < 8)
                                                return (
                                                    <Link
                                                        to={`/ticket-booking/${item.maLichChieu}`}
                                                        style={{
                                                            textDecoration: 'none',
                                                            maxWidth: '200px',
                                                        }}
                                                        key={`ticket-booking-${key}`}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            style={{ width: '100%' }}
                                                        >
                                                            {moment(item.ngayChieuGioChieu).format(
                                                                'HH:MM'
                                                            )}
                                                        </Button>
                                                    </Link>
                                                );
                                        })}
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>
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
