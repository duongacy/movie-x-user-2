import { Box } from '@mui/material';

const BookingInfoFooter: React.FC = ({ children }) => (
    <Box
        sx={{
            padding: '1rem',
        }}
    >
        {children}
    </Box>
);

export default BookingInfoFooter;
