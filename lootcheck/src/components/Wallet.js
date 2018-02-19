import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance'

//due enzyme error, import this
import '../setupTests';

//this export individualy to test it
//and import it via {Wallet} syntax in test !!
export class Wallet extends Component {

	constructor(){
		super()

		this.state = {
			balance : undefined
		}
	}

	changeBalance = e => {
		this.setState({balance: parseInt(e.target.value, 10)})
	}

	deposit = () => {
		this.props.deposit(this.state.balance)
	}

	withdraw = () => {
		this.props.withdraw(this.state.balance)
	}


	render() {
		return(
			<div>
				<h3 className="balance">Wallet Balance: {this.props.balance}</h3>
				<br />
				<input
					className="input-wallet"
					onChange={this.changeBalance}
				/>
				<button
					className="btn-deposit"
					onClick={this.deposit}
				>deposit</button>
				<button
					className="btn-withdraw"
					onClick={this.withdraw}
				>withdraw</button>
			</div>
		)
	}

}
//mapStateToProps, mapDispatchToProps
//this export to react
export default connect(state => { return  {
	balance: state.balance
}}, 
{deposit, withdraw})(Wallet);
