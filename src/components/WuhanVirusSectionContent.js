import React from 'react';
import './static/css/WuhanVirusSectionContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const WuhanVirusSectionContent = (props) => {
    return (
        <div>
            <Container className="wuhan-virus-section-content-container">
                <Row className="wuhan-virus-section-content-row">
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="/static/img/rk_zhonganhospital_300120.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: Anger boils over in China as doctors plead for supplies</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="/static/img/08179309.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: France confirms sixth case of infection with coronavirus</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="/static/img/kc-imf3101.jpg" />
                            <Card.Body>
                                <Card.Title>Too soon to tell economic impact of Wuhan virus on China: IMF chief</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="/static/img/facebook_default_pic.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: February will be pivotal in determining success of containment efforts, says expert</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WuhanVirusSectionContent;
