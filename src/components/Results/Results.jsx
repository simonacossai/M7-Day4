import React, { Component } from 'react'
import './Results.css';
import { Col, Card, Button, Row, Container, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {GiHeartPlus} from 'react-icons/gi';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (job) =>
        dispatch({
            type: "ADD_ITEM_TO_FAVOURITES",
            payload: job,
        }),
});
class Results extends Component {   
    componentDidMount(){console.log(this.props)} 
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
                                        <Button className="see-more mr-2" sm>See more</Button>
                                        </Link>
                                        <Button className="see-more py-2" onClick={() => this.props.addToFavourites(e)} style={{borderRadius:"50%"}}><GiHeartPlus/></Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Results);
