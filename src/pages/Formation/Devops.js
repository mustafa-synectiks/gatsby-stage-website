import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Modal, ModalHeader, ModalBody } from "reactstrap"
// import ModalContact from "../../components/ModalContact"
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
import CloudCommon from '../../images/CloudCommon.png';
import HybridCloud from '../../images/HybridCloud.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import classnames from 'classnames';
import one from '../../images/Devops/1.png';
import two from '../../images/Devops/Technology Transformation.svg';
import speed from '../../images/Devops/speed.svg';
import scale from '../../images/Devops/scale.svg';
import security from '../../images/Devops/Security.png';
import four from '../../images/Devops/Discovery & Assessment.png';
import five from '../../images/Devops/Transformation Services.png';
import six from '../../images/Devops/6.png';
import Expertise from '../../images/Devops/Expertise.png';
import Experience from '../../images/Devops/Experience.png';
import Contribution from '../../images/Devops/Contribution.png';
import Engagement from '../../images/Devops/Engagement Model.png';
import pcpartner from '../../images/Devops/Public Cloud Partnership.png';
import ltretention from '../../images/Devops/Long Term Retention.png';
import E2E from '../../images/Devops/E2E Solution.png';
import Extreme from '../../images/Devops/Extreme Automation.png';
import maxFac from '../../images/Devops/Maximum Flexibility.png';
import fastDeliv from '../../images/Devops/Faster Delivery.png';
import betterQual from '../../images/Devops/Better Quality.png';
import lowCost from '../../images/Devops/Lower Cost.png';

import styled from 'styled-components';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Devops = ({ location }) => {
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
			<SEO title='Devops Transformation' />

			<DevopsWrapper>
				<div className='container-fluid '>
					<div className=''>
						<Row className='position-relative'>
							<div className='col-md-12'>
								<div className=''>
									<div>
										<div className='px-5 pt-5 text-justify'>
											<BreadCrumbs
												title='Home'
												subtitle='Migration & Modernization'
												pageTitle='Devops'
											/>
										</div>
										<Navbar color='light' light expand='lg'>
											<NavbarToggler onClick={toggleNavbar} className='mr-2' />
											<Collapse isOpen={!collapsed} navbar>
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
															Devops Transformation
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
															GETTING STARTED TO DEVOPS
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
													<NavItem className='one'>
														<NavLink
															id='bgLLL'
															className={classnames({ active: activeTab === '5' })}
															onClick={() => {
																toggle('5');
																toggleTab();
															}}>
															{/* <span>
                      <img src={SD} alt="" className='imgHyb'/>
                    </span> */}
															KEY BENEFITS
														</NavLink>
													</NavItem>
												</Nav>
											</Collapse>
										</Navbar>
									</div>
								</div>

								<TabContent activeTab={activeTab}>
									<TabPane tabId='1'>
										<div>
											<h2 className=''>Understanding the DevOps Transformation:</h2>
											<p>
												DevOps is the combination of cultural philosophies, practices, and tools
												that increases an organization’s ability to deliver applications and
												services at high velocity: evolving and improving products at a faster
												pace than organizations using traditional software development and
												infrastructure management processes. This speed enables organizations to
												better serve their customers and compete more effectively in the market.
											</p>
										</div>

										<div className=''>
											<h3>Why DevOps Transformation matter in Today’s Business?</h3>
											<div className='my-3 d-flex flex-row justify-content-around'>
												{/* <img src={AI} alt="" className="w-50" /> */}
												<p className=''>
													Competition, new products and continuing pressure to monetize older
													services severely taxing many businesses driven by legacy
													applications and infrastructure. To maintain competitive edge in a
													highly dynamic market, business need to re-imagine the customer
													experience in lower economics. Enterprises looking for modernization
													of their legacy stack and operate in more fast and competitive way
													taking DevOps as key strategic drivers. As companies embrace DevOps,
													they must address both technology and the human side of change. The
													most important need for technology and human side are as follows:
												</p>
											</div>
											<div className='my-3 d-flex align-items-center flex-column'>
												<div>
													<h3>Technology Shift</h3>
													<p className=''>
														Small services delivered in extreme agile manner and runs in
														multi cloud hybrid ecosystem in lowest Capex & Opex with highest
														security.
													</p>
												</div>
												<div className='mx-auto'>
													<img src={one} alt='' className='w-100' />
												</div>
											</div>
											<div className='my-3 d-flex flex-column justify-content-around align-items-center'>
												<div>
													<h3> Cultural Shift</h3>
													<p className=''>
														A culture with less roles, much E2E responsibilities, which
														innovates fast accepting high speed feedback and respond with
														super-fast delivery coupled with stringent security and lower
														economics.
													</p>
												</div>
												<img src={two} alt='' className='w-100' />
											</div>
										</div>
									</TabPane>
									<TabPane tabId='2'>
										<div>
											<h2 className=''>Getting Started To DevOps</h2>
											<p>
												The first step is for CIOs to connect with the business to establish
												clear lines of communication and to set common goals. Within the IT
												organization, CIOs must set policies that identify the need to prepare
												for DevOps as a priority for overall IT strategies. Courageous
												leadership is key for success in adopting an enterprise wide DevOps
												culture.
												<br />
												<br />
												Then we recommend assessing the company’s People, Process and Technology
												estate using some standard maturity model. The Synectiks maturity model
												for a quick DevOps assessment is as follows:
											</p>
										</div>
										<div className='text-center '>
											<h4 className='my-5'>Where do you find your current DevOps Maturity?</h4>
											<div className='w-75 mx-auto'>
												<img src={six} alt='' className='boxshdd w-100' />
											</div>
											<div>
												<h4 className='text-center my-5'>
													Our DevOps Gap analysis process briefly as follows:
												</h4>

												<div>
													<h2 className='fw6 text-center'>Gap Analysis</h2>
													<h6 className='text-center'>4 Phased - 5 days</h6>
												</div>

												<div className='row py-3'>
													<div className='container-fluid'>
														<div className='d-flex flex-column flex-md-row justify-content-around'>
															<div className='col-md-3 p-0 mx-3 border boxshd'>
																<div className='count bgOrange'>
																	<div className='counters brclr'>1</div>
																	<h6 className='text-center mt-2'>
																		Day 1<br /> Project kick-off
																	</h6>
																</div>
																<h6 className='mt-4'>Initial Meetings</h6>
																<ul className='text-left f14 pr-2'>
																	<li>
																		Meeting with decision makers to get an insight
																		on client pain-points and desired future-state
																	</li>
																	<li>
																		Kick-Off meeting with DevOps assessment
																		stakeholders
																	</li>
																</ul>
															</div>

															<div className='col-md-3 p-0 mx-3 border boxshd'>
																<div className='count bgRed text-light'>
																	<div className='counters'>2</div>
																	<h6 className='text-center mt-2'>
																		Day 2 <br />Assessment
																	</h6>
																</div>
																<h6 className='mt-4'>Questions Based Audit</h6>
																<ul className='text-left  f14'>
																	<li>A DevOps briefing for all interviews</li>
																	<li>Audit on following key focus areas:</li>

																	<li>Organization</li>
																	<li>Automation</li>
																	<li>
																		As-Is Analyzer people process Tools, Technology
																	</li>
																</ul>
															</div>
															<div className='col-md-3 p-0 mx-3 border boxshd'>
																<div className='count hx3  text-light'>
																	<div className='counters'>3</div>
																	<h6 className='text-center mt-2'>
																		Day 3 <br />Report preparation
																	</h6>
																</div>
																<h6 className='mt-4'>Report Generation</h6>
																<ul className='text-left f14'>
																	<li>
																		Preparation of findings report DevOps
																		transformation plan and Roadmap
																	</li>
																</ul>
															</div>
															<div className='col-md-3 p-0 mx-3 border boxshd'>
																<div className='count bgBlue text-light'>
																	<div className='counters'>4</div>
																	<h6 className='text-center mt-2'>
																		Day 4 <br />Presentation
																	</h6>
																</div>
																<h6 className='mt-1 mt-md-4'>Presentation</h6>
																<ul className='text-left f14 pr-1 pr-md-2'>
																	<li>
																		Presentation of the report and plans to
																		stakeholders, following plans are deliverd.
																	</li>{' '}
																	<li>Phase wise maturity development</li>
																	<li>Tools & Technology Adoption</li>
																	<li>Skill Development</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<h5 className='py-2 py-md-5'>
												For your self-assessment, please refer{' '}
												<a href=''>DevOps assessment Questionnaires:</a>
											</h5>
											<p className='text-justify'>
												The standard maturity model-based assessment will clearly give you
												insights on the current and future capability to create a business case
												for improvement in each capability and thereby helping you to create a
												roadmap to guide the journey to DevOps centric organization. This
												roadmap should map people, process, technology change requirement,
												consider IT policy and operating model factors; and ultimately produce
												clear, data-based recommendations with a proposed execution plan to
												enable DevOps transformation to happen. Getting there will require
												significant upliftment of people skills, impart modern tools and
												technologies, transforming and migrating applications, integrating and
												orchestrating environments, automating and monitoring business services,
												enabling digital processes, and integrating data and security.
											</p>
										</div>
									</TabPane>
									<TabPane tabId='3'>
										<div>
											<h4> How Synectiks can help?</h4>
											<p>
												Enterprises looking for modernization of their legacy stack and operate
												in more fast and competitive way, can use the Synectiks open platform
												and specialized resources to bring the cultural transformation and
												agility needed for today’s business. Whether it is a new business
												application or transformation of legacy applications, our open platform
												coupled with our experience and expertise accelerate the project
												execution @50% time & cost.
											</p>
											<h4>Technology Transformation -</h4>
											<p>
												“Over 85% of enterprise IT organizations will commit to multi-cloud
												architectures by 2018, IDC. End User experience, Security, Agility,
												Flexibility, Consumption Based pricing are most important five
												priorities for CIO’s today. Synectiks is one of very few technology
												companies, who delivers professional services on advanced technologies
												backed by an open xformation platform that accelerates your DevOps
												transformation journey @50% time & cost.”
											</p>

											<p>
												Synectiks build the most powerful open product that helps customers to
												provision resources across clouds in complete software defined way and
												deliver modern container and FAAS driven workloads on it. The platform
												takes care of Continuous delivery, Continuous Deployment, Continuous
												security and continuous compliance continuous automation to make sure
												the workload runs seamlessly with highest security, performance,
												scalability and availability.
											</p>
											<h4>Cultural Transformation –</h4>
											<p>
												Need? A culture with less Roles , much E2E responsibilities Innovate /
												Deliver Fast High Speed Feedback and Superfast Delivery Lower Capex,
												Opex
												<br />
												<br />
												Why Us? Experience in addressing Technology & Cultural Changes
												Accelerate DevOps adoption with Open Platform & Skilled resources.
												Assess DevOps maturity and address Gaps.
											</p>

											<p>
												Ensuring that you stay ahead of race and keep disrupting by adopting
												most modern technologies intelligently and effectively, requires an Open
												Product Based Professional Services partner who understand your
												requirements for:
											</p>
											<div className='my-1 my-md-3'>
												<div className='my-1 my-md-3 d-flex flex-column flex-md-row align-items-center'>
													<div className='w125px text-center mr-1 mr-md-5'>
														<img src={speed} alt='' className='w125px' />
													</div>
													<div className=''>
														<h4 className='my-1 my-md-3'>Speed</h4>
														<p>
															Introduction of New products or transforming your existing
															legacy monolith application to microservices faster While
															Maintaining Operational Control and Customer Visibility.
														</p>
													</div>
												</div>
												<div className=' my-3 d-flex flex-column flex-md-row align-items-center'>
													<div className=' w125px text-center mr-1 mr-md-5'>
														<img src={scale} alt='' className='w125px' />
													</div>
													<div>
														<h5 className='my-1 my-md-3'>Scale</h5>
														<p>
															Grow cost-effectively to meet new organizational and
															business requirements across the enterprise using a highly
															scalable architecture that can distribute the workloads
															across clouds, enables hybrid cloud adoption with maximum
															security and highest flexibility.
														</p>
													</div>
												</div>
												<div className='my-3 d-flex flex-column flex-md-row align-items-center'>
													<div className='w125px text-center mr-1 mr-md-5'>
														<img src={security} alt='' className=' w125px' />
													</div>
													<div className=''>
														<h5 className='my-1 my-md-3'>Security</h5>
														<p>
															Provision and Manage infrastructure, application services in
															complete software defined way with maximum automation so
															that you never fall into security loopholes. Enables
															continuous Audit, Continuous Security/- Compliance to have
															real time checks and visibility on security guidelines.
														</p>
													</div>
												</div>
											</div>

											<div className='row'>
												<h4 className='pt-0 pt-md-0 pb-2 pb-md-3'>
													Synectiks can enable your enterprise journey to DevOps, regardless
													of your starting point.
												</h4>
												<div className='d-flex flex-column flex-md-row align-items-center'>
													<img src={four} className='w15 mr-4' />
													<div>
														<h5>Discover & Assessment</h5>
														<p>
															Our discovery and assessment services can help you draft a
															DevOps roadmap with a clearly defined business case and
															mapping of peoples / process / technologies along with
															prioritized recommendations. Our recommendations reflect
															deep industry knowledge and contextual knowledge about your
															business.
														</p>
													</div>
												</div>
												<div className='d-flex flex-column flex-md-row align-items-center'>
													<img src={five} className='w9 mr-5' />
													<div>
														<h5>Transformation Services</h5>
														<p>
															You can access our open Xformation platform products and
															resource teams to adopt technology and cultural changes
															quickly — from Application modernization, people skill and
															process transformation and integration to cloud-native apps
															development, containerization, platform services and
															microservices — to enable your enterprise to thrive in
															Hybrid IT environments.{' '}
														</p>
													</div>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='4'>
										<div>
											<h3>
												<b>Synectiks</b> Differentiator
											</h3>
											<p>
												We go beyond creating a strategy: Synectiks helps you plan it, do it,
												run it and manage it.
											</p>

											<h4 className='text-center my-5'>
												Top 8 Reasons to select Synectiks as your Hybrid Cloud Partner:
											</h4>
										</div>

										<div className='my-4'>
											<div className='row'>
												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<div className='d-flex align-items-center flex-column'>
														<img src={Expertise} alt='' className='tw m-0 h-75' />
														<h5 className='mb-4'>Expertise</h5>
													</div>
													<p>
														Experience Team with proven track record of CloudOps delivery
														enabled with DevSecOps Capabilities.
													</p>
												</div>
												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<div className='d-flex align-items-center flex-column'>
														<img src={Experience} alt='' className='tw m-0' />
														<h5 className='mt-3'>Experience</h5>
													</div>
													<p>
														{' '}
														We have done large Transformation projects with Toyota,
														Relianace and cultural challenges effectively and brought the
														changes, resulting significant improvement and savings.
													</p>
												</div>

												<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
													<div className='d-flex align-items-center flex-column'>
														<img src={Contribution} alt='' className='tw m-0' />
														<h5 className='mt-3'>Contribution</h5>
													</div>
													<p>
														{' '}
														We are continuously contributing open XFormation platform that
														is accelerating the transformation @50% Time & Cost.
													</p>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-sm-4 col-md-4 text-center'>
												<div className='d-flex align-items-center flex-column'>
													<img src={Engagement} alt='' className='tw m-0' />
													<h5 className='mt-3'>Engagement Model</h5>
												</div>
												<p>Our every engagement focused on empowerment – not dependency.</p>
											</div>
											<div className='col-sm-4 col-md-4 text-center'>
												<div className='d-flex align-items-center flex-column'>
													<img src={pcpartner} alt='' className='tw m-0' />
													<h5 className=''>Public Cloud Partnership</h5>
												</div>
												<p>
													Our advanced partnership with major public cloud providers help you
													to get support at every stage.
												</p>
											</div>
											<div className='col-sm-4 col-md-4 text-center'>
												<div className='d-flex align-items-center flex-column'>
													<img src={ltretention} alt='' className='tw m-0' />
													<h5 className='mt-2'>Long Term Retention</h5>
												</div>
												<p>100% Customer Retention Rate.</p>
											</div>
										</div>
										<div className='row mt-5'>
											<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
												<div className='d-flex align-items-center flex-column'>
													<img src={E2E} alt='' className='tw m-0' />
													<h5 className='mt-3'>E2E Solution</h5>
												</div>
												<p>
													Single point of contact for Application Migration, Transformation
													and Integration to cloud-native Apps services.
												</p>
											</div>
											<div className='col-sm-4 col-md-4 text-center'>
												<div className='d-flex align-items-center flex-column'>
													<img src={Extreme} alt='' className='tw m-0' />
													<h5 className=''>Extreme Automation</h5>
												</div>
												<p>
													{' '}
													Use our existing automation capabilities to automate infrastructure
													, operations, security in hybrid IT environment.
												</p>
											</div>
											<div>
												<p>
													Finally, we help you to do people / process / technology
													transformation it all at a lower cost using CloudOps delivery
													enabled with DevSecOps capabilities and extreme automation from our
													Synectiks Xformation platform driven solutions delivery model.
													Xformation Platform allows to quickly build and deliver and
													orchestrate cross cloud services , at-scale, repeatable offerings
													and solutions that help to drive your DevOps journey @50% time &
													cost.
												</p>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='5'>
										<div>
											<h3>Key benefits you get by choosing Synectiks as DevOps partner:</h3>
											<div className='d-flex flex-column flex-md-row justify-content-around align-items-end my-1 my-md-4'>
												<div className='d-flex flex-column align-items-center'>
													<img src={maxFac} alt='maximum facility' className='w-37' />
													<h5>Maximum Flexibility</h5>
												</div>
												<p className='mb-1 mb-md-4'>
													Synectiks xformation platform coupled with its Hybrid cross cloud
													infrastructure delivers you the maximum flexibility to run/move your
													high performant workloads across clouds and manage them through a
													single pane of glass.
												</p>
											</div>
											<div className='d-flex justify-content-around flex-column flex-md-row align-items-end my-1 my-md-4'>
												<div className='d-flex flex-column align-items-center'>
													<img src={fastDeliv} alt='fast delivery' className='w-37' />
													<h5>Faster Delivery</h5>
												</div>
												<p className='ml-0 ml-3 mb-1 mb-4'>
													Synectiks xformation platform enabled infrastructure and application
													provisioning in complete software defined manner with regulatory
													compliant architectures. The existing assets and best practices
													enable project delivery in weeks than months.
												</p>
											</div>
											<div className='d-flex flex-column flex-md-row justify-content-around align-items-end my-2 my-md-4'>
												<div className='d-flex flex-column align-items-center'>
													<img src={betterQual} alt='better quality' className='w-37' />
													<h5>Better Quality</h5>
												</div>
												<p className='ml-0 ml-md-3 mb-1 mb-4'>
													Through Synectiks Xformation platform, you can continuously deliver
													containerized and serverless microservices verified through
													stringent quality gates that run across clouds and geographies
													ensuring 100% availability and maximum performance.
												</p>
											</div>
											<div className='d-flex flex-column flex-md-row justify-content-around align-items-center my-2 my-md-4'>
												<div className='d-flex flex-column align-items-center'>
													<img src={lowCost} alt='low cost' className='w-50' />
													<h5>Lower Costs</h5>
												</div>
												<p className='ml-0 ml-md-5'>
													Everything software defined and maximum automation ensure lowest
													TCO. A successful Digital Modernization project delivers 10X
													agility,30X reliability and 10X operational efficiency. At least 50
													% TCO is reduced because of 80% operation, 50% hardware and 100%
													license cost savings.
												</p>
											</div>
											<p>
												Now is the time to act. Don’t be disrupted — be the disruptor. Let us
												help you innovate and transform to differentiate with speed and quality.
												That’s Synectiks. That’s transformation Delivered in open product based
												solutioning model.
											</p>
										</div>
									</TabPane>
								</TabContent>
							</div>
						</Row>
					</div>
				</div>
			</DevopsWrapper>
		</Layout>
	);
};

export default Devops;

const DevopsWrapper = styled.div`
.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,0);
}
h1,h2,h3,h4,p{
	text-align: left;
}
h5{
	text-align:center;
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
				width:20rem;
    text-align: center;
}
a#bgL.active,
a#bgLL.active,
a#bgLLL.active  {
    border-bottom: 5px solid #007cc2;
    background: bgBlue !important;
    text-align: left;
    color: var(--synectiksWhite);
    border-radius: 0px;
    font-size: 12px;
    height: auto;
    width:20rem;
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
  font-size:1.4rem;
}
h2{
 font-size: 1.3rem;
}
h3{
  font-size:1.2rem;
}
h4{
  font-size:1.1rem;
}
h5{
	text-align: left;
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
        padding:0rem 1rem;
						}
						.w125px{
		width: 50%;
	}
.w15 {
	width: 25%;
}
.w9{
	width: 25%;
}
.counters{
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    border: 3px solid #f5f5f5;
    padding: 18px 25px;
    text-align: center;
				font-weight:700;
				margin: 0 auto;
}
@media (min-width: 576px){
.one {
	width:auto;
}
	.w15 {
	width: 9%;
}
	.w125px{
		width: 115px;
	}
  .w-40{
    width:40%;
  }
  .f14{
    font-size: 14px;
  }
  .w9{
    width:7%;
  }
  .boxshd{
    box-shadow: 0px 0px 3px 1px lightgrey;
  }
  .boxshdd{
    box-shadow: 0px 0px 5px 3px gray;
  }
  .counters{
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    border: 3px solid #f5f5f5;
    padding: 18px 25px;
    text-align: center;
    font-weight:700;
}
.count{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 0px;
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
  .tabList{
    display:block;
  }
  .tabsHide{
    display:block;
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
        padding:0rem 4rem 2rem 4rem;
      }
	}
  a#bgL,a#bgLL,a#bgLLL{
    background: bgBlue !important;
    text-align: left;
     font-size: 14px;
     cursor: pointer;
width:100%;
		}
		a#bgL.active,
a#bgLL.active,
a#bgLLL.active  {
	width:100%;
}

a#bgL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;
	background: bgBlue !important;
  font-size: 14px;
}
a#bgLL.active {
  border-bottom: 5px solid #007cc2;
  position: relative;

	background: bgBlue !important;
   font-size: 14px;
}

a#bgLLL.active {
  position: relative;
	border-bottom: 5px solid #007cc2;
	background: bgBlue !important;
   font-size: 14px;
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
  	.himage {
		width: 100%;
		height: auto;
		box-shadow: 5px 5px 5px #789;
		margin-right: 2rem;
		margin-bottom: 10px;
	}
}
@media(min-width:1024px){
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
