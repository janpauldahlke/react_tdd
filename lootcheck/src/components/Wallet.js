import React, { Component } from 'react';

import { connect } from 'react-redux';

//due enzyme error, import this
import '../setupTests';

//this export individualy to test it
//and import it via {Wallet} syntax in test !!
export class Wallet extends Component {

	constructor(){
		super()

		this.state = {
			balance : 0
		}
	}

	changeBalance(e){
		this.setState({balance: parseInt(e.target.value, 10)})
	}


	render() {
		return(
			<div>
				<h3 className="balance">Wallet Balance: {this.props.balance}</h3>
				<br />
				<input
					className="input-wallet"
					onChange={this.changeBalance.bind(this)}
				/>
			</div>
		)
	}

}
//mapStateToProps, mapDispatchToProps
//this export to react
export default connect(state => { return  { balance: state }}, null)(Wallet);
