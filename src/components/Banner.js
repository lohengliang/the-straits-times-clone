import React from 'react';
import './static/css/Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Banner = (props) => {
    return (
        <Container className="banner-container">
            <Row className="banner-content-row">
                <Col>
                    <Card>
                        <Row>
                            <Col md={6} className="banner-left-col">
                                <Card.Body className="banner-card">
                                    <Card.Title className="banner-card-title">Wuhan virus: What we know so far</Card.Title>
                                    <Card.Text className="banner-card-text">Where it all began and how the outbreak has spread.</Card.Text>
                                    <Card.Text className="banner-card-button">Find out</Card.Text>
                                </Card.Body>
                            </Col>
                            <Col className="banner-right-col">
                                <div className="wuhan_virus_banner_pic"></div>
                            </Col>
                        </Row>
                    </Card >
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;