import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { getAccounts } from '../actions/accountActions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button}from 'reactstrap';

class PayOffCredit extends Component{
	//life cycle method
	state={
		modal: false,
		items: getItems,
		accounts: getAccounts,
		assets: 0,
		liabilities: 0,

	}
	
	componentDidMount(){
		this.props.getItems();
		this.props.getAccounts();

	}

	toggle=()=>{
		this.setState({
			modal: !this.state.modal

		});
	}


//Can transfer money from another account to mastercard to pay off
//results in income on mastercard and expense on other account


	render (){
		let { items }=this.props.item;
		let { accounts }=this.props.account;
		


		return(
			<div>

				<Button 
				style={{float: 'right', background: 'Red', borderRadius: '5%' }}
				onClick={this.toggle}
				>Pay
				</Button>
				
				
            </div>
            
		);

	}
}




PayOffCredit.propTypes={
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	getAccounts: PropTypes.func.isRequired,
	account: PropTypes.object.isRequired

}
const mapStateToProps =(state)=> ({
	item: state.item,
	account: state.account

});

export default connect(mapStateToProps,{getItems, getAccounts}) (PayOffCredit);

	


