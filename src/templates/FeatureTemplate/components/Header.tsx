import React, { ChangeEvent } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface Props {}

const Header = (props: Props) => {
    const { i18n, t } = useTranslation(['common']);
    const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
    };
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="fs-2 fw-bold">
                        MovieX
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link href="/">{t('common:showtimes')}</Nav.Link>
                            <Nav.Link href="#">Cụm rạp</Nav.Link>
                            <Nav.Link href="#">Tin tức</Nav.Link>
                            <Nav.Link href="#">Ứng dụng</Nav.Link>
                            <NavDropdown
                                title="Tài khoản"
                                id="basic-nav-dropdown"
                                className="rounded-0 border-0"
                            >
                                <NavDropdown.Item href="#action/3.2">
                                    Thông tin tài khoản
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Đăng xuất</NavDropdown.Item>
                            </NavDropdown>
                            <div className="flex align-items-center">
                                <Form.Select
                                    defaultValue={i18n.language}
                                    onChange={handleChangeLanguage}
                                >
                                    <option value="en">English</option>
                                    <option value="vi">Vietnam</option>
                                </Form.Select>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
