import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


const Screen: React.FC = () => {
    const { i18n, t } = useTranslation(['ticket-booking']);
    return (
    <Box
        sx={{
            padding: '1rem',
            bgcolor: 'warning.light',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            textAlign: 'center',
        }}
    >
        <Typography variant="h4">{t('ticket-booking:screen')}</Typography>
    </Box>
)};

export default Screen;
