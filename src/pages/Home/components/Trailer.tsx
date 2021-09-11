import { Carousel, Ratio } from 'react-bootstrap';

interface Props {}

const Trailer = (props: Props) => {
    return (
        <Ratio className="ratio-4x3 ratio-md-16x9 ratio-lg-21x9">
            <Carousel className="trailer-carousel" interval={null}>
                <Carousel.Item className="bg-success">
                    <img
                        src="images/Interstellar-HD_m.webp"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase">THE MATRIX 4 RESURRECTIONS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-success">
                    <img
                        src="images/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase">THE MATRIX 4 RESURRECTIONS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-success">
                    <img
                        src="images/the-dark-knight-batman-movies-wallpaper-preview.jpg"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase">THE MATRIX 4 RESURRECTIONS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Ratio>
    );
};

export default Trailer;
