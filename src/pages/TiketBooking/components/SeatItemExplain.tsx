import { Box, Container, Grid, Button } from '@mui/material';

interface ISeatItemExplainProps {
    bgColor?: string;
}
const SeatItemExplain: React.FC<ISeatItemExplainProps> = ({ children, bgColor }) => (
    <Box
        sx={{
            height: '2rem',
            width: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: bgColor,
        }}
    >
        {children}
    </Box>
);

export default SeatItemExplain;
