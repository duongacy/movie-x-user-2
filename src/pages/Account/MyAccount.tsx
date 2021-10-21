import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { getUserInfoByAccessToken } from '../../app/accountSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { convertSeat } from '../TiketBooking/TicketBooking';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

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
    useEffect(() => {
        console.log('bookingInfo:', bookingInfo);
    }, [bookingInfo]);

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
                                                    <TableCell>{t('account:booking-date')}</TableCell>
                                                    <TableCell>
                                                        {moment(item.ngayDat).format('DD-MM-YYYY')}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>{t('account:movie-duration')}</TableCell>
                                                    <TableCell>{item.thoiLuongPhim} phút</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>{t('account:ticket-price')}</TableCell>
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
                        {/* <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Word of the Day
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card> */}
                    </Box>
                </TabPanel>
            </Box>
        </Container>
    );
}
