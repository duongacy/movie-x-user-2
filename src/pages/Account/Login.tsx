import { Container, Typography, Button } from '@material-ui/core';
import React, { FormEventHandler, useEffect, useState } from 'react';
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
import { getUserLocal, login } from '../../app/accountSlice';
import { IUserLogin } from '../../formatTypes/Account';
import { useHistory } from 'react-router';

interface Props {}

const Login = (props: Props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserLocal());
    }, []);

    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [userInput, setUserInput] = useState<IUserLogin>({
        taiKhoan: '',
        matKhau: '',
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
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserInput({
            ...userInput,
            matKhau: value,
        });
    };
    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserInput({
            ...userInput,
            taiKhoan: value,
        });
    };

    const handleSubmit = () => {
        dispatch(login(userInput));
        console.log(history);
    };

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
                        Đăng nhập
                    </Typography>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                        <Input id="standard-adornment-username" onChange={handleChangeUsername} />
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
                        label="Nhớ tài khoản đăng nhập"
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
                            onClick={handleSubmit}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
