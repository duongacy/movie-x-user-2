import { Box, Typography } from '@mui/material';

const Screen: React.FC = () => (
    <Box
        sx={{
            padding: '1rem',
            bgcolor: 'warning.light',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            textAlign: 'center',
        }}
    >
        <Typography variant="h4">Màn hình</Typography>
    </Box>
);

export default Screen;
