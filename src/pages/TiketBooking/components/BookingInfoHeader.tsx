import { Box, Typography } from '@mui/material';
const BookingInfoHeader: React.FC = ({ children }) => {
    return (
        <Box sx={{ padding: '1rem', backgroundColor: 'primary.light' }}>
            <Typography
                variant="h4"
                style={{
                    textTransform: 'uppercase',
                    color: 'white',
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default BookingInfoHeader;
