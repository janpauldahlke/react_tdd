import React, { Component } from 'react';
//boostrap button
import { Button } from 'react-bootstrap';
import Gift from './Gift';


class App extends Component{

    constructor(){
        super()

        this.state = {
            gifts : []
        }
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id != id);
        this.setState({ gifts});
    }

    addGift = () => {
        const { gifts} = this.state;
        const ids = this.state.gifts.map(gift => gift.id)

        const max_id =  ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({id: max_id+1})
        this.setState({ gifts })
    }

    render() {

        return (<div>
            {/* adding this will make the test fail
                use runner jest-cli do update failing snapshots
            */}
            <h2>gift giver</h2>
            <div className="gift-list">
                {
                    this.state.gifts.map(gift => {
                        return (
                            <Gift
                                gift={gift}
                                removeGift={this.removeGift}
                                key={gift.id}
                            />
                        )
                    })
                }
            </div>
           
            <Button
                className="btn-add"
                onClick={this.addGift}
            >add gift</Button>
        </div>)
    }
}

export default App;