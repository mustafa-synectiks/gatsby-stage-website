import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';
import Layout from '../../components/layout';
import CloudCommon from '../../images/CloudCommon.png';
import HybridCloud from '../../images/Hybrid/Hybrid Cloud.jpg';
import hybridIma from '../../images/Hybrid/HybridCloud.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import classnames from 'classnames';

import ms1 from '../../images/Microservices/Microservice_1.png';
import ms2 from '../../images/Microservices/monovsmicro.png';
import ms3 from '../../images/Microservices/Microservice_3.png';
import ms4 from '../../images/Microservices/Microservice_7.png';
import ms5 from '../../images/Microservices/Microservice_8.png';
import ms6 from '../../images/Microservices/Microservice_9.png';
import ms7 from '../../images/Microservices/Microservice_10.png';
import ms8 from '../../images/Microservices/Microservice_11.png';
import ms9 from '../../images/Microservices/Foundation-Subpage.png';
import styled from 'styled-components';
import SEO from '.././../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Microservice = () => {
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
			<SEO title='Microservices' />
			<MicroserviceWrapper>
				<div className='container-fluid '>
					<div className='px-1 px-md-5 py-2 pt-md-5 text-justify'>
						<BreadCrumbs title='Home' subtitle='Solutions' pageTitle='Micro services' />
					</div>
					<div className=''>
						<Row className='position-relative'>
							<div className='col-sm-12 col-md-12'>
								<Navbar color='light' light='light' expand='lg' className='topNav'>
									<NavbarToggler onClick={toggleNavbar} className='mr-2'>
										<FaBars className='navbar-toggler-icon' />
										<span className='my-1 mx-2 close'>X</span>
									</NavbarToggler>
									<Collapse isOpen={!collapsed} navbar='navbar'>
										<Nav className='bgWhite d-flex my-2 my-md-4 mx-auto w-85'>
											<NavItem className='one'>
												<NavLink
													id='bgL'
													className={classnames({
														active: activeTab === '1'
													})}
													onClick={() => {
														toggle('1');
														toggleTab();
													}}>
													Examples of Microservices
												</NavLink>
											</NavItem>

											<NavItem className='one'>
												<NavLink
													id='bgLL'
													className={classnames({
														active: activeTab === '2'
													})}
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
													className={classnames({
														active: activeTab === '3'
													})}
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
													className={classnames({
														active: activeTab === '4'
													})}
													onClick={() => {
														toggle('4');
														toggleTab();
													}}>
													How we can help You?
												</NavLink>
											</NavItem>
										</Nav>
									</Collapse>
								</Navbar>

								<TabContent activeTab={activeTab}>
									<TabPane tabId='1'>
										<div>
											<div className='w-100 d-flex flex-column flex-md-row align-items-start py-2 py-md-3'>
												<div className='pr-0 pr-md-5'>
													<p>
														To accommodate the increasing complexity of functional
														requirements, IT applications have embraced a variety of
														architectural patterns. Organizations must meet ever-changing
														business demands — from mainframe applications and client-server
														to service oriented architecture (SOA) and microservices.
													</p>
													<p>
														Microservices architecture is a combination of successful and
														proven concepts of software engineering such as agile software
														development, SOA, API-first design and continuous delivery (CD).
														This architecture and organizational approach to software
														development is designed to accelerate development cycles, foster
														innovation and ownership and improve the ability to maintain and
														scale applications.
													</p>
												</div>
												<img
													className='microImage imgshadow'
													height='auto'
													src={ms1}
													alt='Microservices'
												/>
											</div>
											<div className='my-1 my-md-4'>
												<p className='py-2 py-md-3'>
													Despite technological advancements, 90 percent of business IT
													applications are legacy and what are known as “monolithic”. These
													range from mainframe apps where UI, business logic and data storage
													reside on machines, to client-server applications where layered
													technologies that support UI, business functionality and data are
													stored horizontally. Microservices architecture, on the other hand,
													divides the functionality into cohesive verticals by implementing a
													specific domain.
												</p>
												<img src={ms2} alt='' className='imgshadow microImage' />
											</div>
										</div>
									</TabPane>
									<TabPane tabId='2'>
										<div className=''>
											<h4>Product Quality.</h4>
											<ul>
												<li>
													Optimize Scalability: React fluidly with smaller, self-contained
													components
												</li>
												<li>
													Achieve High Quality: Continuously and confidently develop and test
												</li>
												<li>
													Maximize Resource Utilization: Utilize containers for efficient
													infrastructure consumption
												</li>
												<li>Minimize Downtime: Perform isolated maintenance</li>
												<li>
													Increase Reuse and Decrease Overhead: Encourage sharing on API
													driven architecture
												</li>
											</ul>

											<h4>Process & Culture.</h4>
											<ul>
												<li>
													Streamline Feature Development: Sprint faster to keep up with
													changing needs
												</li>
												<li>
													Increase Innovation: Reorganize into domain specific, end-to-end
													service teams
												</li>
												<li>
													Avoid Tool/Expertise Lock-in: Choose the best technique/technology
													for the specific problem
												</li>
												<li>
													Adopt Existing Third-party Tools: Integrate easily into API driven
													ecosystems
												</li>
												<li>
													Grow User Base/Expand Market: Extend capabilities to external
													parties
												</li>
												<li>
													Enable Business Consumption: Solve small problems with measurable
													outcomes
												</li>
											</ul>
										</div>
										<div className='my-2 my-md-3'>
											<p>
												Maintaining monolithic applications often proves challenging because
												it’s difficult to test and release millions of lines of code for tiny
												changes (in most cases only a few lines). But migrating to microservices
												is not as simple as it sounds. It requires a big change management
												process that often includes new team structures (to say nothing of
												altering the mindset of the organization!). To support the approach,
												technology stack must also be upgraded. In the microservices scheme, an
												application is built with a modular approach, making it scalable and
												easier to deploy. With the right tools, governance and automation in
												place, updates come much easier.
												<br />
												<br />
												While Monolith has complexity in codebase, microservices poses the
												complexity of interaction between many services.
											</p>
											<img src={ms3} alt='' className='imgshadow microImage h-50' />
										</div>
									</TabPane>
									<TabPane tabId='3'>
										<div className='d-flex flex-column flex-md-row	justify-content-between text-light'>
											<div className='bgOrange w-100  p-3  p-md-3'>
												<ul>
													<h3>Cultural Challenges</h3>
													<li>You built, you run it</li>
												</ul>
											</div>
											<div className='bgRed w-100  p-3  p-md-3 mx-0 mx-md-3'>
												<ul>
													<h3>Architectural Challenges</h3>
													<li>Dealing with asynchronicity</li>
													<li>Cascading Failures</li>
													<li>Discovery and Authentication of Services</li>
													<li>Integration Tests</li>
												</ul>
											</div>
											<div className='bgBlue w-100 p-3  p-md-3'>
												<ul>
													<h3>Operational Challenges</h3>
													<li>Duplication of processes and tools</li>
													<li>Complexity moves from components to interactions</li>
													<li>Debugging across components</li>
													<li>Deployment</li>
												</ul>
											</div>
										</div>
										<p className='my-0 mt-md-4 pt-md-2'>
											Thankfully, current cloud-based distributed technologies alleviate the
											burden of managing monolithic applications by providing a platform to
											develop and deploy on a dime.
										</p>
										<div className='my-0 my-md-4	'>
											<h2>Three key Technology Drivers to Address Microservices Challenges.</h2>
											<h3 className='my-0 mb-md-2	'>Hardware Aggregation.</h3>
											<p>
												As you refactor one large monolith application into multiple independent
												services with their own services and data layer, you probably would end
												up having 25+ services, 50+ databases (Cache, Relational, NoSQL, Graph,
												Bigtable, Bigdata). Having them to deploy in Discrete Hardware (server
												by server), the deployment complexity itself will multiply to 50X at
												least. So, you essentially need to aggregate the hardware, say you
												aggregate your Compute/Network/Storage so that it looks like ONE big
												unit with combined capacity and you keep deploying your services &
												databases inside that aggregated cluster transparent of underlying
												Compute/Network/Storage. Thankfully, current cloud-based distributed
												technologies offer many avenues to aggregate hardware across data
												centers and geographies.
											</p>
											<h3 className='my-0 mb-md-2	'>Containerization & Continuous Delivery.</h3>
											<p>
												As you transform monolith to microservices, your big X become 100 small
												x. If you deploy those 100 x as layered stack in discrete servers in
												different way, your deployment complexity would multiply to 1000X. To
												address this challenge, you definitely need to unify the delivery of
												services, make sure your services are delivered in the same way and they
												are staged to production environment through some stringent quality
												gates. To unify the delivery of multiple services in the same way,
												Containerization play a big role and Containers along with Continuous
												Delivery channel brings down your 1000X complexity to a factor of X.
											</p>
											<div className='d-flex flex-column align-items-start flex-md-row justify-md-between  px-2 px-md-0 mt-2 mt-md-5'>
												<div className='pr-0 pr-md-5 w-100'>
													<h3 className='my-0 mb-md-2	mt-md-n3'>Operation Automation.</h3>
													<p>
														An ideal microservices hosting platform is based on
														geographically spanned cluster and hardware agnostic. While this
														platform alleviates the burden of managing many servers,
														operating systems etc., it brings a new set of operational
														challenges like debugging, logs tracing, many processes and
														tools running in a single application. The operation management
														paradigm is shifted from managing Compute/Network/Storage and
														operating system to managing geographically distributed clusters
														and services management, their interaction. Thankfully, current
														cloud-based service discovery and cluster wide operation
														management technologies offer avenues to aggregate those
														operational challenges.
													</p>
													<p>
														Essentially in a microservices ecosystem, you will aggregate,
														extent & automate. You will aggregate your hardware across DC’s
														and geographies, develop microservices, bigdata, IOT
														applications based on libraries and reusable services and
														continue to do cluster and services automation toward running
														everything in auto pilot mode.
													</p>
												</div>
												<div className='w-100'>
													<img src={ms4} className='w-100 imgshadow' />
												</div>
											</div>

											<div className='my-0 my-md-4'>
												<img src={ms5} className='imgshadow microImage mb-1 mb-md-4' />
												<h3>One Key Cultural Driver.</h3>
												<p>
													Simply speaking the microservice world is “Solve small problems,
													with small teams with measurable outcomes vs solving 1 big problem
													with 1 large team.”
													<br />
													Since its small teams being responsible for end to end success, it’s
													much essential to establish a culture that “You built it, you run
													it”. Dev & Ops married, become DevOps. It means each employee are
													skilled to Develop small services and able to maintain its complete
													lifecycle. That involves a big change in structure & skills of the
													organization. Most of the microservices adoption will be successful
													if this cultural transformation is done right, we opine that it
													contributes 90% towards your success. A typical culturally changed
													organization will look like as below:
												</p>
												<img src={ms6} className='microImage imgshadow' />
											</div>
										</div>
									</TabPane>
									<TabPane tabId='4'>
										<div>
											<p>
												SYNECTIKS, a trusted partner with experience migrating monolithic
												applications to cloud and microservices architecture, can help make the
												process seamless. Let us help you make the shift so you can capitalize
												on business opportunities faster.
												<br />SYNECTIKS has a flexible and effective way of migrating monolithic
												applications to microservices, which includes the following steps:
											</p>
											<img src={ms7} className='my-0 mt-md-4 microImage imgshadow' />
										</div>
										<div>
											<div className='d-flex flex-column flex-md-row justify-content-between my-0 my-md-5'>
												<div className='bgOrange text-light w-100 p-2 p-md-3'>
													<h3>Discovery and Assessment.</h3>
													<ul>
														<li>
															Meet with the Stakeholders, Infrastructure and Application
															SME’s to gather detailed information about the applications
															and databases.
														</li>
													</ul>
												</div>
												<div className='bgRed text-light w-100 mx-0 mx-md-3 p-2 p-md-3'>
													<h3>Business Readiness.</h3>
													<ul>
														<li>Business Transformation Challenges</li>
														<li>Cultural Readiness</li>
													</ul>
												</div>
												<div className='bgBlue text-light w-100 p-2 p-md-3'>
													<h3>Existing Infrastructure and Applications Review.</h3>
													<ul>
														<li>Application Functionality</li>
														<li>Infrastructure & Deployment</li>
														<li>Technology Stack</li>
														<li>Data Structure</li>
														<li>Interfaces</li>
														<li>Security & Governance</li>
														<li>Existing Pain Points</li>
													</ul>
												</div>
											</div>

											<p>
												Provide modernization options, along with Demo / POC how the transition
												would look like.
											</p>

											<p>
												Based on the SYNECTIKS recommendations, provide proposed LOE (Level of
												Effort) After mutual agreement, SYNECTIKS begins with agile methodology,
												including:
											</p>

											<ul>
												<li>
													Get a deep understanding of the functionality of the existing
													application.
												</li>
												<li>Create Migration RoadMap.</li>
												<li>Create Risk Plan.</li>
												<li>Create Target Architectures</li>
												<li>Create a project plan and share with all the stakeholders.</li>
												<li>Split the application into smaller domains.</li>
												<li>Define the boundaries of the domains and microservices.</li>
												<li>Finalize the technology stack.</li>
												<li>Generate infrastructure blueprints.</li>
												<li>
													Set up the foundation environment Put Continuous
													Integration/Continuous Delivery (CI/CD) pipelines in place.
												</li>
												<li>
													Begin development sprints (SYNECTIKS prefers test-driven development
													to minimize manual testing).
												</li>
												<li>
													Help to use SYNECTIKS Application blocks / libraries to do rapid
													transformation.
												</li>
											</ul>
											<div>
												<p>
													SYNECTIKS is committed to working with its customers to meet almost
													any need.
												</p>
												<ul>
													<li>
														Adapt DevOps culture across organization, essential for
														developing microservices, foster small, independent teams within
														the organization to take over ownership of the services.
													</li>
													<li>
														Transform your hardware driven infrastructure to a complete
														multi-cloud hybrid software driven system
													</li>
													<li>Streamline communications to ensure success</li>
													<li>Embrace CI best practices and automate CI/CD processes</li>
													<li>
														Embrace operation automations to manage distributed cluster and
														services With SYNECTIKS Xformation platform, companies can take
														advantage of an API driven cloud architecture and get going
														faster.
													</li>
												</ul>
												<div>
													<img
														src={ms9}
														alt=''
														className='my-0 my-md-4 microImage imgshadow'
													/>
												</div>
												<div>
													<p>
														How much effort it takes to perform a Monolith to Microservices
														transformation?
													</p>
													<p>
														Though it depends on complexity & sizing of the existing
														applications, you could accelerate the transformation process by
														engaging a microservices SYNECTIKS who can help you as follows:
													</p>
													<ul>
														<li>
															Accelerate the transformation by using open application and
															automation blocks and frameworks built by SYNECTIKS team, so
															that you can leverage lot of existing code and reuse your
															maximum existing codebase. A typical large transformation
															project can take a year long effort and often don’t yield
															results. We recommend taking bottom up approach, take a
															small piece of functionality, and develop the services and
															foundation for it rapidly by using existing application
															blocks and automation framework. You would minimize your
															risks by investing a small time & money and continue to do
															so when you see a significant ROI. The key aspect is time.
															The advantage of making us your microservices partner is ,
															our open source contribution helps us to deliver values vary
															rapidly.
														</li>
														<li>
															Embrace DevOps centric culture by delivering you skilled
															DevOps resources.
														</li>
													</ul>
													<div className='my-0 my-md-5'>
														<h3>
															Why SYNECTIKS should be your trusted microservice partner?
														</h3>
														<img
															src={ms8}
															alt=''
															className='my-0 mt-md-4 microImage imgshadow'
														/>
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
			</MicroserviceWrapper>
		</Layout>
	);
};

export default Microservice;

const MicroserviceWrapper = styled.div`
.microImage{
	width: 100%;
}
.imgshadow{
	box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
}
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
.tab-content>.active {
    padding: 5rem 0.5rem;
}

@media (min-width: 576px){
	p{
		text-align: justify;
	}
	.tab-content>.active {
    padding: 0rem 0.5rem;
}
	.microImage{
		width: 50%;
		margin:0 auto;
	}
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