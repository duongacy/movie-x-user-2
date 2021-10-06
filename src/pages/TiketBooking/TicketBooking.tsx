import React, { useEffect } from 'react';
import { Box, Container, Grid, Chip, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useParams } from 'react-router';
import { getTicketRoom } from '../../app/ticketBookingSlice';
import { Typography } from '@material-ui/core';
import { bgcolor } from '@mui/system';

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
            <Screen/>
            <SeatsContainer>
                {ticketRoom?.danhSachGhe.map((item) => (
                    <SeatItem bgColor={seatStyles[item.loaiGhe]}>{item.daDat && 'x'}</SeatItem>
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
            width: 'auto',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(16, 1fr)',
            gap: '0.5rem',
        }}
    >
        {children}
    </Box>
);

const Screen: React.FC = () => (
    <Box sx={{ padding: '1rem', bgcolor: 'primary.main', marginBottom: '1rem' }} />
);
