import React from 'react';
import { Alert, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

interface Props {}

const FeatureTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main style={{ flex: 'auto' }}>{children}</main>
            <Footer />
        </div>
    );
};

export default FeatureTemplate;
