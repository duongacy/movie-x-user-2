import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFilmDetail, getShowtimeByFilm } from '../../app/detailSlice';
import { RootState } from '../../app/store';
import { ICinema } from '../../formatTypes/Cinema';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Box,
    SelectChangeEvent,
    Container,
    Grid,
    Chip,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Rating,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { IShowtimes } from '../../formatTypes/Showtimes';
import { IInterest } from '../../formatTypes/Interest';
import moment from 'moment';
import { Typography } from '@material-ui/core';

interface Props {}

const Detail = (props: Props) => {
    const dispatch = useDispatch();
    const { maPhim }: any = useParams();
    useEffect(() => {
        console.log('maPhim:', maPhim);

        dispatch(getFilmDetail(maPhim));
        dispatch(getShowtimeByFilm(maPhim));
    }, []);
    const { filmDetail, filmShowtimes } = useSelector((state: RootState) => state.detail);

    const [cineplexSelected, setCineplexSelected] = useState('');
    const [cinemaSelected, setCinemaSelected] = useState('');
    const [dsCumRap, setDsCumRap] = useState<ICinema[] | undefined>([]);
    const [lichChieuPhim, setLichChieuPhim] = useState<IInterest[] | undefined>([]);
    const [selectedDay, setSelectedDay] = useState('DD/MM/YYYY');
    const [dsGioChieu, setDsGioChieu] = useState<any>([]);

    useEffect(() => {
        console.log('dsGioChieu:', lichChieuPhim);
    }, [lichChieuPhim]);

    const handleChangeCineplex = (event: SelectChangeEvent) => {
        setLichChieuPhim([]);
        setDsGioChieu([]);
        setSelectedDay('DD/MM/YYYY');
        const { value } = event.target;
        setCineplexSelected(value);
        const resultSelected = filmShowtimes?.heThongRapChieu.find(
            (item) => item.maHeThongRap === value
        );
        setDsCumRap(resultSelected?.cumRapChieu);
    };
    const handleChangeCinema = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setCinemaSelected(value);
        const resultSelected = dsCumRap?.find((item) => item.maCumRap === value);
        setLichChieuPhim(resultSelected?.lichChieuPhim);
    };

    const [expanded, setExpanded] = React.useState<any>({
        moTa: true,
        lichChieu: true,
        trangThai: true,
        danhGia: true,
    });

    const handleExpand = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded({ ...expanded, [panel]: !expanded[panel] });
    };
    return (
        <Container sx={{ paddingY: '3rem' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                height: '500px',
                                width: '100%',
                            }}
                        >
                            <img
                                src={filmDetail?.hinhAnh}
                                width="100%"
                                height="100%"
                                alt=""
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant="h4"
                            style={{
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            {filmDetail?.tenPhim}

                            {filmDetail?.hot && (
                                <Chip
                                    label="Hot"
                                    sx={{
                                        bgcolor: 'error.main',
                                        color: 'error.contrastText',
                                        marginLeft: '1rem',
                                    }}
                                />
                            )}
                            {filmDetail?.dangChieu && (
                                <Chip
                                    label="Đang chiếu"
                                    sx={{
                                        bgcolor: 'error.main',
                                        color: 'error.contrastText',
                                        marginLeft: '1rem',
                                    }}
                                />
                            )}

                            {filmDetail?.sapChieu && (
                                <Chip
                                    label="Sắp chiếu"
                                    sx={{
                                        bgcolor: 'error.main',
                                        color: 'error.contrastText',
                                        marginLeft: '1rem',
                                    }}
                                />
                            )}
                        </Typography>
                        <Typography>
                            <Rating name="read-only" value={filmDetail?.danhGia} readOnly />
                        </Typography>

                        <Accordion
                            expanded={expanded.moTa}
                            onChange={handleExpand('moTa')}
                            sx={{ marginBottom: '1rem' }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Mô tả</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{filmDetail?.moTa}</Typography>
                            </AccordionDetails>
                        </Accordion>

                        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                            <InputLabel id="demo-simple-select-label">Hệ thống rạp</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cineplexSelected}
                                label="Hệ thống rạp"
                                onChange={handleChangeCineplex}
                            >
                                {filmShowtimes?.heThongRapChieu.map((item, key) => (
                                    <MenuItem value={item.maHeThongRap} key={`'hethongrap-${key}'`}>
                                        {item.tenHeThongRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                            <InputLabel id="demo-simple-select-label">Cụm rạp</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cinemaSelected}
                                label="Hệ thống rạp"
                                onChange={handleChangeCinema}
                                disabled={dsCumRap?.length === 0}
                            >
                                {dsCumRap?.map((item, key) => (
                                    <MenuItem value={item.maCumRap} key={`'cumrap-${key}'`}>
                                        {item.tenCumRap}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Box>
                            <Typography variant="h5" style={{ marginBottom: '.5rem' }}>
                                Lịch chiếu
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '.5rem' }}>
                                {lichChieuPhim?.map((item, key) => {
                                    if (key <= 8)
                                        return (
                                            <Link
                                                to={`/ticket-booking/${item.maLichChieu}`}
                                                style={{ textDecoration: 'none' }}
                                                key={`ticket-booking-${key}`}
                                            >
                                                <Button variant="contained">
                                                    {moment(item.ngayChieuGioChieu).format('HH:MM')}
                                                </Button>
                                            </Link>
                                        );
                                })}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Detail;
