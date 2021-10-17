import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

interface Props {}

const FeatureTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Header />
            <main style={{ flex: 'auto', paddingTop: '1rem' }}>{children}</main>
            <Footer />
        </div>
    );
};

export default FeatureTemplate;
