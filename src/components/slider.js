import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import ScrollAnimation from 'react-animate-on-scroll';
import './layout.css';
// import "bootstrap/dist/css/bootstrap.min.css"
// import Carousel from 'react-bootstrap/Carousel';
// import Button from "react-bootstrap/Button"
import s1 from '../images/Slider_1.jpg';
import s2 from '../images/Slider2.jpg';
import s3 from '../images/Slider3.jpg';
import s4 from '../images/Slider4.jpg';
import s5 from '../images/Slider5.jpg';
import s6 from '../images/Slider6.jpg';
import Jumbo from '../images/HomePage/Transformation.png';
import circle2 from '../images/HomePage/Transformation.jpg';
import circle3 from '../images/HomePage/Solutions.jpg';
import tab1 from '../images/HomePage/Transformation_Icon.png';
import tab2 from '../images/HomePage/OpenPlatform.png';
import tab3 from '../images/HomePage/Solution.png';
import circle1 from '../images/HomePage/Open Platform.jpg';
import Slider1 from '../images/HomePage/Slider1.jpg';
import Slider2 from '../images/HomePage/Slider2.jpg';
import Slider3 from '../images/HomePage/Slider3.jpg';
import aws from '../images/HomePage/aws.png';
import acro from '../images/HomePage/Acronis Logo.png';
import gle from '../images/HomePage/google.png';
import msa from '../images/HomePage/msa.png';
import SolutionsTab from '../images/HomePage/ExpertiseSolutionsTab.png';
import vdo from '../images/Video.png';
import OpenPlatform from '../images/OpenPlatform.png';
import Transformation from '../images/Transformation.png';
import Solutions from '../images/Solutions.png';
import PoweredBySynectiks from '../images/PoweredBySynectiks.png';
import SM from '../images/CS_Software_Migration.jpg';
import RM from '../images/CS_Realtime_Monitoring.jpg';
import SDFT from '../images/CS_SoftwareDefinedTransformation.jpg';
import ND from '../images/CS_NetworkDesign.jpg';
import ST from '../images/CS_StorageTier.jpg';
import DR from '../images/CS_DisasterRecovery.jpg';
import Mcc from '../images/mcc.png';
import hx1 from '../images/HomePage/1.png';
import hx2 from '../images/HomePage/Picture3.png';
import hx3 from '../images/HomePage/3.png';
import hx4 from '../images/HomePage/4.png';
import hx5 from '../images/HomePage/5.png';
import hx6 from '../images/HomePage/6.png';
import Hexagon from './Home/Hexagon';
import HomeTabs from './Home/HomeTabs';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Jumbotron
} from 'reactstrap';
import classnames from 'classnames';
const Slider = () => {
	const [ activeTab, setActiveTab ] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<HomeWrapper>
			{/* <div className='row'> */}
			{/* <div id='owl-demo' className='owl-carousel owl-theme'>
					{/* <div id='owl-demo' className='owl-carousel owl-theme'> */}
			{/* <div className='item'>
						<div className='caption'> */}
			{/* <div className='caption animated fadeInLeft'> */}
			{/* <h3 className='animated delay-1s slow fadeInRight'>
								Accelerate your migration <br />& modernization Journey
							</h3>
							<p className='animated delay-2s slow fadeInRight'>
								synectiks open xformation Platform and <br />
								deep expertise make your cloud transformation <br />
								safe and agile.
							</p>
						</div>
						<img src={Slider1} alt='Accelerate your migration and modernization journey' />
					</div>
					<div className='item'>
						<div className='caption'>
							<h3 className=''>
								Optimize <br />DevOps transformation
							</h3>
							<p className=''>
								we accelerate organization evolution <br />through open platform and <br />skilled
								resources.
							</p>
						</div>
						<img src={Slider2} alt='Optimize Devops Transformation' />
					</div>
					<div className='item'>
						<div className='caption'>
							<h3 className=''>
								modernize your business, <br />adopt cloud native <br />microservices architecture
							</h3>
							<p className=''>
								accelerate high performance reliable <br /> application delivery using microservices
								<br />across clouds.
							</p>
						</div>
						<img
							src={Slider3}
							alt='modernize your business, adopt cloud native microservices architecture'
						/>
					</div>
				</div> */}
			{/* </div> */}
			<div className='container-fluid bgBlue'>
				<div className='row'>
					<div className='col heading1 mt-3 mt-md-0'>
						<h2 className='textWhite'>
							We’ve always done things differently<span className='fa-3x l-0'>...</span>
						</h2>
						<div className='circleFlex'>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle1} alt='' />
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle2} alt='' />
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle3} alt='' />
								</div>
							</ScrollAnimation>
						</div>
						<p className='text-light'>
							As an Open Product based Cloud Solution provider, we help enterprises take advantage of
							public & private cloud and its infinite resources to migrate and modernize their business so
							that they outperform their peers by becoming truly disruptive.
						</p>
					</div>
				</div>
			</div>
			<div className='bgMain'>
				<div className='row'>
					<div className='container-fluid p-2 p-md-5'>
						<div className='tabsHeading'>
							<h2 className=''>Area Of Expertise For Outcome-Based Solution Offerings</h2>
						</div>
						<HomeTabs />
						<div className='row'>
							<div className='container-fluid px-2 px-md-5'>
								<Nav tabs className='tabsFlex'>
									<NavItem className='p-0'>
										<NavLink
											id='tab1'
											className={classnames({ active: activeTab === '1' })}
											onClick={() => {
												toggle('1');
											}}>
											<div className='Homecard-shadow card'>
												<div className='bgOrange ct2'>
													<img className='card-img-top' src={tab2} alt='Foundation' />
												</div>
												<div className='card-body'>
													<h2 className='text-center text-uppercase'>Open Platform</h2>
													<h6 className='pointerDown arrow-down'>&#187;</h6>
												</div>
											</div>
										</NavLink>
									</NavItem>
									<NavItem className='p-0'>
										<NavLink
											id='tab2'
											className={classnames({ active: activeTab === '2' })}
											onClick={() => {
												toggle('2');
											}}>
											<div className='Homecard-shadow card'>
												<div className='bgRed ct3'>
													<img className='card-img-top' src={tab1} alt='Transformation' />
												</div>
												<div className='card-body'>
													<h2 className='text-center text-uppercase'>Transformation</h2>
												</div>
												<h6 className='pointerDown arrow-down'>&#187;</h6>
											</div>
										</NavLink>
									</NavItem>
									<NavItem className='p-0'>
										<NavLink
											id='tab3'
											className={classnames({ active: activeTab === '3' })}
											onClick={() => {
												toggle('3');
											}}>
											<div className='Homecard-shadow  card'>
												<div className='bgBlue ct1'>
													<img className='card-img-top' src={tab3} alt='Operation' />
												</div>
												<div className='card-body'>
													<h2 className='text-center text-uppercase'>Solutions</h2>
												</div>
												<h6 className='pointerDown arrow-down'>&#187;</h6>
											</div>
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent activeTab={activeTab} className='bgWhite'>
									<TabPane tabId='1' className='borderHomePageTab1'>
										<Row>
											<Col sm='12'>
												<div className='p-2 p-md-4'>
													<img
														src={PoweredBySynectiks}
														width='100%'
														alt=''
														className='w-100'
													/>
												</div>
												<p>
													What is Xformation? It's a platform that provides peace of mind,
													governance, efficiency and control of multi-cloud environments.
													Xformation helps you to migrate and modernize your legacy business,
													take advantage of cloud and microservice architecture and thereby
													accelerate your transformation journey @50% time & cost.  Its
													primary goals are: Accelerated Cloud Adoption Multi-cloud container
													orchestration App-centric Optimization Continuous Delivery /
													Continuous Compliance / Continuous Automation. Automated Performance
													Monitoring and Cost Control
												</p>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId='2' className='borderHomePageTab2'>
										<Row>
											<Col sm='12'>
												<h2 className='text-center'>Transformation Services </h2>
												<p className='py-1 py-md-3'>
													Synectiks Transformation services elevate your business by
													optimizing every aspect of your operations for the public cloud or
													Hybrid cloud – your people, infrastructure, applications and data.
												</p>
											</Col>
										</Row>
										<Row>
											<Col sm='12' md='3' className='p-1'>
												<div className='py-1 py-md-3 h-100'>
													<div className='border-right'>
														<h3 className='text-center heading-h3'>
															Data <br />Transformation
														</h3>
														<p className='text-justify f-14 px-2 px-md-4'>
															Consolidate your unstructured, semi structure and strtucture
															data and get maximum business insights & real time with
															minimal TCO of data management and its governance.
															<br />
															<br />
														</p>
													</div>
												</div>
											</Col>
											<Col sm='12' md='3' className='p-1'>
												<div className='py-1 py-md-3 h-100'>
													<div className='border-right'>
														<h3 className='text-center heading-h3'>
															DevOps Transformation
														</h3>
														<p className='text-justify f-14 px-1 px-md-4'>
															Adopting a DevOps culture starts by transforming your
															people, tech and processes. Accelerate your DevOps adaption
															by using our open Automation platform and skilled resources.
															<br />
															<br />
														</p>
													</div>
												</div>
											</Col>
											<Col sm='12' md='3' className='p-1'>
												<div className='py-1 py-md-3 h-100'>
													<div className='border-right'>
														<h3 className='text-center heading-h3'>
															Infrastructure Transformation
														</h3>
														<p className='text-justify f-14 px-2 px-md-4 border-right'>
															Make sure that every bit of your hardware environment is
															directly supporting your business objectives. Transition
															from a hardware centric to a software Defined organisation
															make huge difference in CapEx and Opex.
														</p>
													</div>
												</div>
											</Col>
											<Col sm='12' md='3' className='p-1'>
												<div className='py-3 h-100'>
													<div className=''>
														<h3 className='text-center heading-h3'>
															Application Transformation
														</h3>
														<p className='text-justify f-14 px-4'>
															Applications that power your enterprise are key to
															generating a strong competitive advantage. Bring innovation,
															agility and outstanding customer experience through moderm
															architectures and cloud first approach.
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId='3' className='borderHomePageTab3'>
										<Row>
											<Col sm='12'>
												<Hexagon />
											</Col>
										</Row>
									</TabPane>
								</TabContent>
							</div>
						</div>
					</div>
				</div>
				<div className='container-fluid bgOrange px-5 pt-2 pb-4'>
					<h2 className='text-capitalize textWhite pb-3 text-center'>Our Partners</h2>
					<div className='row'>
						<div className='col-md-3'>
							<div className='w-75 mx-auto mb-2 mb-md-0'>
								<img src={aws} className='w-100' />
							</div>
						</div>
						<div className='col-md-3'>
							<div className='w-75 mx-auto mb-2 mb-md-0'>
								<img src={gle} className='w-100' />
							</div>
						</div>
						<div className='col-md-3'>
							<div className='w-75 mx-auto mb-2 mb-md-0'>
								<img src={msa} className='w-100' />
							</div>
						</div>
						<div className='col-md-3'>
							<div className='w-75 mx-auto mb-2 mb-md-0'>
								<img src={acro} className='w-100' />
							</div>
						</div>
					</div>
				</div>

				<div className='container-fluid bgWhiteGradient px-3 py-2 px-md-5 py-md-4'>
					<div className='row'>
						<div className='content'>
							<div className='col col-sm-12 col-md-3'>
								<div className='my-2 my-md-5 '>
									<h2 className='mb-2 mb-md-3'>Success Stories </h2>
									<a href='' className='text-capitalize'>
										View all success stories &nbsp; >{' '}
									</a>
								</div>
								<div className='progressnumb'>
									<ul className='progress' role='progressbar' aria-valuemin='0' aria-valuemax='100'>
										<li>01</li>
										<li className='slider__label sr-only' /> <li>06</li>
									</ul>
								</div>
								<div className='slickbtns'>
									<div className='prevbtn'>
										<MdArrowBack className='fa-2x' />
									</div>
									<div className='nextbtn'>
										<MdArrowForward className='fa-2x' />
									</div>
								</div>
							</div>
							<div className='col col-sm-12 col-md-9 h70vh'>
								<div className='slider'>
									<div className='w-450 bshad'>
										<img src={SDFT} alt='Disaster Recovery' />

										<div className='text-group align-self-center p-2 bgWhite'>
											<h3 className=''>Software Defined Transformation</h3>
											<p className='pr-5'>AWS Cloud migration for a large motor industry.</p>{' '}
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>

									<div className='w-450 bshad'>
										<img src={RM} alt='NetworkDesign' />{' '}
										<div className='text-group align-self-center p-2 bgWhite'>
											<h3 className=''>Realtime Monitoring</h3>
											<p className='pr-2 pr-md-5'>
												Highly Scalable extremely customizable realtime monitoring platform.
											</p>{' '}
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>

									<div className='w-450 bshad'>
										<img src={SM} alt='StorageTier' />{' '}
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Storage Migration</h3>
											<p className='pr-5'>
												Petabytes of storage migration for a large financial company with zero
												down time.
											</p>{' '}
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>

									<div className='w-450 bshad'>
										<img src={ND} alt='Enterprise-Transformation' />{' '}
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Network Design</h3>
											<p className='pr-5'>
												Complete network Backbone design with highest security for retail.
											</p>
											<a href='/storagemigration/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>

									<div className='w-450 bshad'>
										<img src={ST} alt='StorageTier' className='h46' />

										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Storage Tier</h3>
											<p className='pr-5'>
												Moving Bigdata workloads to aggregated platform for a large telco.
											</p>{' '}
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>

									<div className='w-450 bshad'>
										<img src={DR} alt='StorageTier' />
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Disaster Recovery</h3>
											<p className='pr-5'>
												Lightweight disaster recovery platform for indian Defense.
											</p>{' '}
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='bgWhite p-1 p-md-5 cstrip'>
					<div className='container bgBlue p-1 p-md-4 d-flex flex-column align-items-center flex-md-row justify-content-around'>
						<div className='cstrip_text'>
							<h3 className='text-white'>Want to know how to evaluate your business?</h3>
						</div>
						<a
							href='https://synectiks.com/contactus/index.html'
							className='textColor btn btn-cnt btn-lg btn-rnd px-5 btn-width'>
							Get In Touch
						</a>
					</div>
				</div>
			</div>
		</HomeWrapper>
	);
};

export default Slider;

const HomeWrapper = styled.section`
.slider .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    left: 0rem;
}
.slider .slick-slide {
    padding: 0 0px;
    margin: 0px 0px;
}
	.w-450 {
			width: 150px;
		}

p {
			word-break: keep-all;
			text-rendering: optimizeLegibility;
			text-align: left;
		}
.heading1 {
	h2{
	text-align: left;
	font-size:32px;
	line-height: 44px;
}

p{
	font-size: 18px;
	line-height: 28px;
	text-align: left;
	margin-top:1rem;
	margin-bottom:1rem;
	word-break: keep-all;
}
}
.tabsHeading {
	h2{
		font-size:28px;
		text-align: left;
		padding: 0rem 0rem 0rem 2.5rem;
		margin-bottom: 0rem;
	}
}
.circleFlex{
	display: flex;
	flex-direction: column;
	.circle {
		width:100%;
			border-radius: 50%;
		img{
			width:100%;
			border-radius: 60%;
			box-shadow: 0px 0px 0px 2px var(	--synectiksWhite);
			margin-top: 1rem;
		}
	}
}

.tabsFlex{
	/* display:flex; */
	display:none;
	flex-direction: column;
}
	.Homecard-shadow {
			width:auto;
			/* padding: 1.5rem 1.5rem 0rem 1.5rem; */
			/* border-bottom: 5rem solid white !important; */
			border-radius: 25px;
			-webkit-border-radius: 25px  ;
			-moz-border-radius: 25px ;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px ;
			padding-top:1rem;
			cursor: pointer;
		}
.ct1,.ct2,.ct3{
	width:0rem;
	height:0rem;
	padding:0;
	img{
		display:none;
	}
}
/*
.owl-carousel{
	display:none !important;
} */
.cstrip {
.btn-width{
	width: 75%;
}
.cstrip_text{
	h3{
		font-size:22px;
	}
}
}

	background: var(--bgMain);
	.border {
		border: 1px solid var(--synectiksBlue) !important;
	}

	.JumboHeight {
		width: 100vw;
		height: 25vh;
	}
	.tab-content {
		padding: 0px;
  border: 0px solid white;
		border-radius: 25px;
		display:none;
}
	}
	@media screen and  (min-width: 576px) {
		.heading1{
	 h2{
	font-size:36px;
	line-height: 44px;
	margin:1.5rem 0rem;
}
p{
	font-size: 20px;
	line-height: 28px;
	text-align: left;
	margin-top:4rem;
	margin-bottom:3rem;
}
}

.tabsFlex{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.tab-content {
		padding: 0px;
  border: 0px solid white;
		border-radius: 25px;
		display:block;
}
.tabsHeading{
	h2{
		text-align: center;
		padding: 0rem;
		margin-bottom:2rem
	}
}
.circleFlex{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	.circle{
			width:20rem;
			height:20rem;
			border-radius: 50%;
			img{
				border-radius: 60%;
				box-shadow: 0px 0px 0px 2px var(	--synectiksWhite);
			}
		}
	}
}
		.h46{
			height: 46vh;
		}
.ct1,.ct2,.ct3{
    padding: 3rem;
    border-radius: 50%;
    width: 10rem;
    margin: 0 auto;
				height: 10rem;
				img{
					display:block
				}
}

.cstrip_text{
	transform: none;
	-webkit-transition: transform .7s ease-in-out, -webkit-transform .7s ease-in-out;
transition: transform .7s ease-in-out, -webkit-transform .7s ease-in-out;
}
.cstrip:hover .cstrip_text{
transform: translateX(15px);
}
.cstrip{
.btn-width{
	width: auto;
}}
.card-body {
	padding :1rem 0rem 0rem 0rem;
	h2 {
	font-family: montserrat;
	font-size: 1.5rem;
	color: rgba(0, 0, 0, 1);
	font-weight: 600;
	font-style: normal;
 }
}
.pointerDown {
	transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	font-size: 4rem;
	margin-top: 0rem;
	text-align:center;
}

		.fw300 {
			font-weight: 300;
		}
		background: var(--bgMain);
		.w-450 {
			width: 450px;
		}

		p {
			word-break: break-word;
		}
		.ml-7 {
			padding-left: 8rem;
			padding-right: 8rem;
		}
		.solutionImage {
			width: 90%;
		}
		/* Slick Slider Starts */
		.slider .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    left: 0rem;
}
.slider .slick-slide {
    padding: 0 0px;
    margin: 0px 20px;
}
		.h70vh {
			height: 70vh;
		}
		ul.progress > li:first-child {
			position: absolute;
			left: -12%;
			margin-top: -4%;
			font-size: 1.4rem;
		}
		ul.progress > li:last-child {
			position: absolute;
			right: 30%;
			margin-top: -4%;
			font-size: 1.4rem;
		}

		.slick-slide img {
			display: block;
			max-width: 440px;
		}

		.slick-dots {
			position: absolute;
			top: 5%;
			display: flex;
			width: 100%;
			padding: 1rem;
			margin: 0;
			list-style: none;
			text-align: center;
			flex-direction: column;
			align-items: flex-end;
		}
		.slick-dots li button:before {
			font-family: 'slick';
			font-size: 1.2rem;
			line-height: 20px;
			opacity: 1;
			color: rgb(255, 255, 255);
		}
		.slick-dots li.slick-active button:before {
			opacity: 1;
			color: var(--synectiksOrange);
		}

		.slick-dots li {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			margin: 10px 25px;
			padding: 0;
			cursor: pointer;
		}
		.slick-slide {
			margin-top: 2rem;
			width: 440px !important;
		}
		.progress {
			display: block;
			width: 55%;
			height: 3px;
			border-radius: 10px;
			overflow: hidden;
			background-color: rgb(146, 146, 146);
			background-image: -webkit-gradient(linear, left top, right top, from(var(--synectiksOrange)), to(var(--synectiksOrange)));
			background-image: linear-gradient(to right, var(--synectiksOrange), var(--synectiksOrange));
			background-repeat: no-repeat;
			background-size: 0 100%;
			-webkit-transition: background-size .4s ease-in-out;
			transition: background-size .4s ease-in-out;
		}

		.content {
			/* margin: auto; */
			padding: 20px;
			width: 100vw;
			display: flex;
			justify-content: space-around;
			align-items: baseline;
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			border: 0;
		}
		.slickbtns {
			display: grid;
			grid-template-columns: 50px 50px;
			grid-gap: 2.4rem;
			margin-left: 13%;
			margin-top: 12%;
		}
.f-14{
	font-size: 14px;
}
		.progressnumb {
			display: flex;
			justify-content: flex-start;
			align-items: baseline;
			position:relative;
			left:11%;
		}

		.nextbtn:hover {
			border: 1px solid var(--synectiksOrange);
			color: var(--synectiksOrange);
		}
		.prevbtn:hover{
		border: 1px solid var(--synectiksOrange);
		color: var(--synectiksOrange);
		}
		.prevbtn,
		.nextbtn {
			border: 1px solid var(--textColor);
			border-radius: 50%;
			padding: 5px;
			text-align: center;
			width: 3rem;
			height: 3rem;
			cursor: pointer;
		}
		.bshad{
			box-shadow: 0px 0px 12px 2px lightgray;
		}
		/* Slick Slider  Ends */
		/* OWL Carousel v1 */
		.owl-pagination {
			display: flex;
			justify-
			content: space-evenly;
			flex-direction: column;
			align-items: flex-end;
			position: absolute;
			right: 4%;
			top: 40%;
		}
		.owl-theme .owl-controls .owl-page span {
			display: block;
			width: 12px;
			height: 12px;
			margin: 5px 7px;
			filter: Alpha(Opacity=50);
			opacity: 1;
			-webkit-border-radius: 20px;
			-moz-border-radius: 20px;
			border-radius: 20px;
			background: var(--synectiksWhite);
		}
		.owl-theme .owl-controls .owl-page.active span,
		.owl-theme .owl-controls.clickable .owl-page:hover span {
			background: var(--synectiksOrange);
		}
		#owl-demo .item{
			position:relative;
			.caption{
				position: absolute;
					width:auto;
				top:25%;
				left:4%;
				h3{
				color: white;
				text-align: left;
				text-transform:capitalize;
				padding-bottom:14px;
				line-height: 1.4;
				font-size: 1.9rem;
				font-weight: 200;
			}
				h3::after{
					content:'';
					display: block;
					width:9rem;
					height:0.6rem;
					position:absolute;
					background: var(--synectiksBlue);
					margin-top: 5px;
			}
			p{
				text-transform:capitalize;
				line-height: 1.6;
				color: white;
				text-align: left;
   	word-spacing: normal;
    font-size: 1.2rem;
    letter-spacing: 1px;
			}
			}
		}
		#owl-demo .item img {
			display: block;
			width: 100%;
			height: 450px;
			margin-top: 10px;
		}
		ul {
			list-style: none;
		}
		#bar {
			width: 0%;
			max-width: 100%;
			height: 8px;
			background: var(--synectiksOrange);
			margin-top: -0.7rem;
		}
		#progressBar {
			width: 100%;
			background: var(--backgroundColor);
		}
		/* OWL Carousel v1 */
		.fa1x {
			font-size: 1.7rem;
		}
		.border {
			border: 1px solid var(--synectiksBlue) !important;
		}

		.JumboHeight {
			width: 100vw;
			height: auto;
			margin-top: -2px;
		}
		.nav-item > a.active,
		.nav-item > a:active {
			background: rgba(255, 255, 255, 1) !important;
			border-color: var(--synectiksBlue);
			border-bottom: 1.5rem solid white;
			height: auto;
			border-radius: 25px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
			padding: 0rem;
		}

		.nav-tabs .nav-link:focus,
		.nav-tabs .nav-link:hover {
			border-color: inherit;
		}
		.nav-tabs {
			border-bottom: 0px solid rgba(255, 255, 255, 0);
		}
		.card {
			border: 1px solid rgba(0, 0, 0, 0);
		}

.borderHomePageTab2{
	border: 4px solid var(--synectiksRed);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
}
.borderHomePageTab3{
	border: 4px solid var(--synectiksBlue);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
			border-radius: 25px;
    border-top-right-radius: 0;
}
		.borderHomePageTab1 {
			border: 4px solid var(--synectiksOrange);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
			border-radius: 25px;
    border-top-left-radius: 0;
		}

		.Homecard-shadow {
			width:18rem;
			border-radius: 25px;
			-webkit-border-radius: 25px  ;
			-moz-border-radius: 25px ;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px ;
			padding-top:1rem;
			cursor: pointer;
		}
		#tab1,#tab2,#tab3 {
			padding: 1.5rem 1.5rem 0rem 1.5rem;
			box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
			/* border-bottom: 5rem solid white !important; */
			border-radius: 25px;
			-webkit-border-radius: 25px ;
			-moz-border-radius: 25px;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px;
			cursor: pointer;
			margin: 0;
			/* margin: 0 20px 0 0; */
   padding: 0;
		}
a#tab1:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}
a#tab2:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}
a#tab3:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}

		 a#tab1.active h2{
color:var(--synectiksOrange);
			}
		 a#tab2.active h2{
color:var(--synectiksRed);
			}
		 a#tab3.active h2{
color:var(--synectiksBlue);
			}
		 a#tab1.active{
			 border: 4px solid var(--synectiksOrange);
    color: var(--synectiksOrange);
    position: relative;
    z-index: 999;
    /* left: -20px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
		}
		 a#tab2.active{
			border: 4px solid var(--synectiksRed);
    color: var(--synectiksRed);
    position: relative;
    z-index: 999;
    /* left: 0px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
				}
		a#tab3.active{
			border: 4px solid var(--synectiksBlue);
    color: var(--synectiksBlue);
    position: relative;
    z-index: 999;
    /* right: -20px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
					}
		.vdoSize {
			width: 50vw;
			height: 65vh;
			margin-top: 3rem;
			margin-bottom: 4.5rem;
		}

		/* Hexagons */

#categories{
  overflow:hidden;
		width:100%;
		transform: rotate(30deg);
  margin-bottom: 3rem;
  /* margin:0 auto; */
}
.clr:after{
  content:"";
  display:block;
  clear:both;
}
#categories li{
  position:relative;
  list-style-type:none;
  width:27.85714285714286%; /* = (100-2.5) / 3.5 */
  padding-bottom: 32.16760145166612%; /* =  width /0.866 */
  float:left;
  overflow:hidden;
  visibility:hidden;

  -webkit-transform: rotate(-60deg) skewY(30deg);
  -ms-transform: rotate(-60deg) skewY(30deg);
  transform: rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(3n+2){
  margin:0 1%;
}
#categories li:nth-child(6n+4){
  margin-left:0%;
}
#categories li:nth-child(6n+4), #categories li:nth-child(6n+5), #categories li:nth-child(6n+6) {
	margin-top: -6.9285714285%;
  margin-bottom: -6.9285714285%;

  -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  transform: translateX(50%) rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(6n+4):last-child, #categories li:nth-child(6n+5):last-child, #categories li:nth-child(6n+6):last-child{
  margin-bottom:0%;
}
#categories li *{
  position:absolute;
  visibility:visible;
}
#categories li > div{
  width:100%;
  height:100%;
  text-align:center;
  color:#fff;
  overflow:hidden;

  -webkit-transform: skewY(-30deg) rotate(60deg);
  -ms-transform: skewY(-30deg) rotate(60deg);
  transform: skewY(-30deg) rotate(60deg);

	-webkit-backface-visibility:hidden;

}


#categories div h1, #categories div p{
  width:100%;
  padding:0 5%;
  background-color:#008080; background-color: rgba(0, 128, 128, 0.8);
  font-family: 'Raleway', sans-serif;

  -webkit-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
  -ms-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
  transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
}
#categories li h1{
  bottom:110%;
  font-style:italic;
  font-weight:normal;
  font-size:1.5em;
  padding-top:100%;
  padding-bottom:100%;
}
#categories li h1:after{
	content:'';
  display:block;
  position:absolute;
  bottom:-1px; left:45%;
  width:10%;
  text-align:center;
  z-index:1;
  border-bottom:2px solid #fff;
}
#categories li p{
	padding-top:50%;
	top:110%;
	padding-bottom:50%;
}


/* HOVER EFFECT  */

#categories li div:hover h1 {
  bottom:50%;
  padding-bottom:10%;
}

#categories li div:hover p{
  top:50%;
  padding-top:10%;
}
#fork{
  position:fixed;
  top:0;
  left:0;
  color:#000;
  text-decoration:none;
  border:1px solid #000;
  padding:.5em .7em;
  margin:1%;
  transition: color .5s;
  overflow:hidden;
}
#fork:before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 130%; height: 100%;
  background: #000;
  z-index: -1;
  transform-origin:0 0 ;
  transform:translateX(-100%) skewX(-45deg);
  transition: transform .5s;
}
#fork:hover {
  color: #fff;
}
#fork:hover:before {
  transform: translateX(0) skewX(-45deg);
}
		/* Hexagons */
	}
	@media screen and (min-width: 768px) {
		background: var(--bgMain);
	}
`;
