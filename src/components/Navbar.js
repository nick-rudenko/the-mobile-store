import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './styled/Button';
import { ProductConsumer } from '../context';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<img className="logo" src={logo} alt="logo" />
				</Link>
				<Link to="/cart" className="ml-auto mr-0">
					<ButtonContainer>
						<span>
							<i className="fas fa-shopping-cart" />
							<span> my cart</span>
						</span>{' '}
						<ProductConsumer>
							{value => {
								if (value.itemsTotalCount) {
									return <ItemCountDot>{value.itemsTotalCount}</ItemCountDot>;
								} else {
									return;
								}
							}}
						</ProductConsumer>
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainDark);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.1rem;
	}
`;

const ItemCountDot = styled.span`
	background: var(--btnDangerMain);
	display: inline-block;
	top: 0px;
	left: 0px;
	border-radius: 20rem;
	width: 1.5rem;
	height: 1.5rem;
	font-size: 1rem;
	font-weight: 900;
`;
