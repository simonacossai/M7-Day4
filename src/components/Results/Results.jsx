import React, { Component } from 'react'
import './Results.css';
import { Col, Card, Button, Row, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Results extends Component {
    render() {
        return (
            <>
            <Container className="d-flex">
                <Row className="d-flex">
                {
                    this.props.results.length > 0 ? 
                    <>
                        {this.props.results && this.props.results.map((e) => {
                            return (
                                <Col md={3} className="my-3">
                                <Card className="company-card">
                                    <Card.Img variant="top" src={e.company_logo  ? e.company_logo : 'http://placehold.it/50x50'} className="company-logo"/>
                                    <Card.Body>
                                        <Card.Title className="company-name">{e.company}</Card.Title>
                                        <Card.Text className="company-description">
                                            {e.description}
                                        </Card.Text>
                                        <Link to={`/details/${e.id}`}>
                                        <Button variant="primary" sm>See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                                </Col>
                            )
                        })}
                        </>
                   : <div></div>
                }
                </Row>
                </Container>
            </>
        )
    }
}
