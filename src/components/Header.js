import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Topbar from './Topbar';
import logo from '../images/logo.png';
import styled from 'styled-components';

// const z = {
//   zIndex: "9999 !important",
// }

const Header = () => {
	return (
		<HeaderNav>
			<div className='FixedHeader'>
				<div className='bg-top pt-2 pl-md-0 py-md-1'>
					<Topbar />
				</div>
				<Navbar expand='lg' className='z pl-3 pr-3 px-md-5'>
					<Container fluid={true}>
						<Navbar.Brand href='/'>
							<img src={logo} alt='synectiks' />
						</Navbar.Brand>
						<Navbar.Toggle className='navbar-toggler-right' aria-controls='basic-navbar-nav'>
							{/* <span className='navbar-toggler-icon' /> */}
							<AiOutlineMenu className='navbar-toggler-icon' />
							<AiOutlineClose className='my-1 mx-2 close' />
						</Navbar.Toggle>
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
								<NavDropdown title='What we Do' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/whysynectiks/index.html'>Why Synectiks</NavDropdown.Item>
									<NavDropdown.Item href='/casestudies/index.html'>Case Studies</NavDropdown.Item>
									<NavDropdown.Item href='/'>
										Area Of Expertise
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Migration & Modernization' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/devops/index.html'>DevOps Transformation</NavDropdown.Item>
									<NavDropdown.Item href='/foundation/index.html'>
										Infrastructure Transformation
									</NavDropdown.Item>
									<NavDropdown.Item href='/migrations/index.html'>
										Application Transformation
									</NavDropdown.Item>
									<NavDropdown.Item href='/microservices/index.html'>
										Data Transformation
									</NavDropdown.Item>
									{/* <NavDropdown.Item href='/microservices/index.html'>
										Xformation Software
									</NavDropdown.Item> */}
								</NavDropdown>
								<NavDropdown title='Solutions' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/microservices/index.html'>Microservices</NavDropdown.Item>
									<NavDropdown.Item href='/CloudManagedBackup/index.html'>
										Cloud Automation
									</NavDropdown.Item>
									<NavDropdown.Item href='/CloudDisasterRecovery/index.html'>
										Monitoring
									</NavDropdown.Item>
									<NavDropdown.Item href='/CloudDisasterRecovery/index.html'>
										Analytics
									</NavDropdown.Item>
									<NavDropdown.Item href='/hybridcloud/index.html'>Hybrid Cloud</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Services' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/applicationservices/index.html'>
										O365 Migration
									</NavDropdown.Item>
									<NavDropdown.Item href='/managedservices/index.html'>
										Managed Services
									</NavDropdown.Item>
									<NavDropdown.Item href='/primarycloudhostingservices/index.html'>
										Private Cloud Hosting Services
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Resources' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/featured/index.html'>Featured</NavDropdown.Item>
									<NavDropdown.Item href='/casestudy/index.html'>Blog</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title='Company' id='basic-nav-dropdown'>
									<NavDropdown.Item href='/about/index.html'>About Us</NavDropdown.Item>
									<NavDropdown.Item href='/careers/index.html'>Career</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</HeaderNav>
	);
};

export default Header;

const HeaderNav = styled.div`
	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .5);
		border-color: rgba(0, 0, 0, 0);
	}
	.navbar-toggler > .close {
		display: inline;
	}
	.navbar-toggler > .navbar-toggler-icon {
		display: none;
	}
	.navbar-toggler:not(.collapsed) > .close {
		display: none;
	}
	.navbar-toggler:not(.collapsed) > .navbar-toggler-icon {
		display: inline;
		background-image: none;
	}
	.card-header {
		padding: .75rem 9.25rem !important;
	}
	.bg-top {
		background: var(--synectiksBlue) !important;
	}
	@media (min-width: 576px) {
		.nav-item > a.active,
		.nav-item > a:active {
			background-color: #c9ddf1 !important;
			border-radius: 0.25rem;
			height: 2.75rem;
		}
		.bg-top {
			background: var(--synectiksBlue) !important;
			height: auto;
		}
		.px-5 {
			padding-left: 3.75rem !important;
			padding-right: 3.75rem !important;
		}
		.dropdown-item {
			background-color: var(--synectiksWhite);
			color: var(--textColor);
		}
		.dropdown-menu {
			background: var(--synectiksWhite);
		}
	}
`;