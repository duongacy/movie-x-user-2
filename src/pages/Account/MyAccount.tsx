import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const MyAccount = (props: Props) => {
    const { i18n, t } = useTranslation(['account']);
    return <div>{t('account:my-account')}</div>;
};

export default MyAccount;
