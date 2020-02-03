import React from 'react';
import './static/css/PremiumSectionContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PremiumSectionContent = (props) => {
    return (
        <div>
            <Container className="premium-section-content-container">
                <Row className="premium-section-content-row">
                    <Col md={6}>
                        <Card className="large-premium-card" style={{ height: "100%"}}>
                            <Card.Img variant="top" src="/static/img/ST_20200203_VNORCHARD_5422052.jpg" />
                            <span className="large-premium-card-premium-marker">Premium</span>
                            <Card.Body className="large-premium-card">
                                <Card.Title className="large-premium-card-author">Tiffany Fumiko Tay</Card.Title>
                                <Card.Title className="large-premium-card-title">It's quieter than usual at Singapore tourist spots</Card.Title>
                                <Card.Text className="large-premium-card-text">
                                    Related: Some restaurants report cancellation in bookings as diners turn cautious
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="normal-premium-card" style={{ height: "100%"}}>
                            <Card.Img variant="top" src="/static/img/ST_20200203_CLWUHAN_5419328.jpg" />
                            <span className="normal-premium-card-premium-marker">Premium</span>
                            <Card.Body className="normal-premium-card">
                                <Card.Title className="normal-premium-card-author">Clara Lock</Card.Title>
                                <Card.Title className="normal-premium-card-title"> Keeping the virus at bay while travelling</Card.Title>
                                <Card.Text className="normal-premium-card-text">
                                    Related: U-turn in regional business sentiment as tourists stay home
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Body className="epaper-card">
                                <Card.Title className="epaper-title">ePAPER</Card.Title>
                                <Card.Text className="epaper-text">
                                    FRIDAY JANUARY 31 2020
                                </Card.Text>
                            </Card.Body>
                            <Card.Img className="epaper-image" variant="bottom" src="/static/img/st20200203-pri-001-00.jpg" />
                            <div className="read-pdf-button">Read PDF</div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PremiumSectionContent;
