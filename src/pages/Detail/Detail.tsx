import React, { ChangeEvent, useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilmDetail, getShowtimeByFilm } from '../../app/detailSlice';
import { RootState } from '../../app/store';
import { ICinema } from '../../formatTypes/Cinema';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    SelectChangeEvent,
} from '@mui/material';
import { IShowtimes } from '../../formatTypes/Showtimes';
import { IInterest } from '../../formatTypes/Interest';
import moment from 'moment';

interface Props {}

const Detail = (props: Props) => {
    const dispatch = useDispatch();
    const { maPhim }: any = useParams();
    useEffect(() => {
        dispatch(getFilmDetail(maPhim));
        dispatch(getShowtimeByFilm(maPhim));
    }, []);
    const { filmDetail, filmShowtimes } = useSelector((state: RootState) => state.detail);

    const [cineplexSelected, setCineplexSelected] = useState('');
    const [cumRapSelected, setCumRapSelected] = useState('');
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
        setCumRapSelected(value);
        const resultSelected = dsCumRap?.find((item) => item.maCumRap === value);
        setLichChieuPhim(resultSelected?.lichChieuPhim);
    };

    const handleChangeDay = (event: ChangeEvent<HTMLInputElement>) => {
        let rs: any[] = [];

        const { value } = event.target;
        setSelectedDay(value);
        const ngayChon = moment(value).format('DD/MM/YYYY').toString();
        lichChieuPhim?.forEach((item) => {
            let ngayChieu = moment(item.ngayChieuGioChieu).format('DD/MM/YYYY').toString();
            if (ngayChon === ngayChieu) {
                rs = [...rs, moment(item.ngayChieuGioChieu).format('hh:mm').toString()];
                setDsGioChieu(rs);
            }
        });
    };
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col md={4}>
                        <img src={filmDetail?.hinhAnh} className="w-100 h-100" alt="" />
                    </Col>
                    <Col md={8}>
                        <h3>{filmDetail?.tenPhim}</h3>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                    <th style={{ minWidth: '200px' }}>Mô tả</th>
                                    <td>{filmDetail?.moTa}</td>
                                </tr>
                                <tr>
                                    <th>Ngày khởi chiếu</th>
                                    <td>
                                        {moment(filmDetail?.ngayKhoiChieu).format('DD/MM/YYYY')}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Đánh giá</th>
                                    <td>{filmDetail?.danhGia}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div className="d-flex gap-3">
                                            <Form.Check
                                                readOnly
                                                type="checkbox"
                                                checked={filmDetail?.dangChieu}
                                                label="Đang chiếu"
                                            />
                                            <Form.Check
                                                readOnly
                                                type="checkbox"
                                                checked={filmDetail?.sapChieu}
                                                label="Sắp chiếu"
                                            />
                                            <Form.Check
                                                readOnly
                                                type="checkbox"
                                                checked={filmDetail?.hot}
                                                label="Hot"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="border">
                            <Row>
                                <Col lg={4}>
                                    <Box className='m-2'>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="select-1">He thong rap</InputLabel>
                                            <Select
                                                labelId="select-1"
                                                value={cineplexSelected}
                                                label="He thong rap"
                                                onChange={handleChangeCineplex}
                                            >
                                                {filmShowtimes?.heThongRapChieu.map((item, key) => (
                                                    <MenuItem value={item.maHeThongRap}>
                                                        {item.tenHeThongRap}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="d-flex">
                <FormControl>
                    <InputLabel id="select-2">Cum rap</InputLabel>
                    <Select
                        disabled={dsCumRap?.length === 0}
                        labelId="select-2"
                        value={cumRapSelected}
                        label="Cum rap"
                        onChange={handleChangeCinema}
                    >
                        {dsCumRap?.map((item, key) => (
                            <MenuItem value={item.maCumRap}>{item.tenCumRap}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <TextField
                        // disabled={lichChieuPhim?.length === 0}
                        type="date"
                        value={selectedDay}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChangeDay}
                    />
                </FormControl>
                <div className="border">
                    <h2>Gio chieu</h2>
                    {dsGioChieu.map((item: string, key: number) => (
                        <button>{item}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Detail;
