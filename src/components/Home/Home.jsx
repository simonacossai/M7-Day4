import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import {Container, Row, Col} from 'react-bootstrap';
import Results from '../Results/Results';
export default class Home extends Component {
    state={
        results:[],
        visible: false,
    }

    search = async (e, position, location) => {
        e.preventDefault();
        this.setState({visible: true})
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let results = await response.json()
                this.setState({results})
                console.log(results)
                this.setState({visible: false})
            } else {
                console.log('please check again')
                this.setState({visible: false})
            }
        } catch (e) {
            console.log(e)        
            this.setState({visible: false})    
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
                    <Results results={this.state.results} visible={this.state.visible}/>
            </>
        )
    }
}
