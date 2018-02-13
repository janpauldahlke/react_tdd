import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'react-bootstrap';

class Gift extends Component{
    constructor(){
        super()

        this.state = {
            person: '',
            present: ''
        }
    }

    render() {
        return(
            <div>
                <Form>
                  <FormGroup>
                    <ControlLabel>Person</ControlLabel>
                    <FormControl
                      onChange={e => {
                        this.setState({person: e.target.value})
                      }}
                      className="input-person"
                      value={this.state.person}
                    />

                    <ControlLabel>Present</ControlLabel>
                    <FormControl
                      onChange={e => {
                        this.setState({present: e.target.value})
                      }}
                      className="input-present"
                      value={this.state.present}
                    />
                  </FormGroup>
                  <Button
                    className="btn-remove"
                    onClick={() => {
                      this.props.removeGift(this.props.gift.id)
                    }}
                  >remove gift</Button>
                </Form>
            </div>
        )
    }
}

export default Gift;