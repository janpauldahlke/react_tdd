import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props)

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
        </div>)
    }
}

export default App;