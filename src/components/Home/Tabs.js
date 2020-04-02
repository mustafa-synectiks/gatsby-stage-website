import React, { useState } from 'react';
import styled from 'styled-components';
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
import Hexagon from '../Home/Hexagon';
import classnames from 'classnames';
import tab1 from '../../images/HomePage/Transformation_Icon.png';
import tab2 from '../../images/HomePage/OpenPlatform.png';
import tab3 from '../../images/HomePage/Solution.png';
import PoweredBySynectiks from '../../images/PoweredBySynectiks.png';

const Tabs = () => {
	const [ activeTab, setActiveTab ] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<TabsWrapper>
			<div className='container-fluid px-0 px-md-5'>
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
									<h3 className='text-center text-uppercase'>Open Platform</h3>
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
									<h3 className='text-center text-uppercase'>Transformation</h3>
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
									<h3 className='text-center text-uppercase'>Solutions</h3>
								</div>
								<h6 className='pointerDown arrow-down'>&#187;</h6>
							</div>
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={activeTab} className='bgWhite'>
					<TabPane tabId='1' className='borderHomePageTab1'>
						<Row>
							<Col sm='12 hiding'>
								<div className='p-2 p-md-4'>
									<img src={PoweredBySynectiks} width='100%' alt='' className='w-100' />
								</div>
								<h2>What is Xformation?</h2>
								<p>
									It's a platform that provides peace of mind, governance, efficiency and control of
									multi-cloud environments. Xformation helps you to migrate and modernize your legacy
									business, take advantage of cloud and microservice architecture and thereby
									accelerate your transformation journey @50% time & cost.  <br />{' '}
									<span className='h5 b'>Its primary goals are:</span>
								</p>
								<ul className='showul'>
									<li>Accelerated Cloud Adoption</li>
									<li>Multi-cloud container orchestration</li>
									<li>App-centric Optimization </li>
									<li>Continuous Delivery / Compliance / Automation.</li>
									<li> Automated Performance Monitoring and Cost Control</li>
								</ul>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId='2' className='borderHomePageTab2'>
						<Row>
							<Col sm='12'>
								<h2 className='text-center'>Transformation Services </h2>
								<p className='py-1 py-md-3'>
									Synectiks Transformation services elevate your business by optimizing every aspect
									of your operations for the public cloud or Hybrid cloud – your people,
									infrastructure, applications and data.
								</p>
							</Col>
						</Row>
						<Row>
							<Col sm='12' md='4' className='p-1'>
								<div className='py-1 py-md-3 h-100'>
									<div className='border-right text-center'>
										<a href='/infrastructure/index.html' className='text-center heading-h3 h3'>
											Infrastructure <br />Transformation
										</a>
										<p className='text-left f-14 px-2 px-md-4'>
											Make sure that every bit of your hardware environment is directly supporting
											your business objectives. Transition from a hardware centric to a software
											Defined organisation make huge difference in CapEx and Opex.
										</p>
									</div>
								</div>
							</Col>
							<Col sm='12' md='4' className='p-1'>
								<div className='py-3 h-100'>
									<div className='border-right text-center'>
										<a href='/applicationtransformation/index.html' className='text-center heading-h3 h3'>
											Application<br /> Transformation
										</a>
										<p className='f-14 px-4'>
											Applications that power your enterprise are key to generating a strong
											competitive advantage. Bring innovation, agility and outstanding customer
											experience through moderm architectures and cloud first approach.
										</p>
									</div>
								</div>
							</Col>
							<Col sm='12' md='4' className='p-1'>
								<div className='py-1 py-md-3 h-100'>
									<div className='border-right text-center'>
										<a href='/devopstransformation/index.html' className='text-center heading-h3 h3'>
											DevOps <br />Transformation
										</a>
										<p className='f-14 px-1 px-md-4'>
											Adopting a DevOps culture starts by transforming your people, tech and
											processes. Accelerate your DevOps adaption by using our open Automation
											platform and skilled resources.
											<br />
											<br />
										</p>
									</div>
								</div>
							</Col>
{/*
							<Col sm='12' md='3' className='p-1'>
								<div className='py-1 py-md-3 h-100'>
									<div className='text-left'>
										<h3 className='text-center heading-h3'>
											Data <br />Transformation
										</h3>
										<p className=' f-14 px-2 px-md-4'>
											Consolidate your unstructured, semi structure and strtucture data and get
											maximum business insights & real time with minimal TCO of data management
											and its governance.
											<br />
											<br />
										</p>
									</div>
								</div>
							</Col> */}
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
		</TabsWrapper>
	);
};

export default Tabs;

const TabsWrapper = styled.div`
.tabsFlex{
	display:none;
}
.hiding{
	display:none;
}
.ct1,.ct2,.ct3{
	width:0rem;
	height:0rem;
	padding:0;
	img{
		display:none;
	}
}
.showul{
			list-style: disc;
		}
@media screen and (min-width: 576px){
	.showul{
			list-style: disc;
		}
	.tabsFlex{
	display:none;
}

.card-body h2 {
    font-family: montserrat;
    font-size: 1.5rem;
    color: rgba(0,0,0,1);
    font-weight: 600;
    font-style: normal;
}
.card {
			border: 1px solid rgba(0, 0, 0, 0);
		}
.card-body {
    padding: 1rem 0rem 0rem 0rem;
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
		/* display: block; */
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
	.borderHomePageTab1 {
			border: 4px solid var(--synectiksOrange);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
			border-radius: 25px;
    border-top-left-radius: 0;
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
    top: 0.5%;
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
    top: 0.5%;
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
    top: 0.5%;
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
.hiding{
	display:block;
}
#fork:hover:before {
  transform: translateX(0) skewX(-45deg);
}
		/* Hexagons */
	}
}
@media screen and (min-width: 768px){
	.tabsFlex{
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: space-between;
}
}
`;
