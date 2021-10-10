import { Box } from '@mui/material';

const SeatsContainer: React.FC = ({ children }) => (
    <Box
        sx={{
            paddingX: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(16, 1fr)',
            gap: '0.5rem',
            overflowX: 'auto',
        }}
    >
        {children}
    </Box>
);

export default SeatsContainer;
