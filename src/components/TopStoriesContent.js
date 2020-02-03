import React from 'react';
import './static/css/TopStoriesContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const TopStoriesContent = (props) => {
    return (
        <div>
            <Container className="top-stories-content-container">
                <Row className="top-stories-content-row">
                    <Col>
                        <Card>
                            <Row>
                                <Col md={4} className="top-story-left-col">
                                    <Card.Body className="top-story-card">
                                        <Card.Title className="top-story-card-title">WHO declares China virus outbreak an international emergency</Card.Title>
                                        <Card.Text className="top-story-card-text">WHO praised China's prompt actions to limit the spread of the outbreak, and reiterated that it is opposed to any trade or travel restrictions.</Card.Text>
                                        <Card.Text className="top-story-card-text">Related: China prepares for spike in infections during travel crunch.</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col className="top-story-right-col">
                                    <div className="who_pic"></div>
                                </Col>
                            </Row>
                        </Card >
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/wuhan_virus.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: China's death toll rises to 213</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="top-stories-content-row">
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/ab_school_310120.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: 852 students, 115 staff on leave of absence, says MOE</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/wh_29709975_280165.jpg" />
                            <Card.Body>
                                <Card.Title>More paternity leave, less stigma could help fathers be more active parents: IPS study</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Body>
                                <span className="premium-marker">Premium</span>
                                <Card.Title className="premium-author">Markus Ziener</Card.Title>
                                <Card.Title className="premium-title">Brexit propels EU into uncharted territory</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src="./static/img/byline-markus-ziener.png" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/md-fire-3101.jpg" />
                            <Card.Body>
                                <Card.Title>Emergency declared for bush fire-threatened Canberra</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="top-stories-content-row">
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/ab_china_310120.jpg" />
                            <Card.Body>
                                <Card.Title>China to bring home overseas citizens from virus-hit province: Foreign ministry official</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/md-who-3101.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: WHO declares 'global health emergency' - What does that mean?</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/ab_mask3_310120.jpg" />
                            <Card.Body>
                                <Card.Title>Wuhan virus: Who needs to wear a mask and what's the proper way to wear it?</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/ab_virus_310120.jpg" />
                            <Card.Body>
                                <Card.Title>Economist who counted $54.5 billion Sars cost sees bigger hit from Wuhan virus</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="top-stories-content-row">
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/ab_factory_310120.jpg" />
                            <Card.Body>
                                <Card.Title>China's factories were flatlining even before Wuhan virus outbreak worsened</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ height: "100%" }}>
                            <Card.Img variant="top" src="./static/img/2020-01-30t144247z_189079430_rc2eqe9ipbt6_rtrmadp_3_germany-crime.jpg" />
                            <Card.Body>
                                <Card.Title>German nurse 'poisoned babies with morphine'</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="smaller-top-stories-card">
                            <Card.Body>
                                <Card.Title className="smaller-top-stories-title">Today in Pictures, Jan 31, 2020</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="smaller-top-stories-card">
                            <Card.Body>
                                <Card.Title className="smaller-top-stories-title">Wuhan virus: More infected in South Korea as cases reach 7</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title className="smaller-top-stories-title">Wuhan virus: Govt debunks fake news on Singaporeans contracting the virus and Singapore running out of masks</Card.Title>
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

export default TopStoriesContent;
