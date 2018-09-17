import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table, Input, FormGroup, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class TransactionList extends Component{
	//life cycle method
	
	componentDidMount(){
		this.props.getItems();

	}

	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	}
	

	render (){
		const { items }=this.props.item;
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		return(
			<Container>
				<FormGroup tag="fieldset">
		          <legend>Type of Transaction</legend>
		          <FormGroup check>
		          	<Label check>
		             	<Input type="radio" name="radio1" />{' '}
		             	All
		           	</Label>
		          </FormGroup>
		          <FormGroup check>
		            <Label check>
		              <Input type="radio" name="radio1" />{' '}
		              Income
		            </Label>
		          </FormGroup>
		          <FormGroup check>
		            <Label check>
		              <Input type="radio" name="radio1" />{' '}
		              Expense
		            </Label>
		          </FormGroup>
		        </FormGroup>
	      
				<ListGroup>
					<TransitionGroup className="transaction-list">
						{items.map(({_id, name, amount, date}) => (
							<CSSTransition key={_id} timeout={500} classNames="fade">	
								<ListGroupItem>
									<Button className="remove-btn" color="danger" size="sm"
									onClick={this.onDeleteClick.bind(this,_id)}
									>&times;
									</Button>
									{date.substring(0, date.indexOf("T"))} {name} {amount} 
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>

				<Table>
			        <thead>
			          <tr>
			            <th>Date</th>
			            <th>Type</th>
			            <th>Transaction</th>
			            <th>Amount</th>
			          </tr>
			        </thead>
			        <tbody>
			          <tr>
			            <th scope="row">1</th>
			            <td>Mark</td>
			            <td>Otto</td>
			            <td>@mdo</td>
			          </tr>
			          <tr>
			            <th scope="row">2</th>
			            <td>Jacob</td>
			            <td>Thornton</td>
			            <td>@fat</td>
			          </tr>
			          <tr>
			            <th scope="row">3</th>
			            <td>Larry</td>
			            <td>the Bird</td>
			            <td>@twitter</td>
			          </tr>
			        </tbody>
			      </Table>


			</Container>
		);
	}


}

TransactionList.propTypes={
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired

}
const mapStateToProps =(state)=> ({
	item: state.item

});

export default connect(mapStateToProps,{getItems, deleteItem}) (TransactionList);