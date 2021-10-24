import { Col, Dropdown, Row } from 'react-bootstrap';
import { Grid, Box, Container, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const Footer = (props: Props) => {
    const { i18n, t } = useTranslation(['common']);
    return (
        <Box sx={{ bgcolor: 'primary.dark' }}>
            <Container>
                <Grid container>
                    <Grid item md={6}>
                        <FooterBox>
                            <FooterListCaption>MovieX</FooterListCaption>
                            <Typography sx={{ paddingY: '.3rem' }}>
                            {t('common:address')}
                            </Typography>

                            <Typography sx={{ paddingY: '.3rem' }}>
                            {t('common:certificate-number')}
                            </Typography>
                            <Typography sx={{ paddingY: '.3rem' }}>
                            {t('common:hotline')}
                            </Typography>
                            <img src="/images/bct.png" height="55" alt="" />
                        </FooterBox>
                    </Grid>
                    <Grid item md={3}>
                        <FooterBox>
                            <FooterListCaption>{t('common:resource')}</FooterListCaption>
                            <FooterUl>
                                <FooterListItem>React</FooterListItem>
                                <FooterListItem>Material UI</FooterListItem>
                                <FooterListItem>Redux Toolkit</FooterListItem>
                            </FooterUl>
                        </FooterBox>
                    </Grid>
                    <Grid item md={3}>
                        <FooterBox>
                            <FooterListCaption>{t('common:application')}</FooterListCaption>
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
 