import { useTranslation } from 'react-i18next';

interface Props {}

const Register = (props: Props) => {
    const { i18n, t } = useTranslation(['account']);
    return ( <div>{t('account:register')}</div>)
};

export default Register;
