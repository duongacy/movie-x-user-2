import Trailer from './components/Trailer';
import './home.scss';
import FilmBlock from './components/FilmBlock';
import Showtimes from './components/Showtimes';
import { getShowtimeByFilmService } from '../../services/film.services';
import { useEffect } from 'react';

interface Props {}

const Home = (props: Props) => {
    useEffect(() => {
        getShowtimeByFilmService(1282);
    }, []);

    return (
        <div className="bg-secondary">
            <Trailer />
            <FilmBlock />
            <Showtimes />
        </div>
    );
};

export default Home;
