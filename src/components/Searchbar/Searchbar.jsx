import React, { Component } from 'react'
import './Searchbar.css';
import {InputGroup, FormControl, Col, Button} from 'react-bootstrap';
import {FcSearch} from 'react-icons/fc';
import {GiPositionMarker} from 'react-icons/gi';
import {MdWork} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    showError: () =>
        dispatch({
            type: "JOB_NOT_FOUND",
            payload: 404,
        }),
        search: (e, position, location) =>
        dispatch(async (dispatch, getState) => {
          const resp = await fetch(`https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`)
          const data = await resp.json()
          console.log(data)
          console.log('current state: ', getState())
          if (resp.ok) {
            dispatch(
              {
                type: "STORE_SEARCH_RESULT",
                payload: data,
              }
            )
          } else {
            /*dispatch(
              {
                type: "SET_ERROR",
                payload: data,
              }
            )*/
            console.log("errorr")
          }
        })
});
class Searchbar extends Component {
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
      };
    
    render() {
        return (
            <Col sm={10} className="search-component">
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
                <Button className="d-flex justify-content-center align-items-center text-center mt-2 search-button" onClick={(e)=>this.props.search(e, this.state.search.position, this.state.search.location)}><AiOutlineSearch className="mr-1"/>Search</Button>
            </Col>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
