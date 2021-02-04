import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';
import Results from '../Results/Results';
import './Home.css';
import {Link} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'

class Home extends Component {
    state = {
        visible: false,
    }
    render() {
        return (
            <>
                <Container>
                    <Jumbotron fluid className="jumbotron">
                        <Container>
                            <Row className="d-flex justify-content-center">
                                <Searchbar />
                                <Link to="/favs" style={{zIndex: "200", position: "absolute", top:"10px", right:"10px"}}>
                                <Button className="search-button mt-3 py-2" style={{borderRadius:"50%"}}><AiFillHeart/></Button>
                                </Link>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
                <Results />
            </>
        )
    }
}

export default Home;
