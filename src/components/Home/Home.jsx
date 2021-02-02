import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import {Container, Row, Col} from 'react-bootstrap';
import Results from '../Results/Results';
export default class Home extends Component {
    state={
        results:[],
    }

    search = async (e, position, location) => {
        e.preventDefault();
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let results = await response.json()
                this.setState({results})
                console.log(results)
            } else {
                console.log('please check again')
            }
        } catch (e) {
            console.log(e)            
        }
    }
    render() {
        return (
            <>
            <Container>
                <Row>
                    <Searchbar search={this.search}/>
                </Row>
            </Container>
                    <Results results={this.state.results}/>
            </>
        )
    }
}
