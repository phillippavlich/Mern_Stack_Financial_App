import React, {Component} from 'react';
import {
Button,
Modal,
ModalHeader, 
ModalBody, 
Form, 
FormGroup, 
Label, 
Input, InputGroup, InputGroupAddon, Dropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';


class ItemModal extends Component{
	state={
		modal: false,
		dropdownOpen: false,
		name: '',
		amount: 0
	}

	toggle=()=>{
		this.setState({
			modal: !this.state.modal

		});
	}

	toggleType=()=> {
	    this.setState(prevState => ({
	      dropdownOpen: !prevState.dropdownOpen
	    }));
	}

	onChange =(e)=>{
		this.setState({
			[e.target.name]: e.target.value

		});
	}

	onSubmit=(e)=>{
		//prevent default submission
		e.preventDefault();
		const newItem ={
			name: this.state.name,
			amount: this.state.amount

		}

		//add item via addItem action
		this.props.addItem(newItem);

		//close modal
		this.toggle();
	}

	render(){
		return(
			<div>
				<Button color="dark"
				style={{marginBottom: '2rem'}}
				onClick={this.toggle}
				>Add Item
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader toggle={this.toggle}>Add To List</ModalHeader>

					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleType}>
						        <DropdownToggle caret>
						          Type
						        </DropdownToggle>
						        <DropdownMenu>
						          <DropdownItem header>Pick One</DropdownItem>
						          <DropdownItem divider />
						          <DropdownItem>Income</DropdownItem>
						          <DropdownItem>Expense</DropdownItem>
						        </DropdownMenu>
						      </Dropdown>



								<Label for="item">Item</Label>
								<Input 
									type="text"
									name="name"
									id="item"
									placeholder="Add new transaction"
									onChange={this.onChange}
								/>
								<InputGroup>
							        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
									<Input 
										type="currency"
										name="amount"
										id="amount"

										placeholder="Add the transaction amount"
										onChange={this.onChange}
									/>
								</InputGroup>
							        
								<Button color="dark" style={{marginTop: '2rem'}} block>Add Item</Button>
							</FormGroup>
						</Form>

					</ModalBody>
				</Modal>

			</div>

		);
	}

}

const mapStateToProps=(state)=>({
	item: state.item
});
export default connect(mapStateToProps, {addItem})(ItemModal);