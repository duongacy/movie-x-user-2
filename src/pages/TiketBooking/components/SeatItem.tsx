import { Button } from '@mui/material';
import { useState } from 'react';

interface ISeatItemProps {
    callBackSelect: () => void;
    loaiGhe: 'Thuong' | 'Vip';
    daDat: boolean;
}
const SeatItem: React.FC<ISeatItemProps> = ({
    children,
    loaiGhe,
    callBackSelect,
    daDat,
}) => {
    const [selected, setSelected] = useState<boolean>(false);

    const handleChooseSeat = () => {
        setSelected(!selected);
        callBackSelect();
    };
    return (
        <Button
            onClick={handleChooseSeat}
            variant="contained"
            disabled={daDat}
            sx={{
                bgcolor: selected ? 'info.main' : seatStyles[loaiGhe],
                minWidth: '30px',
                height: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </Button>
    );
};

export default SeatItem;

const seatStyles: {
    Thuong: string;
    Vip: string;
} = {
    Thuong: 'secondary.main',
    Vip: 'warning.main',
};
