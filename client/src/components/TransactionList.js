import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
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