import React, { useEffect } from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useParams } from 'react-router';
import { getTicketRoom } from '../../app/ticketBookingSlice';
import { Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';

const seatStyles: any = {
    Thuong: 'secondary.main',
    Vip: 'warning.main',
    DangChon: 'info.main',
};
interface Props {}

const TicketBooking = (props: Props) => {
    const dispatch = useDispatch();
    const { maLichChieu }: any = useParams();
    const { ticketRoom } = useSelector((state: RootState) => state.ticketBooking);

    useEffect(() => {
        dispatch(getTicketRoom(maLichChieu));
    }, []);
    useEffect(() => {
        console.log('ssss:', ticketRoom);
    }, [ticketRoom]);
    return (
        <Container
            sx={{
                paddingY: '3rem',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Screen />
                    <SeatsContainer>
                        {ticketRoom?.danhSachGhe.map((item) => (
                            <SeatItem key={item.maGhe} bgColor={seatStyles[item.loaiGhe]}>
                                {item.daDat && 'x'}
                            </SeatItem>
                        ))}
                    </SeatsContainer>
                    <Grid container sx={{ gap: '1rem', marginY: '2rem' }}>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor={seatStyles.Thuong} />
                            <Typography>Ghế thường</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor={seatStyles.Vip} />
                            <Typography>Ghế VIP</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain bgColor={seatStyles.DangChon} />
                            <Typography>Ghế đang chọn</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain>X</SeatItemExplain>
                            <Typography>Ghế đã đặt</Typography>
                        </SeatItemExplainContainer>
                        <SeatItemExplainContainer>
                            <SeatItemExplain>O</SeatItemExplain>
                            <Typography>Ghế đang có người đặt</Typography>
                        </SeatItemExplainContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box style={{ border: '#ccc solid 1px', width: '100%' }}>
                        <Box sx={{ padding: '1rem', backgroundColor: 'primary.light' }}>
                            <Typography
                                variant="h4"
                                style={{
                                    textTransform: 'uppercase',
                                    color: 'white',
                                }}
                            >
                                Rocker
                            </Typography>
                        </Box>
                        <Box
                            style={{ padding: '1rem' }}
                            sx={{
                                bgcolor: 'info.main',
                            }}
                        >
                            <TextField
                                label="Rạp chiếu"
                                defaultValue="CGV Thủ Đức - Rạp 1"
                                variant="filled"
                                fullWidth
                                focused
                                style={{
                                    color: 'white',
                                }}
                                InputProps={{
                                    readOnly: true,
                                    color: 'info',
                                    sx: {
                                        color: 'info.contrastText',
                                    },
                                }}
                                sx={{
                                    backgroundColor: 'info.light',
                                    marginBottom: '1rem',
                                }}
                            />
                            <TextField
                                label="Giờ chiếu"
                                defaultValue="22/08/2021 - 10:00AM"
                                variant="filled"
                                fullWidth
                                focused
                                style={{
                                    color: 'white',
                                }}
                                InputProps={{
                                    readOnly: true,
                                    color: 'info',
                                    sx: {
                                        color: 'info.contrastText',
                                    },
                                }}
                                sx={{
                                    backgroundColor: 'info.light',
                                    marginBottom: '1rem',
                                }}
                            />
                            <TextField
                                label="Ghế chọn"
                                defaultValue="H16-75.000, H15-75.000 "
                                variant="filled"
                                fullWidth
                                focused
                                style={{
                                    color: 'white',
                                }}
                                InputProps={{
                                    readOnly: true,
                                    color: 'info',
                                    sx: {
                                        color: 'info.contrastText',
                                    },
                                }}
                                sx={{
                                    backgroundColor: 'info.light',
                                    marginBottom: '1rem',
                                }}
                            />
                        </Box>
                        <Box
                            style={{
                                backgroundColor: 'white',
                                padding: '1rem',
                            }}
                        >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Hình thức thanh toán"
                                focused
                                fullWidth
                                value="Tiền mặt"
                                sx={{
                                    marginBottom: '1rem',
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <Box style={{ textAlign: 'right', marginBottom: '1rem' }}>
                                <Typography variant="h6">Tổng tiền</Typography>
                                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                    150.000VND
                                </Typography>
                            </Box>
                            <Box style={{ textAlign: 'right' }}>
                                <Button variant="contained" sx={{ width: '150px' }} size="large">
                                    Đặt vé
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TicketBooking;

interface ISeatItemProps {
    bgColor?: string;
}
const SeatItem: React.FC<ISeatItemProps> = ({ children, bgColor }) => (
    <Button
        variant="contained"
        sx={{
            bgcolor: bgColor,
            minWidth: '30px',
            height: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {children}
    </Button>
);
interface ISeatItemExplainProps {
    bgColor?: string;
}
const SeatItemExplain: React.FC<ISeatItemExplainProps> = ({ children, bgColor }) => (
    <Box
        sx={{
            height: '2rem',
            width: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: bgColor,
        }}
    >
        {children}
    </Box>
);

const SeatItemExplainContainer: React.FC = ({ children }) => (
    <Grid item sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        {children}
    </Grid>
);

const SeatsContainer: React.FC = ({ children }) => (
    <Box
        sx={{
            paddingX: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(16, 1fr)',
            gap: '0.5rem',
            overflowX: 'auto',
        }}
    >
        {children}
    </Box>
);

const Screen: React.FC = () => (
    <Box
        sx={{
            padding: '1rem',
            bgcolor: 'warning.light',
            marginBottom: '1rem',
            fontSize: '2rem',
            textTransform: 'uppercase',
            textAlign: 'center',
        }}
    >
        Màn hình
    </Box>
);
