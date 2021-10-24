import { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useParams } from 'react-router';
import { bookTicket, getTicketRoom } from '../../app/ticketBookingSlice';
import { Chip, Typography } from '@material-ui/core';
import { ITicket, ITicketBooking } from '../../formatTypes/Ticket';
import { ISeat } from '../../formatTypes/TicketRoom';
import SeatItem from './components/SeatItem';
import SeatsContainer from './components/SeatsContainer';
import BookingInfoRow from './components/BookingInfoRow';
import Screen from './components/Screen';
import BookingInfoHeader from './components/BookingInfoHeader';
import BookingInfoBody from './components/BookingInfoBody';
import BookingInfoFooter from './components/BookingInfoFooter';
import CheckoutButton from './components/CheckoutButton';
import SeatItemExplain from './components/SeatItemExplain';
import SeatItemExplainContainer from './components/SeatItemExplainContainer';
import { useTranslation } from 'react-i18next';

const seatStyles: {
    Thuong: string;
    Vip: string;
} = {
    Thuong: 'secondary.main',
    Vip: 'warning.main',
};
const dayGhe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
export const convertSeat = (seatNumber: number) => {
    let dayGhe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let soGhe = (seatNumber + 1) % 16;
    if (soGhe === 0) soGhe = 16;
    const soDay = dayGhe[Math.round(seatNumber / 16)];
    const tenGhe = soDay + soGhe;
    return tenGhe;
};
interface Props {}

const TicketBooking = (props: Props) => {
    const { i18n, t } = useTranslation(['ticket-booking']);
    const dispatch = useDispatch();
    const { maLichChieu }: any = useParams();
    const { ticketRoom } = useSelector((state: RootState) => state.ticketBooking);

    const [danhSachVe, setDanhSachVe] = useState<ITicket[]>([]);

    useEffect(() => {
        dispatch(getTicketRoom(maLichChieu));
    }, []);

    const addSeat = (item: ISeat, key: number) => {
        const newTicket: ITicket = {
            maGhe: item.maGhe,
            giaVe: item.giaVe,
            tenGheHienThi: convertSeat(key),
        };
        const isExist = danhSachVe.some((item) => item.maGhe === newTicket.maGhe);
        if (isExist) {
            const newList = danhSachVe.filter((item) => item.maGhe !== newTicket.maGhe);
            setDanhSachVe(newList);
        } else {
            setDanhSachVe([...danhSachVe, newTicket]);
        }
    };

    const handleBookTicket = () => {
        const ticketBooking: ITicketBooking = {
            maLichChieu,
            danhSachVe,
        };
        dispatch(bookTicket(ticketBooking));
    };

    return (
        <Container
            sx={{
                paddingY: '3rem',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Screen />
                    <Box style={{ display: 'flex' }}>
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '2.5rem',
                                gap: '0.5rem',
                            }}
                        >
                            {dayGhe.map((item) => (
                                <Typography
                                    variant="h6"
                                    style={{
                                        height: '2rem',
                                        lineHeight: '2rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        <SeatsContainer>
                            {Array.from({ length: 16 }, (v, k) => k + 1).map((item) => (
                                <Typography
                                    variant="h6"
                                    style={{ textAlign: 'center', fontWeight: 'bold' }}
                                >
                                    {item}
                                </Typography>
                            ))}
                            {ticketRoom?.danhSachGhe.map((item, key) => (
                                <SeatItem
                                    key={item.maGhe}
                                    loaiGhe={item.loaiGhe}
                                    daDat={item.daDat}
                                    callBackSelect={() => {
                                        addSeat(item, key);
                                    }}
                                >
                                    {item.daDat && 'x'}
                                </SeatItem>
                            ))}
                        </SeatsContainer>
                    </Box>

                    <Grid container sx={{ gap: '1rem', marginY: '2rem' }}>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor={seatStyles.Thuong} />
                            <Typography>{t('ticket-booking:normal')}</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor={seatStyles.Vip} />
                            <Typography>{t('ticket-booking:vip')}</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor="info.main" />
                            <Typography>{t('ticket-booking:checked')}</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain>X</SeatItemExplain>
                            <Typography>{t('ticket-booking:occupied')}</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain>O</SeatItemExplain>
                            <Typography>{t('ticket-booking:unavailable')}</Typography>
                        </SeatItemExplainContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box style={{ border: '#ccc solid 1px', width: '100%' }}>
                        <BookingInfoHeader>{ticketRoom?.thongTinPhim?.tenPhim!}</BookingInfoHeader>
                        <BookingInfoBody>
                            <BookingInfoRow label={t('ticket-booking:theater')}>
                                {ticketRoom?.thongTinPhim?.tenCumRap}
                            </BookingInfoRow>
                            <BookingInfoRow label={t('ticket-booking:screen-number')}>
                                {ticketRoom?.thongTinPhim?.tenRap}
                            </BookingInfoRow>
                            <BookingInfoRow label={t('ticket-booking:date')}>
                                {ticketRoom?.thongTinPhim?.ngayChieu}
                            </BookingInfoRow>
                            <BookingInfoRow label={t('ticket-booking:time')}>
                                {ticketRoom?.thongTinPhim?.gioChieu}
                            </BookingInfoRow>
                        </BookingInfoBody>
                        <BookingInfoFooter>
                            <Typography style={{ marginBottom: '.5rem' }}>
                                {danhSachVe.length === 0 ? t('ticket-booking:not-select') : t('ticket-booking:selected')}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {danhSachVe.map((item, key) => (
                                    <Chip
                                        label={item.tenGheHienThi + ' - ' + item.giaVe}
                                        key={`ve-${key}`}
                                    />
                                ))}
                            </Box>
                        </BookingInfoFooter>
                        <Box
                            style={{
                                backgroundColor: 'white',
                                padding: '1rem',
                            }}
                        >
                            <Box style={{ textAlign: 'right', marginBottom: '1rem' }}>
                                <Typography variant="h6">{t('ticket-booking:total-payment')}</Typography>
                                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(
                                        danhSachVe.reduce(
                                            (previousValue, item) => previousValue + item.giaVe,
                                            0
                                        )
                                    )}
                                </Typography>
                            </Box>
                            <Box style={{ textAlign: 'right' }}>
                                <CheckoutButton
                                    callbackClick={handleBookTicket}
                                    disabled={danhSachVe.length === 0}
                                >
                                    {t('ticket-booking:booking')}
                                </CheckoutButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TicketBooking;
