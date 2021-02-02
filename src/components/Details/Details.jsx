import React, { Component } from 'react'
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap'
import './Details.css';
import {Link} from 'react-router-dom'

export default class Details extends Component {
    state={
        job: [],
        visible: true,
    }
    getSingleJob = async () => {
        let id= this.props.match.params.id
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let job = await response.json()
                this.setState({job})
                this.setState({visible: false})
            } else {
                console.log('please check again')
            }
        } catch (e) {
            console.log(e)            
        }
    }
    componentDidMount(){
        this.getSingleJob()
    }
    render() {
        return (
      <Container>
          <Row className="d-flex justify-content-center align-items-start mt-5">
              {this.state.visible ? <Spinner animation="grow" /> : 
              <>
              <Col lg={6} md={12} className="p-5">
                  <img src={this.state.job.company_logo} alt="company-logo" className="logo"/>
              </Col>
              <Col lg={6} md={12} className="px-4">
                  <h2>{this.state.job.company}</h2>
                  <p className="long-description">{this.state.job.description}</p>
                  <Link to="/"><Button className="see-more">go back</Button></Link>
              </Col>
              </>
              }
          </Row>
      </Container>
        )
    }
}
