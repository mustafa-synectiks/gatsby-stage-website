import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Modal, ModalHeader, ModalBody } from "reactstrap"
// import ModalContact from "../../components/ModalContact"
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
import CloudCommon from '../../images/CloudCommon.png';
import HybridCloud from '../../images/HybridCloud.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AI from '../../images/hybrid/AccelerateInnovation.png';
import RC from '../../images/hybrid/Right Cloud.png';
import BCC from '../../images/hybrid/BalanceCost&Control.png';
import EVL from '../../images/hybrid/Eliminate Vendor Lock In.png';
import WM from '../../images/hybrid/Workload Migration.png';
import IC from '../../images/hybrid/Integrating Clouds.png';
import WC from '../../images/hybrid/Workload Fragmentation.png';
import SPRT from '../../images/hybrid/Support & Assistance.png';
import DRB from '../../images/hybrid/Discovery&Assessment.png';
import DSCR from '../../images/hybrid/DisasterRecoveryBackup.png';
import scr from '../../images/Screenshot_3.png';
// import scrs from "../../images/Screenshot_4.png"
import WS from '../../images/hybrid/Web Servers.png';
import ETL from '../../images/hybrid/DataExtract.png';
import HRP from '../../images/hybrid/HR Payroll.png';
import SLDR from '../../images/hybrid/Supporting Local Data Regulations.png';
import GGEC from '../../images/hybrid/Go Global and edge computing.png';
import SCR5 from '../../images/Screenshot_5.png';
import ADT from '../../images/hybrid/ApplicationDevelopmentandTesting.png';
import HC from '../../images/Hybridcloud.png';
import ECC from '../../images/hybrid/Embrace Cultural Changes.png';
import RCM from '../../images/hybrid/Revamp change management.png';
import ICO from '../../images/hybrid/Integrate cloud operations.png';
import AS from '../../images/hybrid/Automatesupport.png';
import ST from '../../images/hybrid/Shadow IT.png';
import TS from '../../images/hybrid/Transformation Services.png';
import EM from '../../images/hybrid/Engagement Model.png';
import LTR from '../../images/hybrid/Long Term Retention.png';
import WO from '../../images/hybrid/Optimization Service.png';
import DE from '../../images/hybrid/DemoEnvironment.png';
import EA from '../../images/hybrid/Extreme Automation.png';
import PCP from '../../images/hybrid/Public Cloud Partnership.png';
import SCP from '../../images/hybrid/Single Control plane.png';
import CS from '../../images/hybrid/Compliance&Security.png';
import TM from '../../images/hybrid/Time & Money.png';
import EE from '../../images/hybrid/E2E Solution.png';
import EX from '../../images/hybrid/Experience.png';
import EXP from '../../images/hybrid/Expertise.png';
import GSHC from '../../images/GettingStartedwithHybridCloud.png';
import HSCH from '../../images/HowSynectiksCanhelp.png';
import SD from '../../images/SynectiksDifferentiator.png';
import UHC from '../../images/UnderstandingHybridCloud.png';
import styled from 'styled-components';

const Microservices = () => {
	const [ activeTab, setActiveTab ] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const [ isOpen, setNav ] = useState(true);
	const toggleTab = () => {
		setNav((isOpen) => !isOpen);
	};

	return (
		<Layout>
			<MicroservicesWrapper>
				<div className='container-fluid '>
					<div className='px-5 py-2 text-justify' />
					<div className=''>
						<Row className='position-relative'>
							<div className='col-md-12'>
								<div className=''>
									{/* <div className="hybridFixed"> */}
									<button onClick={toggleTab} className='logo-btn'>
										<FaBars />
									</button>
									<div className={isOpen ? `tabsHide` : `tabList`}>
										<Nav className='d-flex my-4 mx-auto w-85'>
											{/* <Nav className='sidetabs'> */}
											{/* <Nav vertical className='sidetabs'> */}
											<NavItem className='one'>
												<NavLink
													id='bgL'
													className={classnames({ active: activeTab === '1' })}
													onClick={() => {
														toggle('1');
														toggleTab();
													}}>
													UNDERSTANDING THE HYBRID CLOUD
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
													GETTING STARTED TO HYBRID CLOUD
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
													{/* <span>
                      <img src={SD} alt="" className='imgHyb'/>
                    </span> */}
													SYNECTIKS DIFFERENTIATOR
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</div>
								{/* </div> */}
								{/* <div className="px-1 mb-3 col-md-10"> */}
								<TabContent activeTab={activeTab}>
									<TabPane tabId='1'>
										<div className='d-flex flex-column flex-md-row align-items-center'>
											<p>
												To accommodate the increasing complexity of functional requirements, IT
												applications have embraced a variety of architectural patterns.
												Organizations must meet ever-changing business demands — from mainframe
												applications and client-server to service oriented architecture (SOA)
												and microservices.
											</p>
											<p />
										</div>
									</TabPane>
									<TabPane tabId='2'>
										<div className=''>
											<div className='row'>
												<div className='col-md-6'>
													<h2 className=''>GETTING STARTED TO HYBRID CLOUD</h2>
													<p>
														The first step is for CIOs to connect with the business to
														establish clear lines of communication and to set common goals.
														Within the IT organization, CIOs must set policies that identify
														the need to prepare for hybrid cloud as a priority for overall
														IT strategies. Then we recommend assessing the company’s
														applications and IT estate and creating a roadmap to guide the
														journey to optimal hybrid cloud. This roadmap should compare
														current and future run costs to create a business case for
														change; assess application and workload placement and data
														locality options; recommend application transformation
														requirements; consider IT policy and operating model factors;
														and ultimately produce clear, data-based recommendations with a
														proposed execution plan to enable hybrid IT transformation to
														happen. Getting there will require transforming and migrating
														applications, integrating and orchestrating environments,
														automating and monitoring business services, enabling digital
														processes, and integrating data and security.{' '}
													</p>
												</div>
												<div className='col-md-6'>
													<img src={HC} alt='' className='w-75' />
												</div>
											</div>
											<div>
												<h4>Key Strategic Drivers</h4>
												<p>
													As companies embrace hybrid Cloud, they must address both technology
													and the human side of change. There are several key actions to take:
												</p>
											</div>
											<div className='row'>
												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={ECC} alt='' className='w-22' />
													<h4>Embrace Cultural Changes</h4>
												</div>
												<div className='col-sm-8 col-md-8'>
													<p>
														As the organization start embracing hybrid cloud and take
														benefits of Serverless, PaaS, IoT and edge computing, so the
														workforce should become more integrated, multifunctional,
														flexible and agile. Existing and new IT stuffs must adept cloud
														technologies, agile methodologies so that they can build, deploy
														and scale applications across multiple infrastructure
														environments using Agile and DevOps processes. Most importantly
														companies need to foster a culture of learning at scale.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={RCM} alt='' className='w-25' />
													<h4>Revamp change management</h4>
												</div>
												<div className='col-ms-8 col-md-8'>
													<p>
														The existing governance processes, gates and approval procedures
														designed for traditional legacy IT environments are no longer
														appropriate in a cloud environment. Companies should revamp
														their change management systems to allow changes to happen
														quickly and, using automated workflows, to reduce manual
														intervention.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={ICO} alt='' className='w-22' />
													<h4>Integrate cloud operations</h4>
												</div>
												<div className='col-ms-8 col-md-8'>
													<p>
														As organizations move workloads to the cloud, the IT operations
														function should adapt to manage both on-premises and cloud-based
														applications. This new model, called CloudOps, can provide
														continuous integrated operations in a multi-cloud environment to
														enable rapid response to events, incidents and requests. Adding
														DevOps to the mix then utilizes automation, integration and
														organizational change to enable more frequent enhancements that
														result in higher quality software.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='col-sm-12 col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={AS} alt='' className='w-22' />
													<h4>Automate support</h4>
												</div>
												<div className='col-sm-12 col-md-8'>
													<p>
														To the extent possible, automate IT support functions. For
														example, the traditional trouble ticket system can be manually
														intensive and inefficient. Automation can improve service and
														free up IT personnel for higher-level activities. Longer term,
														companies will be able to deploy machine learning and AI to take
														log data from cloud-based systems and automatically take actions
														to resolve or even prevent incidents. The idea is to learn once,
														fix with code and share learnings to improve code over time and
														scale knowledge.
													</p>
												</div>
											</div>
											<div className='row mlr '>
												<div className='col-sm-12 col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={ST} alt='' className='w-22' />
													<h4>Manage “shadow IT”</h4>
												</div>
												<div className='col-sm-12 col-md-8'>
													<p>
														Business units are often acquiring the cloud services they need
														because IT moves too slowly. At some point, those services must
														be integrated back into the traditional IT environment for
														operational and security reasons through a services governance
														model that encompasses hybrid IT elements. In addition, it’s
														important for CIOs to have a handle on what the enterprise is
														spending on IT services. The only way to accomplish this is to
														adopt hybrid IT and demonstrate to business units that IT can
														support the pace and scale that the business requires.
													</p>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='3'>
										<div>
											<p className=''>
												<h2 className='hybmt'>HOW SYNECTIKS CAN HELP</h2>
												Synectiks can enable your enterprise journey to hybrid IT, regardless of
												your starting point.
											</p>
											<div className='row my-5'>
												<div className='col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={DRB} alt='' className='w-25 mt-n5' />
													<h4>Discovery & Assessment</h4>
												</div>
												<div className='col-md-8'>
													<p>
														Our discovery and assessment services can help you draft a
														hybrid IT roadmap with a clearly defined business case and
														prioritized recommendations by workload or accelerate efforts
														already underway. Our recommendations reflect deep industry
														knowledge and contextual knowledge about your business.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='col-md-4 text-center d-flex align-items-center flex-column'>
													<img src={TS} alt='' className='w-25 mt-3' />
													<h4>Transformation Services</h4>
												</div>
												<div className='col-md-8'>
													<p>
														You can access our open Xformation platform products and
														resource teams to adopt change quickly — from application
														migration, transformation and integration to cloud-native apps
														development, containerization, platform services and
														microservices — to enable your enterprise to thrive in public
														and virtual private environments. Synectiks xformation platform
														coupled with its Hybrid cross cloud infrastructure delivers you
														the maximum flexibility to run/move your high performant
														workloads across clouds and manage them through a single pane of
														glass.
													</p>
												</div>
											</div>
											<blockquote className='blockquote blockquote-custom bg-white p-5 shadow rounded my-5'>
												<div className='blockquote-custom-icon bg-info shadow-sm'>
													<i className='fa fa-quote-left text-white' />
												</div>
												<p className='mb-0 mt-2 font-italic'>
													"Synectiks managed services helped us to consolidate our entire
													business from 4 different DC’s to a hybrid cloud that is fully
													software defined and microservices based ensuring our scalability
													and performance SLA."
												</p>
												<footer className='blockquote-footer pt-4 mt-4 border-top'>
													Top 2 Motor Industry
													<br />
													<cite title='Source Title'>
														(Did complete software defined transformation Modernization)
													</cite>
												</footer>
											</blockquote>
										</div>
									</TabPane>
									<TabPane tabId='4'>
										<div className=''>
											<div className=''>
												<h3>
													<b>Synectiks</b> Differentiator
												</h3>
												<p>
													We go beyond creating a strategy: Synectiks helps you plan it, do
													it, run it and manage it.
												</p>

												<h4>
													Top 12 Reasons to select Synectiks as your Hybrid Cloud Partner:
												</h4>
											</div>

											<div className='my-4'>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EX} alt='' className='tw m-0' />
															<h4 className='my-3'>Experience</h4>
														</div>
														<p> 10+ Large Scale Hybrid Cloud Transformation</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EXP} alt='' className='tw m-0' />
															<h4 className='my-4'>Expertise</h4>
														</div>
														<p>
															Experience Team with proven track record of CloudOps
															delivery enabled with DevSecOps Capabilities
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={TM} alt='' className='tw m-0' />
															<h4 className='my-3'>Time & Money</h4>
														</div>
														<p>
															{' '}
															Our open Product Driven Delivery Model allows customers to
															quickly build, deliver and orchestrate cross cloud services
															@50% time & cost.
														</p>
													</div>
												</div>
											</div>
											<div>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EE} alt='' className='tw m-0' />
															<h4 className='my-4'>E2E Solution</h4>
														</div>
														<p>
															Single point of contact for Application Migration,
															Transformation and Integration to cloud-native Apps
															services.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
														<div className='d-flex align-items-center flex-column'>
															<img src={SCP} alt='' className='tw m-0' />
															<h4 className='my-3'>Single Control plane</h4>
														</div>
														<p>
															{' '}
															Xformation is a single interface and platform to manage all
															your workloads distributed across multiple clouds and
															boundaries within a single control plane.
														</p>
													</div>
													<div className='co
                          l-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={CS} alt='' className='tw m-0' />
															<h4 className='my-4'>Compliance & Security</h4>
														</div>
														<p>
															Our compliance and security assessment tools makes sure your
															hybrid cloud journey meet your business compliance.
														</p>
													</div>
												</div>
											</div>

											<div>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EA} alt='' className='tw m-0' />
															<h4 className='my-3'>Extreme Automation</h4>
														</div>
														<p>
															{' '}
															Use our existing automation capabilities to automate
															infrastructure , operations, security in hybrid IT
															environment.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={PCP} alt='' className='tw m-0' />
															<h4 className='my-4'>Public Cloud Partnership</h4>
														</div>
														<p>
															Our advanced partnership with major public cloud providers
															help you to get support at every stage.
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex text-center px-5'>
															<div>
																<div className='d-flex align-items-center flex-column'>
																	<img src={DE} alt='' className='tw m-0' />
																	<h4 className='my-3'>Demo Environment</h4>
																</div>
																<p>
																	Avail the opportunity to quickly create demo hybrid
																	cloud setup in our existing hybrid IT environment
																	and testify you key business use cases.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className='mb-4'>
												<div className='row'>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={WO} alt='' className='tw m-0' />
															<h4 className='my-4'>Optimization Service</h4>
														</div>
														<p>We do optimal resource pooling from multiple clouds.</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={EM} alt='' className='tw m-0' />
															<h4 className='my-3'>Engagement Model</h4>
														</div>
														<p>
															Our every engagement focused on empowerment – not dependency
														</p>
													</div>
													<div className='col-sm-4 col-md-4 text-center'>
														<div className='d-flex align-items-center flex-column'>
															<img src={LTR} alt='' className='tw m-0' />
															<h4 className='my-4'>Long Term Retention</h4>
														</div>
														<p>100% Customer Retention Rate.</p>
													</div>
												</div>
												<p>
													Finally, we help you run it all at a lower cost using CloudOps
													delivery enabled with DevSecOps capabilities and extreme automation
													from our Synectiks Xformation platform driven services delivery
													model. Xformation Platform allows to quickly build and deliver and
													orchestrate cross cloud services , at-scale, repeatable offerings
													and solutions that help to drive your Hybrid Cloud journey @50% time
													& cost. Xformation is a single interface and platform to manage all
													your workloads distributed across multiple clouds and boundaries
													within a single control plane. <br />
													Now is the time to act. Don’t be disrupted — be the disruptor. Let
													us help you innovate and transform to differentiate with speed and
													quality. That’s Synectiks. That’s transformation Delivered in open
													product based solutioning model.
												</p>
											</div>
										</div>
									</TabPane>
								</TabContent>
							</div>
						</Row>
					</div>
				</div>
			</MicroservicesWrapper>
		</Layout>
	);
};

export default Microservices;

const MicroservicesWrapper = styled.div`
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
		/* display: flex; */
		background: white;
		/* box-shadow: 5px 5px 5px lightgray; */
		/* padding: 5px 2px 2px 2px; */
		/* border-bottom: 1px solid lightgrey; */
		/* width:100%; */
		/* background:rgba(0,0,0,0.5); */
	}
	ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
		display: block;
		/* width: 100%;
		color: rgba(0, 0, 0, 0.8);
		height: 10vh;
		font-size:15px;
		cursor: pointer; */
		/* padding-left: 3.2rem; */
	}
	.tabsHide {
		display: none;
	}
	h1 {
		font-size: 1.4rem;
	}
	h2 {
		font-size: 1.3rem;
	}
	h3 {
		font-size: 1.2rem;
	}
	h4 {
		font-size: 1.1rem;
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
	.tab-content {
		padding-top: 4rem;
	}

	@media (min-width: 576px) {
		.w-85 {
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
		.tabList {
			display: block;
		}
		.tabsHide {
			display: block;
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 14px;
			cursor: pointer;
			/* padding-left: 3.2rem; */
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 15px;
			cursor: pointer;
		}
		.tab-content {
			/* padding-top:0rem;
		padding-left: 1.5rem;
		padding-right: 3rem; */
			text-align: justify;
			padding: 3rem 3rem 1rem 3rem;
		}
		a#bgL,
		a#bgLL,
		a#bgLLL {
			/* padding: 0.5rem 0.5rem !important; */
			background: bgBlue !important;
			text-align: left;
			/* display: flex;
    justify-content: space-around;
    align-items: baseline; */
			font-size: 14px;
			cursor: pointer;
		}
		a#bgL.active:after {
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
		a#bgLL.active:after {
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
		a#bgLLL.active {
			position: relative;
			border-bottom: 5px solid #007cc2;
			/* padding-left: 1rem !important; */
			background: bgBlue !important;
			font-size: 14px;
		}
		a#bgLLL.active:after {
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
		.logo-btn {
			display: none;
		}
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: right;
			margin-left: 2rem;
			margin-bottom: 10px;
		}
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.hbh1 {
			font-size: 2.5rem;
		}
		.hybridFixed {
			display: block;
			height: auto;
			position: sticky;
			top: 16%;
			padding-bottom: 21.4rem;
			padding-top: 2.4rem;
		}
		.nav-item > a.active,
		.nav-item > a:active {
			height: auto;
		}
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.75rem;
		}
		h4 {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 768px) {
		.himage {
			width: 100%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			margin-right: 2rem;
			margin-bottom: 10px;
		}
	}
	@media (min-width: 1024px) {
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: right;
			margin-left: 2rem;
			margin-bottom: 10px;
		}
	}
`;
