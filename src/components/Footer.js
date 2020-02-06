import React from 'react';
import './static/css/Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
    return (
        <Container className="footer-container">
            <Row>
                <Col md={6} className="footer-subscribe">
                    <div className="footer-subscribe-block">
                        <h4>
                            Subscribe to
                            <span>The Straits Times</span>
                        </h4>
                    </div>
                    <div className="footer-subscribe-block-call">
                        call
                        <span className="tel"> 6388-3838 </span>
                        or
                        <span className="click-here"> click here</span>
                    </div>
                </Col>
                <Col md={3} className="footer-subscribe">
                    <div className="footer-app-block-ios">
                        Available for<br></br>iPhones and iPads
                    </div>
                </Col>
                <Col md={3} className="footer-subscribe">
                    <div className="footer-app-block-android">
                        Available in<br></br>Google Play
                    </div>
                </Col>
            </Row>
            <div className="footer-nav">
                <Row className="footer-nav-row">
                    <Col md={2}>
                        SINGAPORE
                    </Col>
                    <Col md={2}>
                        WORLD
                    </Col>
                    <Col md={2}>
                        LIFESTYLE
                    </Col>
                    <Col md={2}>
                        OPINION
                    </Col>
                    <Col md={2}>
                        TECH
                    </Col>
                </Row>
                <Row className="footer-nav-row">
                    <Col md={2}>
                        POLITICS
                    </Col>
                    <Col md={2}>
                        VIDEOS
                    </Col>
                    <Col md={2}>
                        FOOD
                    </Col>
                    <Col md={2}>
                        BUSINESS
                    </Col>
                    <Col md={2}>
                        GAMES
                    </Col>
                </Row>
                <Row className="footer-nav-row">
                    <Col md={2}>
                        ASIA
                    </Col>
                    <Col md={2}>
                        MULTIMEDIA
                    </Col>
                    <Col md={2}>
                        FORUM
                    </Col>
                    <Col md={2}>
                        SPORT
                    </Col>
                </Row>
            </div>
            <Row>
                <Col md={4} className="footer-copyright">
                    <h2>The Straits Times</h2>
                    <p>SPH Digital News / Copyright © 2020 Singapore Press Holdings Ltd. Co. Regn. No. 198402868E. All rights reserved </p>
                </Col>
                <Col md={5} className="footer-terms-and-conditions">
                    <p>> Terms & Conditions</p>
                    <p>> Data Protection Policy</p>
                    <p>> Need help? Reach us here.</p>
                    <p>> Advertise with us</p>
                </Col>
                <Col md={3} className="footer-follow-st">
                    <p>FOLLOW ST</p>
                    <Row className="footer-follow-st-img-row"> 
                        <Col md={2} className="footer-follow-st-img-col">
                            <img src="./static/img/twitter.png" className="footer-follow-st-img" alt="twitter"></img>
                        </Col>
                        <Col md={2} className="footer-follow-st-img-col">
                            <img src="./static/img/facebook.png" className="footer-follow-st-img" alt="facebook"></img>
                        </Col>
                        <Col md={2} className="footer-follow-st-img-col">
                            <img src="./static/img/pinterest.png" className="footer-follow-st-img" alt="pinterest"></img>
                        </Col>
                        <Col md={2} className="footer-follow-st-img-col">
                            <img src="./static/img/instagram.png" className="footer-follow-st-img" alt="instagram"></img>
                        </Col>
                        <Col md={2} className="footer-follow-st-img-col">
                            <img src="./static/img/rss.png" className="footer-follow-st-img" alt="rss"></img>
                        </Col>
                    </Row>
                    <div className="freepik-ack">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;