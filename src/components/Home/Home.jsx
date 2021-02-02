import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import Results from '../Results/Results';
import './Home.css';

export default class Home extends Component {
    state = {
        results: [],
        visible: false,
    }

    search = async (e, position, location) => {
        e.preventDefault();
        this.setState({ visible: true })
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let results = await response.json()
                this.setState({ results })
                console.log(results)
                this.setState({ visible: false })
            } else {
                console.log('please check again')
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
                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
                <Results results={this.state.results} visible={this.state.visible} />
            </>
        )
    }
}
