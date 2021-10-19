import Trailer from './components/Trailer';
import './home.scss';
import FilmBlock from './components/FilmBlock';
import Showtimes from './components/Showtimes';
import { Container, Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {}

const Home = (props: Props) => {
    return (
        <Box sx={{ bgcolor: 'secondary.dark' }} >
            <Trailer />
            <FilmBlock />
            <Showtimes />
        </Box>
    );
};

export default Home;
