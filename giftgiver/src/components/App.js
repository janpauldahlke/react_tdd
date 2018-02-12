import React, { Component } from 'react';
//boostrap button
import { Button } from 'react-bootstrap';


class App extends Component{

    constructor(){
        super()

        this.state = {
            gifts : []
        }
    }

    render() {
        return (<div>
            {/* adding this will make the test fail
                use runner jest-cli do update failing snapshots
            */}
            <h2>gift giver</h2>
            <Button
                className="btn-add"
            >add gift</Button>
        </div>)
    }
}

export default App;