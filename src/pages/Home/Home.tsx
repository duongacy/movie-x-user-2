import Trailer from './components/Trailer';
import './home.scss';
import FilmBlock from './components/FilmBlock';
import Showtimes from './components/Showtimes';
import { Box } from '@mui/material';
import { useEffect } from 'react';

interface Props {}
const Home = (props: Props) => {
    return (
        <Box sx={{ bgcolor: 'secondary.dark' }}>
            <Trailer />
            <FilmBlock />
            <Showtimes />
        </Box>
    );
};

export default Home;
