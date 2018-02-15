import React, { Component } from 'react';

import { connect } from 'react-redux';

//due enzyme error, import this
import '../setupTests';

//this export individualy to test it
//and import it via {Wallet} syntax in test !!
export class Wallet extends Component {

    render() {
        return(
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
            </div>
        )
    }

}
//mapStateToProps, mapDispatchToProps
//this export to react
export default connect(state => { return  { balance: state }}, null)(Wallet);
