import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container 

} from 'reactstrap';

class AppNavBar extends Component {
	/*
	constructor(props){
		super(props);
	}
	*/
	state = {
		isOpen: false
	}

	//bind this function to the class
	//this.toggle=this.toggle.bind(this); //alternative

	toggle =() => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render (){
		return(
			<div>
				{/*brackets forces it to be treated like vanilla javascript instead of JSX */}
				<Navbar color="dark" dark expand="sm" className="mb-5">{/*expand->on small screens for drop down Nav Bar !!!!! response margin bottom 5*/}
					<Container>
						<NavbarBrand href="/">Transaction List</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://www.nhl.com/">NHL</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://github.com/phillippavlich/Mern_Stack_Financial_App">GitHub</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
			);
	}

}

/*
toggle(){
	this.setState({
		isOpen: !this.state.isOpen
	});

}
*/

export default AppNavBar;