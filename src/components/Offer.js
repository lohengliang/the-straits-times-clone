import React from 'react';
import './static/css/Offer.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Offer = (props) => {
    return (
        <Card className="mb-3 offercard">
            <Row className="no-gutters">
                <Col md={5}>
                    <Card.Body>
                        <Card.Title>The Straits Times News Tablet</Card.Title>
                        <Card.Text>News delivered to you daily on the Samsung tablet. Introductory offer at only $24.90/month.</Card.Text>
                        <Card.Text>Terms and conditions apply.</Card.Text>
                        <Button variant="light">LEARN MORE</Button>
                    </Card.Body>
                </Col>
                <Col md={7}>
                    <div className="offerimg"></div>
                </Col>
            </Row>
        </Card >
    );
};

export default Offer;