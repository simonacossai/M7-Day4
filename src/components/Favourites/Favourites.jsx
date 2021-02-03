import React, { Component } from "react";
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {BsFillTrashFill} from 'react-icons/bs';
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourites: (id) =>
        dispatch({ type: "REMOVE_ITEM_FROM_FAVOURITES", payload: id }),
});

class Favourites extends Component {
    render() {
        const favourites = this.props.favourites.jobs;
        return (
            <Container>
                <Row className="d-flex justify-content-center align-items-center text-center my-5 py-5">
                    {favourites.map((job, i) => (
                        <Col md={3}>
                        <Card  className="d-flex justify-content-center align-items-center text-center m-2 company-card">
                        <Card.Img variant="top"  src={job.company_logo ? job.company_logo : "http://placehold.it/50x50"} style={{width:"100px", height: "50px", objectFit:"contain"}}/>
                        <Card.Body>
                          <Card.Title className="company-name">{job.title}</Card.Title>
                          <Button
                                variant="danger"
                                className="mr-2 py-2"
                                onClick={() => this.props.removeFromFavourites(job.id)}
                                style={{borderRadius:"50%"}}>
                                <BsFillTrashFill/>
                            </Button>
                            <Link to={`/details/${job.id}`}>
                                        <Button className="see-more mr-2" sm>More</Button>
                            </Link>
                            <Link to="/"><Button className="see-more">back</Button></Link>
                        </Card.Body>
                      </Card>
                      </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
