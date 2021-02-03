import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';
import Results from '../Results/Results';
import './Home.css';
import {Link} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    showError: () =>
        dispatch({
            type: "JOB_NOT_FOUND",
            payload: 404,
        }),
});

class Home extends Component {
    state = {
        results: [],
        visible: false,
    }

    search = async (e, position, location) => {
        e.preventDefault();
        this.setState({ visible: true })
        try {
            let response = await fetch(`https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let results = await response.json()
                this.setState({ results })
                if(results.length<=0){
                   await this.props.showError()
                    alert(this.props.error)
                }
                this.setState({ visible: false })
            } else {
                this.setState({ visible: false })
            }
        } catch (e) {
            console.log(e)
            this.setState({ visible: false })
        }
    }
    render() {
        return (
            <>
                <Container>
                    <Jumbotron fluid className="jumbotron">
                        <Container>
                            <Row className="d-flex justify-content-center">
                                <Searchbar search={this.search} />
                                <Link to="/favs" style={{zIndex: "200", position: "absolute", top:"10px", right:"10px"}}>
                                <Button className="search-button mt-3 py-2" style={{borderRadius:"50%"}}><AiFillHeart/></Button>
                                </Link>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
                <Results results={this.state.results} visible={this.state.visible} />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
