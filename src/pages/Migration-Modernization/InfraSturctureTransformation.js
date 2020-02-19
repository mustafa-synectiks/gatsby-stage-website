import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
import CloudCommon from '../../images/CloudCommon.png';
import HybridCloud from '../../images/Hybrid/Hybrid Cloud.jpg';
import hybridIma from '../../images/Hybrid/HybridCloud.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import mcit from '../../images/modernization/mcit.png';
import swd from '../../images/modernization/swd.png';
import awsd from '../../images/modernization/awsd.png';
import circle from '../../images/modernization/circle.png';
import ds from '../../images/Hybrid/Discovery&Assessment.png';
import ts from '../../images/Hybrid/Transformation Services.png';
import EX from '../../images/hybrid/Experience.png';
import EM from '../../images/hybrid/Engagement Model.png';
import CS from '../../images/hybrid/Compliance&Security.png';

const Infrastructure = () => {
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
		<Layout>
			<HybridWrapper>
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
													BRIEF
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
													GETTING STARTED
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
													HOW SYNECTIKS CAN HELP
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
													SYNECTIKS DIFFERENTIATOR
												</NavLink>
											</NavItem>
										</Nav>
									</Collapse>
								</Navbar>

								<TabContent activeTab={activeTab}>
									<TabPane tabId='1'>
										<div>
											<h1 className='text-left'>
												Understanding the Software Defined Transformation:{' '}
											</h1>
											<p>
												Software-defined infrastructure is the definition of technical computing
												infrastructure entirely under the control of software with no operator
												or human intervention. It operates independent of any hardware-specific
												dependencies and is programmatically extensible”.{' '}
											</p>
											<h3>Why Software defined infra structure matter in todays business?</h3>
											<div className='table-responsive-md'>
												<table className='table table-hover'>
													<thead className='thead-light'>
														<tr>
															<th scope='col'>Hardware Defined</th>
															<th scope='col'>Software Defined</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>Time Consuming Manual Provisioning </td>
															<td> Automated provisioning / De-provisioning</td>
														</tr>
														<tr>
															<td>Discrete & Under-utilized </td>
															<td>Pooled and Optimize</td>
														</tr>
														<tr>
															<td>Sized upto maximum need</td>
															<td>Elastic, Grow/Shrink when requires</td>
														</tr>
														<tr>
															<td>Less than 10% Utilization</td>
															<td>
																Every component directly supporting business objective{' '}
															</td>
														</tr>
														<tr>
															<td>Large CapEx / OpEx </td>
															<td>Minimal CapEx, Reduced OpEx</td>
														</tr>
														<tr>
															<td>Less Secure, Error prone</td>
															<td>High Secure, resilient </td>
														</tr>
													</tbody>
												</table>
											</div>
											<div>
												<p>
													The Capex and Opex of maintaining large, complex heterogeneous data
													centers taxing many businesses driven by legacy applications and
													infrastructure. To maintain competitive edge in a highly dynamic
													market, business need to re-imagine the customer experience in lower
													economics. The challenge is that today’s competitive environment is
													accelerating faster than most conventional infrastructure can
													support it. Business need an entirely new, cloud-native approach –
													that’s primed for innovation and agility from the ground-up. With
													the emergence of cloud and virtualization, combined with dramatic
													cost reductions for data center hardware, have driven an evolution
													to large homogeneous, Hybrid IT which are comparatively easy and
													cost effective to manage. Enterprises are looking for dramatically
													reducing the provisioning cycle for compute / storage / network and
													deliver the scale, stability, speed and efficiency required to
													support rapidly evolving enterprises. Software Defined
													Infrastructure (SDI) mainly drives this change. Infrastructure
													transformation is the first technology waypoint on the cloud native
													approach. Business need to lay the foundation for innovation by
													forensically re-architecting the existing legacy environment in
													support of business objectives. Whether that’s controlling costs,
													supporting growth, driving efficiency or otherwise.{' '}
												</p>
												<p>
													Forward-looking IT organizations are modernizing and consolidating
													IT infrastructure to meet the increased agility and
													price-performance requirements of today’s on-demand applications,
													cloud-native services and digital businesses. Innovative
													organizations are re-architecting applications for a Hybrid IT
													agenda, incorporating innovations such as hyper-scaling and
													aggregated infrastructure to reduce total cost of ownership improve
													service velocity and accelerate the pace of business.
												</p>
											</div>
											<div>
												<p>
													A Blueprint for Modernizing and Consolidating Data Center and
													Platforms as below:
												</p>
												<img src={mcit} alt='' className='w-75 mx-auto' />
												<h3 className='py-2 py-md-3 text-center'>
													Synectiks Software Defined Reference Architecture
												</h3>
												<img src={swd} alt='' className='w-50 mx-auto' />
											</div>{' '}
											<img src={awsd} alt='' className='w-50 mx-auto py-2 py-md-4' />
										</div>
									</TabPane>
									<TabPane tabId='2'>
										<div>
											<div>
												<h3>Getting Started To Software Defined Transformation</h3>
												<p>
													The first step is for CIOs to connect with the business to establish
													clear lines of communication and to set common goals. Within the IT
													organization, CIOs must set policies that identify the need to
													prepare for Software Defined Transformation as a priority for
													overall IT strategies and create a clearly defined journey with
													confidence. Synectiks recommend the following steps:
												</p>
												<img src={circle} alt='' className='w-100' />
												<p>
													Discovery & Assessment – Evaluate the needs to standardize,
													rationalize and consolidate existing data center assets for greater
													efficiency and economics, risks involved, and ROI achieved based on
													real time data and POC’s.
												</p>
											</div>
											<div>
												<p>
													<b>Strategic Planning & Architecture</b> – Develop a roadmap for
													upgrading and consolidating infrastructure, and migrating
													applications and data, substantiated by futuristic architecture.
												</p>
												<p>
													<b>Software Defined </b>
													Transformation Modernize and Consolidate Data Center and
													Infrastructure Blueprint and continuously optimize it.
												</p>
												<p>
													<b>Operation Automation </b>
													Accelerate service agility by unifying administration and
													simplifying management The very first step discovery and assessment
													with automated tool will clearly give you insights on the hardware
													inventory, application dependency and resource consumption. You can
													make informed decisions to balance workloads and optimize resources
													and thereby to create a roadmap to guide the journey to Software
													Defined Organization. This roadmap should map people, process,
													technology change requirement, consider IT policy and operating
													model factors; and ultimately produce clear, data-based
													recommendations with a proposed execution plan to enable Software
													Defined Transformation to happen. Getting there will require
													significant upliftment of people skills, impart modern tools and
													technologies, transforming and migrating applications, integrating
													and orchestrating environments, automating and monitoring business
													services, enabling digital processes, and integrating data and
													security.
												</p>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='3'>
										<div>
											<div>
												{/* <h3>How Synectiks can help?</h3> */}
												<p>
													The Modernize and Consolidate Data Center and Infrastructure
													Platform Blueprint available in Synectiks Xformation platform helps
													businesses roll out new IT systems and practices to meet the
													increased agility and price-performance demands of the digital
													enterprise. By following the blueprint’s and Powerful automation you
													can reduce workload and technology sprawl, streamline operations,
													and improve automation, so you can respond to the needs of the
													business more efficiently, quickly and cost-effectively.
												</p>
												<h3> Synectiks Xformation platform can help you:</h3>
												<ul>
													<li>
														Reduce CAPEX and OPEX by consolidating infrastructure, pooling
														resources and eliminating stranded capacity
													</li>
													<li>
														Accelerate service agility by unifying administration and
														simplifying management
													</li>
													<li>
														Improve customer satisfaction and avoid shadow IT by introducing
														service orchestration tools and selfserve portals
													</li>
													<li>
														Meet stringent IoT scalability requirements by collecting and
														processing data at the network edge
													</li>
												</ul>
												<p>
													The Synectiks Xformation Platform delivers cloud speed, scalability
													and economics. Synectiks can enable your enterprise journey to
													Software Defined Transformation , regardless of your starting point.
												</p>
											</div>
											<div className='my-2 my-md-4'>
												<div className='d-flex flex-column flex-md-row justify-content-around align-items-center my-2 my-md-4'>
													<div className='col-md-2'>
														<img src={ds} alt='' className='imgDes' />
													</div>
													<div className='pl-3'>
														<p>
															Synectiks offers a variety of advisory services to assist
															with your modernization and consolidation Journey. Our
															discovery and assessment services can help you draft a
															Software Defined roadmap with a clearly defined business
															case and mapping of peoples / process / technologies along
															with prioritized recommendations. Our recommendations
															reflect deep industry knowledge and contextual knowledge
															about your business.
														</p>
													</div>
												</div>
												<div className='d-flex flex-column flex-md-row justify-content-around align-items-center '>
													<div className='col-md-2'>
														<img src={ts} alt='' className='imgDesc' />
													</div>
													<div className='pl-3'>
														<p>
															You can access our open Xformation platform products and
															resource teams to adopt technology and cultural changes
															quickly — from Software Defined Transformation, People skill
															and process transformation and integration to cloud-native
															apps development. We have vast experience helping businesses
															plan, design, optimize and manage the transitions necessary
															to effect IT modernization, migration and consolidation.
														</p>
													</div>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='4'>
										<div>
											<div className='my-2'>
												{/* <h3>
													<b>Synectiks</b> Differentiator
												</h3> */}
												<p className='mb-2 mb-md-4'>
													We go beyond creating a strategy: Synectiks helps you plan it, do
													it, run it and manage it.
												</p>

												<h4 className='text-center line'>
													Top 9 Reasons to select Synectiks as your Hybrid Cloud Partner:
												</h4>
											</div>
											<div className='my-2 my-md-4'>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EX} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Experience</h4>
														</div>
														<p> Large Scale modernization and consolidation experience</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Artifacts</h4>
														</div>
														<p>
															Transformation Blueprints and Automation Bots available in
															Xformation platform accelerate transformation effort.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Advisory</h4>
														</div>
														<p>
															Quick Discovery / Assessment and transformation plan built
															in weeks, not months.
														</p>
													</div>
												</div>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Pay As You Use</h4>
														</div>
														<p>
															Move to consumption model economics across all IT, use our
															available blueprints that reduce any stranded capacity.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Economics</h4>
														</div>
														<p>
															Upto 50% Lower TCO of IT by having aggregated infrastructure
															and fluid resource pools optimize use of compute, storage
															and fabric resources.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Operation</h4>
														</div>
														<p>
															Upto 40% improvement in IT staff productivity by using our
															automations that unify administration and simplify
															management.
														</p>
													</div>
												</div>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={ds} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Innovation</h4>
														</div>
														<p>2–3X acceleration in continuous improvement cycles</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={CS} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'> Security & Compliance</h4>
														</div>
														<p>
															Provision and change infrastructure through well defined
															blueprints and pipelines that adheres to highest level of
															security & compliance.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EM} alt='' className='tw m-0' />
															<h4 className='my-2 my-md-3'>Engagement</h4>
														</div>
														<p>
															Our every engagement is focused on empowerment, not
															dependency.
														</p>
													</div>
												</div>
											</div>
										</div>
									</TabPane>
								</TabContent>
							</div>
						</Row>
					</div>
				</div>
			</HybridWrapper>
		</Layout>
	);
};

export default Infrastructure;

const HybridWrapper = styled.div`
.topNav{
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
h1,h2,h3,h4,h5,h5,p,ul{
  text-align: left;
}
.hybJumbo{
  display:flex;
  flex-direction: column;
  align-items: center;
  .himage {
		width: 100%;
    height: auto;
    float: none;
		box-shadow: 5px 5px 5px #789;
		margin-bottom: 10px;
    margin-left:0rem;
  }
}
.marHybrid{
  margin-left: 0rem;
}
.w-sm-100{
  width: 100%;
}
.hybridFixed{
  position: fixed;
  top:6rem;
  left:0;
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
a#bgLLL.active  {
    border-bottom: 5px solid #007cc2;
    background: bgBlue !important;
    text-align: left;
    color: var(--synectiksWhite);
    border-radius: 0px;
    /* padding: 0.5rem 1.5rem; */
    font-size: 12px;
    height: auto;
    width:100%;
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
    display:block;
  }
  .tabsHide {
    display: none;
  }
h1{
  font-size:32px;
}
h2{
 font-size: 26px;
}
h3{
  font-size:22px;
}
h4{
  font-size:18px;
}
p{
  font-size:18px;
}
.hybmt{
  margin-top: 2.5rem;
}
.nav-link.active{
  background: var(--synectiksBlue);
  color: var(--synectiksWhite);
}
.logo-btn {
    font-size:2rem;
    background: white;
    border: none;
    outline: none;
    width: 100vw;
    padding: 0.6rem;
    text-align: left;
    box-shadow: 2px 1px 10px rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.5);
}

    .logo-btn:hover {
      cursor: pointer;
    }
      .tab-content>.active{
        padding:0rem 0.5rem;
      }
      	.whbd9 {
		width: 25%;
  }
  	.whbd7 {
		width:25%;
  }
 .w20{
		width:25%;
  }
  .w15 {
	width: 25%;
}


@media (min-width: 576px){
	.topNav{
	position: relative;
	top: 0px;
	z-index: 999;
}
	.one {
	z-index: 99999;
	background: white;
	width: auto;
}
  .hybJumbo{
    display:block;
    	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		float: right;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  }
  .w15 {
	width: 8%;
}
  	.whbd7 {
		width: 7%;
	}
  	.whbd9 {
		width: 8%;
  }
  .w18{
    width:
  }
  .w20{
    width: 16%;
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

   .logo-btn {
    display: none;
  }

  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
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
@media(min-width:768px){
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
  .w-sm-100{
  width: 75%;
}
  	.himage {
		width: 100%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-right: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
@media(min-width:1024px){
 	.himage {
		width: 50%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-left: 2rem;
		margin-bottom: 10px;
  }
  .bxshd{
    box-shadow: 0px 0px 0px 0px lightgray;
  }
}
`;
