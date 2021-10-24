import { Ratio } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';
import { Paper, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../../app/homeSlice';
import { RootState } from '../../../app/store';
import { Box } from '@mui/system';

interface ITrailerProps {}
const Trailer = (props: ITrailerProps) => {
    const dispatch = useDispatch();
    const { banners } = useSelector((state: RootState) => state.home);
    useEffect(() => {
        dispatch(getBanners());
    }, []);
    

    return (
        <Box sx={{ mb: '2rem' }}>
            <Carousel isRTL={false} showArrows={false} pagination={false}>
                {banners.map((item) => (
                    <Box
                        key={item.maBanner}
                        sx={{
                            width: '100%',
                            height: '750px',
                            backgroundImage: `url(${item.hinhAnh})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    ></Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Trailer;

interface IItemProps {
    name: string;
    description: string;
}
const Item: React.FC<IItemProps> = (props) => {
    const { t } = useTranslation(['home']);
    return (
        <Paper>
            <h2>{props.name}</h2>
            <p>{props.description}</p>

            <Button className="CheckButton">{t('home:check')}</Button>
        </Paper>
    );
};
