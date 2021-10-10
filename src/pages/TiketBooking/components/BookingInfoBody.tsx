import { Box, Container, Grid, Button } from '@mui/material';

const BookingInfoBody: React.FC = ({ children }) => (
    <Box
        style={{ padding: '1rem' }}
        sx={{
            bgcolor: 'info.main',
        }}
    >
        {children}
    </Box>
);
export default BookingInfoBody;
