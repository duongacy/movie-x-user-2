import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const AccountTemplate: React.FC<Props> = ({ children }) => {
    const { i18n, t } = useTranslation(['common']);
    return (
        <div
            style={{
                backgroundImage: "url('/images/film-reel-reels-3d-wallpaper-preview.jpg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div>{t('common:account-template')}</div>
            {children}
        </div>
    );
};

export default AccountTemplate;
