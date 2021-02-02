import React, { Component } from 'react'
import './Searchbar.css';
import {InputGroup, FormControl, Col, Button} from 'react-bootstrap';
import {FcSearch} from 'react-icons/fc';
import {GiPositionMarker} from 'react-icons/gi';
import {MdWork} from 'react-icons/md'
export default class Searchbar extends Component {
    state = {
        search:{
            location: '',
            position: '',
        }
      };
    
      //updates the fields of the form
      updatesearch = (e) => {
        let search = { ...this.state.search };
        let currentId = e.currentTarget.id;
        search[currentId] = e.currentTarget.value;
        this.setState({ search });
        console.log(this.state.search)
      };
    
    render() {
        return (
            <Col sm={12}>
                <InputGroup className="mt-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="location"><GiPositionMarker/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="location"
                        aria-label="location"
                        aria-describedby="location"
                        value={this.state.search.location}
                        onChange={this.updatesearch}
                        id="location"
                    />
                </InputGroup>
                <InputGroup className="mt-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="position"><MdWork/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="position"
                        aria-label="position"
                        aria-describedby="position"
                        value={this.state.search.position}
                        onChange={this.updatesearch}
                        id="position"
                    />
                </InputGroup>
                <Button className="d-flex justify-content-center align-items-center text-center mt-2 search-button" onClick={(e)=>this.props.search(e, this.state.search.position, this.state.search.location)}><FcSearch className="mr-2"/>Search</Button>
            </Col>
        )
    }
}
