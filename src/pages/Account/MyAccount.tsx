import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Tab,
    Box,
    Tabs,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    CardContent,
    Typography,
    Grid,
    Chip,
    Card,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { getUserInfoByAccessToken } from '../../app/accountSlice';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { convertSeat } from '../TiketBooking/TicketBooking';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const { i18n, t } = useTranslation(['account']);
    const { userLocal, bookingInfo } = useSelector((state: RootState) => state.account);
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getUserInfoByAccessToken(userLocal?.accessToken || ''));
    }, []);

    return (
        <Container>
            <Box sx={{ width: '100%', alignItems: 'start' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={t('account:user-information')} {...a11yProps(0)} />
                        <Tab label={t('account:booking-history')} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableRow>
                                <TableCell>{t('account:username')}</TableCell>
                                <TableCell>{userLocal?.taiKhoan}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('account:full-name')}</TableCell>
                                <TableCell>{userLocal?.hoTen}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>{userLocal?.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('account:phone-number')}</TableCell>
                                <TableCell>{userLocal?.soDT}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('account:user-type')}</TableCell>
                                <TableCell>{userLocal?.maLoaiNguoiDung}</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box>
                        <Grid container spacing={2}>
                            {bookingInfo.map((item, key) => (
                                <Grid item xs={12} md={6} lg={4} key={`booking-info-${key}`}>
                                    <Card sx={{ width: '100%' }}>
                                        <CardContent>
                                            <Typography color="text.secondary" variant="h5">
                                                {item.tenPhim}
                                            </Typography>
                                            <img
                                                src={item.hinhAnh}
                                                style={{
                                                    width: '100%',
                                                    height: '250px',
                                                    objectFit: 'cover',
                                                    borderRadius: '.5rem',
                                                }}
                                                alt=""
                                            />
                                            <Table sx={{ width: '100%' }}>
                                                <TableRow>
                                                    <TableCell style={{ width: '100px' }}>
                                                        {t('account:ticket-price')}
                                                    </TableCell>
                                                    <TableCell>{item.giaVe}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        {t('account:booking-date')}
                                                    </TableCell>
                                                    <TableCell>
                                                        {moment(item.ngayDat).format('DD-MM-YYYY')}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        {t('account:movie-duration')}
                                                    </TableCell>
                                                    <TableCell>{item.thoiLuongPhim} phút</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        {t('account:ticket-price')}
                                                    </TableCell>
                                                    <TableCell>{item.giaVe}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>{t('account:seat-list')}</TableCell>
                                                    <TableCell>
                                                        <Box
                                                            style={{
                                                                display: 'flex',
                                                                gap: '0.5rem',
                                                                flexWrap: 'wrap',
                                                                height: '100px',
                                                                overflowY: 'auto',
                                                            }}
                                                        >
                                                            {item.danhSachGhe.map((item, key) => (
                                                                <Chip
                                                                    key={`chip-${key}`}
                                                                    label={convertSeat(
                                                                        Number(item.tenGhe)
                                                                    )}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </TabPanel>
            </Box>
        </Container>
    );
}
