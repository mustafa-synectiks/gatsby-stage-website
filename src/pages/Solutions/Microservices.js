import React, { useState } from 'react';
import Layout from '../../components/layout.js';
import { graphql, StaticQuery } from 'gatsby';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import styled from 'styled-components';
import classnames from 'classnames';
import { FaBars } from 'react-icons/fa';
import Img from 'gatsby-image';

const MICRO_IMAGES = graphql`
	{
		img1: file(relativePath: { eq: "Microservice_1.png" }) {
			childImageSharp {
				fluid(maxWidth: 1024) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img2: file(relativePath: { eq: "Microservice_3.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;
const Microservices = () => {
	const [ activeTab, setActiveTab ] = useState('1');
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const [ isOpen, setNav ] = useState(true);
	const toggleTab = () => {
		setNav((isOpen) => !isOpen);
	};
	return (
		<StaticQuery
			query={MICRO_IMAGES}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;
				const img2 = data.img2.childImageSharp.fluid;
				return (
					<Layout>
						<MicroservicesWrapper>
							<div className='container-fluid '>
								<div className='px-1 px-md-5 py-2 py-md-2 text-justify' />
								<div className=''>
									<Row className='position-relative'>
										<div className='col-sm-12 col-md-12'>
											<Navbar color='light' light expand='lg' className='topNav'>
												<NavbarToggler onClick={toggleNavbar} className='mr-2'>
													<FaBars className='navbar-toggler-icon' />
													<span className='my-1 mx-2 close'>X</span>
												</NavbarToggler>
												<Collapse isOpen={!collapsed} navbar>
													<Nav className='bgWhite d-flex my-2 my-md-4 mx-auto w-85'>
														<NavItem className='one'>
															<NavLink
																id='bgL'
																className={classnames({ active: activeTab === '1' })}
																onClick={() => {
																	toggle('1');
																	toggleTab();
																}}>
																Example of Microservices
															</NavLink>
														</NavItem>

														<NavItem className='one'>
															<NavLink
																id='bgLL'
																className={classnames({ active: activeTab === '2' })}
																onClick={() => {
																	toggle('2');
																	toggleTab();
																}}>
																Benefits of Microservices
															</NavLink>
														</NavItem>
														<NavItem className='one'>
															<NavLink
																id='bgLLL'
																className={classnames({ active: activeTab === '3' })}
																onClick={() => {
																	toggle('3');
																	toggleTab();
																}}>
																Challenges of Microservices
															</NavLink>
														</NavItem>
														<NavItem className='one'>
															<NavLink
																id='bgLLL'
																className={classnames({ active: activeTab === '4' })}
																onClick={() => {
																	toggle('4');
																	toggleTab();
																}}>
																How we can help you?
															</NavLink>
														</NavItem>
													</Nav>
												</Collapse>
											</Navbar>

											<TabContent activeTab={activeTab}>
												<TabPane tabId='1'>
													<div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-5'>
														<div className='w50vw px-2 px-md-3'>
															<p>
																To accommodate the increasing complexity of functional
																requirements, IT applications have embraced a variety of
																architectural patterns. Organizations must meet
																ever-changing business demands — from mainframe
																applications and client-server to service oriented
																architecture (SOA) and microservices.
															</p>

															<p>
																Microservices architecture is a combination of
																successful and proven concepts of software engineering
																such as agile software development, SOA, API-first
																design and continuous delivery (CD). This architecture
																and organizational approach to software development is
																designed to accelerate development cycles, foster
																innovation and ownership and improve the ability to
																maintain and scale applications.
															</p>
														</div>
														<div className='w50vw px-2 px-md-3'>
															<Img fluid={img1} />
														</div>
													</div>
													<div className='p-2 p-md-5'>
														<p>
															Despite technological advancements, 90 percent of business
															IT applications are legacy and what are known as
															“monolithic”. These range from mainframe apps where UI,
															business logic and data storage reside on machines, to
															client-server applications where layered technologies that
															support UI, business functionality and data are stored
															horizontally. Microservices architecture, on the other hand,
															divides the functionality into cohesive verticals by
															implementing a specific domain.
														</p>
														<div className='w-100'>
															<Img fluid={img2} />
														</div>
													</div>
												</TabPane>
												<TabPane tabId='2'>
													<h2>Tab 2</h2>
												</TabPane>
												<TabPane tabId='3'>
													<h2>Tab 3</h2>
												</TabPane>
												<TabPane tabId='4'>
													<h2>Tab 4</h2>
												</TabPane>
											</TabContent>
										</div>
									</Row>
								</div>
							</div>
						</MicroservicesWrapper>
					</Layout>
				);
			}}
		/>
	);
};
export default Microservices;

const MicroservicesWrapper = styled.div`
.w50vw{
	width: 50vw;
}
	 {
		.topNav {
			position: fixed;
			top: 100px;
		}
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
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h5,
		p,
		ul {
			text-align: left;
		}
		.hybJumbo {
			display: flex;
			flex-direction: column;
			align-items: center;
			.himage {
				width: 100%;
				height: auto;
				float: none;
				box-shadow: 5px 5px 5px #789;
				margin-bottom: 10px;
				margin-left: 0rem;
			}
		}
		.marHybrid {
			margin-left: 0rem;
		}
		.w-sm-100 {
			width: 100%;
		}
		.hybridFixed {
			position: fixed;
			top: 6rem;
			left: 0;
			z-index: 99;
		}
		a#bgL,
		a#bgLL,
		a#bgLLL {
			padding: 0.5rem 1.5rem;
			font-size: 12px;
			height: auto;
			/* background: white !important; */
			text-align: left;
			/* display:flex;
    justify-content: space-between; */
		}
		a#bgL.active,
		a#bgLL.active,
		a#bgLLL.active {
			border-bottom: 5px solid #007cc2;
			background: bgBlue !important;
			text-align: left;
			color: var(--synectiksWhite);
			border-radius: 0px;
			/* padding: 0.5rem 1.5rem; */
			font-size: 12px;
			height: auto;
			width: 100%;
		}
		.imgHyb {
			margin-right: 25px !important;
			width: 55px !important;
			z-index: 999;
			position: relative;
		}
		.one {
			z-index: 99999;
			background: white;
			width: 100%;
		}
		ul.tabList.nav.flex-column {
			position: relative;
			z-index: 99999;
			width: 100%;
			left: 0rem;
		}
		.tabList {
			display: block;
		}
		.tabsHide {
			display: none;
		}
		h1 {
			font-size: 32px;
		}
		h2 {
			font-size: 26px;
		}
		h3 {
			font-size: 22px;
		}
		h4 {
			font-size: 18px;
		}
		p {
			font-size: 18px;
		}
		.hybmt {
			margin-top: 2.5rem;
		}
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.logo-btn {
			font-size: 2rem;
			background: white;
			border: none;
			outline: none;
			width: 100vw;
			padding: 0.6rem;
			text-align: left;
			box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.3);
			color: rgba(0, 0, 0, 0.5);
		}

		.logo-btn:hover {
			cursor: pointer;
		}
		.tab-content > .active {
			padding: 0rem 0.5rem;
		}
	}
	@media screen and (min-width: 576px) {
		.w50vw{
	width: 50vw;
}
		.topNav {
			position: relative;
			top: 0;
			display: block;
		}
		.one {
			z-index: 99999;
			background: white;
			width: auto;
		}
		.w-85{
  width: 87vw;
    border: 1px solid var(--textColor);
    background: var(--synectiksWhite);
    justify-content: space-between;
}
  ul.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		/* width: 25vw; */
		left: 0rem;
  }

	ul.nav.flex-column > li > a {
		width: 100%;
		color: rgba(0, 0, 0, 0.8);
		height: 10vh;
		font-size:14px;
		cursor: pointer;
		/* padding-left: 3.2rem; */
  }
  ul.nav.flex-column > li > a {
    width: 100%;
    color: rgba(0,0,0,0.8);
    height: 10vh;
    font-size: 15px;
    cursor: pointer;
  }
 .tab-content>.active{
        padding:0rem 4rem;
      }
	}
  a#bgL,a#bgLL,a#bgLLL{
    background: bgBlue !important;
    text-align: left;
     font-size: 14px;
     cursor: pointer;
  }

a#bgL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
  font-size: 14px;
}
a#bgLL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}
a#bgLLL.active {
  position: relative;
	border-bottom: 5px solid #007cc2;
	/* padding-left: 1rem !important; */
	background: bgBlue !important;
   font-size: 14px;
}
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.hbh1 {
    font-size: 2.5rem;
}
.hybridFixed{
       display: block;
    height: auto;
    position: sticky;
    top: 16%;
    padding-bottom: 21.4rem;
    padding-top: 2.4rem;
}
.nav-item > a.active, .nav-item > a:active{
  height: auto;
}
h2{
  font-size: 2rem;
}
h3{
  font-size:1.75rem;
}
h4{
   font-size: 1.5rem;
}
	}
	@media screen  and (min-width: 768px){
			a#bgLLL.active:after{
    top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
	a#bgL.active:after{
 top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
a#bgLL.active:after{
    top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-top-color: var(--synectiksBlue);
	border-width: 20px;
	margin-left: -20px;
  }
	}
`;
