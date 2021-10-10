import { Box, Typography } from '@mui/material';

interface IBookingInfoRowProps {
    label: string;
}
const BookingInfoRow: React.FC<IBookingInfoRowProps> = ({ label, children }) => {
    return (
        <Box sx={{ marginBottom: '1rem' }}>
            <label
                style={{
                    color: 'white',
                }}
            >
                {label}
            </label>
            <Typography
                variant="h6"
                style={{
                    color: 'white',
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default BookingInfoRow;
