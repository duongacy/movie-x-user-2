import { Box, Container, Grid, Button } from '@mui/material';

const SeatItemExplainContainer: React.FC = ({ children }) => (
    <Grid item sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        {children}
    </Grid>
);

export default SeatItemExplainContainer;
