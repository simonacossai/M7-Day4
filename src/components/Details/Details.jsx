import React, { Component } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import './Details.css';
import { Link } from 'react-router-dom'
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

class Details extends Component {
    state = {
        job: [],
        visible: true,
    }
    getSingleJob = async () => {
        let id = this.props.match.params.id
        try {
            let response = await fetch(`https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let job = await response.json()
                this.setState({ job })
                this.setState({ visible: false })
            } else {
                console.log('please check again')
            }
        } catch (e) {
            console.log(e)
        }
    }
    description = () => {
        return { __html: this.state.job.description };
    };
    componentDidMount() {
        this.getSingleJob()
    }
    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    {this.state.visible ? <Spinner animation="grow" /> :
                        <>
                            <Col lg={6} md={12} className="p-5">
                                <img src={this.state.job.company_logo} alt="company-logo" className="logo" />
                            </Col>
                            <Col lg={6} md={12} className="px-4 text-right">
                                <h2>{this.state.job.company}</h2>
                                <div className="long-description" dangerouslySetInnerHTML={this.description()}></div>
                                <Link to="/"><Button className="see-more mr-2 mt-2">go back</Button></Link>
                                <Button className="see-more mt-2" onClick={() => this.props.addToFavourites(this.state.job)}><GiHeartPlus/></Button>
                            </Col>
                        </>
                    }
                </Row>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
