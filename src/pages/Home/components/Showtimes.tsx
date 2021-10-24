import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMultiplex, getAllShowtimeByMultiplex } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { ICinema } from '../../../formatTypes/Cinema';
import { Link } from 'react-router-dom';
import { IFilm } from '../../../formatTypes/Film';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CardMedia, Grid, CardContent, Typography, CardActions, Card, Button } from '@mui/material';

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

    useEffect(() => {
        console.log('film ne:', films);
    }, [films]);

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
        <Container>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: '1rem',
                    color: 'white',
                }}
            >
                Lịch chiếu
            </Typography>
            <Box
                sx={{ flexGrow: 1 }}
                style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '.5rem' }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                            <InputLabel id="demo-simple-select-label">Hệ thống rạp</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={multiplexSelectedId}
                                label="Hệ thống rạp"
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
                            <InputLabel id="demo-simple-select-label-2">Cụm rạp</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-2"
                                value={cinemaSelectedId}
                                label="Cụm rạp"
                                onChange={handleSelectCinema}
                            >
                                {cinemas.map((item, key) => (
                                    <MenuItem value={item.maCumRap} key={`cumrap-${key}`}>
                                        {item.tenCumRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <MobileDatePicker
                                    label="Date mobile"
                                    inputFormat="MM/dd/yyyy"
                                    value={valueDate}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider> */}
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
                                                    <Button
                                                        style={{
                                                            maxWidth: '200px',
                                                        }}
                                                        variant="contained"
                                                        key={`lichchieu-${key}`}
                                                    >
                                                        {moment(item.ngayChieuGioChieu).format(
                                                            'HH:MM'
                                                        )}
                                                    </Button>
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
