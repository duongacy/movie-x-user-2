import { Box, Container, Grid, Button } from '@mui/material';

interface ICheckoutButtonProps {
    callbackClick: () => void;
    disabled: boolean;
}
const CheckoutButton: React.FC<ICheckoutButtonProps> = ({ callbackClick, children, disabled }) => (
    <Button
        variant="contained"
        sx={{ width: '150px' }}
        size="large"
        onClick={callbackClick}
        disabled={disabled}
    >
        {children}
    </Button>
);

export default CheckoutButton;
