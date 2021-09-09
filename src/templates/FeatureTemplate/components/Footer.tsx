import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer className="footer bg-secondary pt-5">
            <Container className="text-light" >
                <Row className="mb-3">
                    <Col md={6}>
                        <div className="d-flex">
                            <i className="fab fa-bootstrap fa-4x me-2" />
                            <p className="fw-bold fs-2" style={{ lineHeight: '64px' }}>
                                MovieX
                            </p>
                        </div>
                        <div>
                            <small>
                                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                                Minh, Việt Nam.
                            </small>{' '}
                            <br />
                            <small>Giấy chứng nhận đăng ký kinh doanh số: 0101659783</small>
                            <br />
                            <small>Hotline: 1900 545 436</small>
                        </div>
                    </Col>
                    <Col md={6} lg={2}>
                        <p className="fs-5 fw-bold">Resources</p>
                        <ul className="list-unstyled">
                            <li>
                                <a href="" className="text-decoration-none text-light">
                                    <i className="fab fa-react me-1 fw-bold" />
                                    <small>React</small>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none text-light">
                                    <i className="fab fa-bootstrap me-1 fw-bold" />

                                    <small>React bootstrap</small>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none text-light">
                                    <i className="fa fa-recycle me-1 fw-bold" />
                                    <small>Redux</small>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none text-light">
                                    <i className="fab fa-font-awesome-alt me-1 fw-bold" />
                                    <small>Font awesome</small>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={2}>
                        <p className="fs-5 fw-bold">Community</p>
                        <ul className="list-unstyled">
                            <li>
                                <a href="" className="text-decoration-none text-light d-block ">
                                    <i className="fab fa-medium-m me-1 fw-bold" />
                                    <small>Medium</small>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none text-light d-block">
                                    <i className="fab fa-twitter me-1 fw-bold" />
                                    <small>Twitter</small>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-decoration-none text-light d-block">
                                    <i className="fab fa-stack-overflow me-2 fw-bold" />
                                    <small>Stack overflow</small>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={2}>
                        <p className="fs-5 fw-bold">Mobile app</p>
                        <ul className="list-unstyled d-flex" style={{ gap: '8px' }}>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-light fw-bold d-block"
                                >
                                    <i className="fab fa-app-store fa-2x me-1" />
                                    <p>
                                        <small>App store</small>{' '}
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-light fw-bold d-block"
                                >
                                    <i className="fab fa-2x fa-google-play" />
                                    <p>
                                        <small>Play store</small>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                {/* <span className="text-muted">Place sticky footer content here.</span> */}
            </Container>
            <div className="bg-dark py-3 text-center">
                <Container>
                    <span className="text-light ">
                        Design by <span className="fw-bold">YDT Team</span>{' '}
                    </span>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
