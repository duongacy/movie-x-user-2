import { Col, Dropdown, Row } from 'react-bootstrap';
import { Grid, Box, Container, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {}

const Footer = (props: Props) => {
    return (
        <Box sx={{ bgcolor: 'primary.dark' }}>
            <Container>
                <Grid container>
                    <Grid item md={6}>
                        <FooterBox>
                            <FooterListCaption>MovieX</FooterListCaption>
                            <Typography sx={{ paddingY: '.3rem' }}>
                                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                                Minh, Việt Nam.
                            </Typography>

                            <Typography sx={{ paddingY: '.3rem' }}>
                                Giấy chứng nhận đăng ký kinh doanh số: 0101659783
                            </Typography>
                            <Typography sx={{ paddingY: '.3rem' }}>
                                Hotline: 1900 545 436
                            </Typography>
                            <img src="images/bct.png" height="55" alt="" />
                        </FooterBox>
                    </Grid>
                    <Grid item md={3}>
                        <FooterBox>
                            <FooterListCaption>Resource</FooterListCaption>
                            <FooterUl>
                                <FooterListItem>React</FooterListItem>
                                <FooterListItem>Material UI</FooterListItem>
                                <FooterListItem>Redux Toolkit</FooterListItem>
                            </FooterUl>
                        </FooterBox>
                    </Grid>
                    <Grid item md={3}>
                        <FooterBox>
                            <FooterListCaption>App</FooterListCaption>
                            <FooterUl>
                                <FooterListItem>App store</FooterListItem>
                                <FooterListItem>Google play</FooterListItem>
                            </FooterUl>
                        </FooterBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;

const FooterListItem: React.FC = ({ children }) => {
    return (
        <li style={{ paddingBottom: '0.5rem' }}>
            <a href="" style={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                    {children}
                </Typography>
            </a>
        </li>
    );
};

const FooterListCaption: React.FC = ({ children }) => {
    return <Typography variant="h4">{children}</Typography>;
};

const FooterUl: React.FC = ({ children }) => {
    return <ul style={{ listStyleType: 'circle' }}>{children}</ul>;
};

const FooterBox: React.FC = ({ children }) => {
    return (
        <Box
            sx={{
                padding: '40px 0',
                color: 'white',
            }}
        >
            {children}
        </Box>
    );
};
