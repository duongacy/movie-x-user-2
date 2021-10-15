import { Container, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { Checkbox, FormControlLabel } from '@mui/material';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocal } from '../../app/accountSlice';
import { useTranslation } from 'react-i18next';

interface Props {}

const Login = (props: Props) => {
    const { i18n, t } = useTranslation(['account']);
    const { isLogged, userLocal } = useSelector((state: RootState) => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserLocal());
    }, []);
    useEffect(() => {
        console.log('isLogged:', isLogged);
    }, [isLogged]);

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {};
    return (
        <Container>
            <Box
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        flex: 'auto',
                        width: {
                            xs: '100%',
                            md: '75%',
                            lg: '50%',
                        },
                        border: '#ccc solid 1px',
                        borderRadius: '.5rem',
                        flexGrow: 0,
                        p: '3rem',
                        bgcolor: '#ffffff60',
                    }}
                >
                    <Typography variant="h4" style={{ textTransform: 'uppercase' }}>
                    {t('account:log-in')}
                    </Typography>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-username">{t('account:username')}</InputLabel>
                        <Input id="standard-adornment-username" />
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">{t('account:password')}</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={t('account:remember-me')}
                    />

                    <Box
                        sx={{
                            textAlign: 'right',
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                        >
                            {t('account:log-in')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
