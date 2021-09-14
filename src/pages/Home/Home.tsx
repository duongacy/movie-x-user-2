import Trailer from './components/Trailer';
import './home.scss';
import FilmBlock from './components/FilmBlock';
import Showtimes from './components/Showtimes';

interface Props {}

const Home = (props: Props) => {
    return (
        <div className="bg-secondary">
            <Trailer />
            <FilmBlock />
            <Showtimes />
        </div>
    );
};

export default Home;
