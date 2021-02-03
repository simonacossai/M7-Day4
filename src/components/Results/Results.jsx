import React, { Component } from 'react'
import './Results.css';
import { Col, Card, Button, Row, Container, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Results extends Component {    
    render() {
        return (
            <>
            <Container className="d-flex justify-content-center align-items-center text-center">
                <Row className="d-flex justify-content-center align-items-center text-center">
                {
                    this.props.visible ?
                    <Col className="d-flex justify-content-center align-items-center text-center" md={12} >
                    <Spinner animation="grow" className="mt-5"/>
                    </Col>  :
                    <>
                        {this.props.results.length > 0 ? this.props.results.map((e) => {
                            return (
                                <Col md={3} className="my-3">
                                <Card className="company-card p-2">
                                    <Card.Img variant="top" src={e.company_logo  ? e.company_logo : 'http://placehold.it/50x50'} className="company-logo"/>
                                    <Card.Body>
                                        <Card.Title className="company-name">{e.company}</Card.Title>
                                        <Card.Text className="company-description">
                                            {e.description}
                                        </Card.Text>
                                        <Link to={`/details/${e.id}`}>
                                        <Button className="see-more" sm>See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                                </Col>
                            )
                        }) : <div>No results for ur parameters</div>}
                        </>
                }
                </Row>
                </Container>
            </>
        )
    }
}
