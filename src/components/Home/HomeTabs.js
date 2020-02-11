import React from 'react';
import styled from 'styled-components';
import PoweredBySynectiks from '../../images/PoweredBySynectiks.png';
import thc1 from '../../images/HomePage/1.png';
import hx2 from '../../images/HomePage/2.png';
import hx3 from '../../images/HomePage/3.png';
import hx4 from '../../images/HomePage/4.png';
import hx5 from '../../images/HomePage/5.png';
import hx6 from '../../images/HomePage/6.png';
import hx7 from '../../images/HomePage/22.png';
import classnames from 'classnames';
import { Accordion, Card } from 'react-bootstrap/Accordion';
const Tabs = () => {
	// (function() {
	// 	'use strict';

	// 	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	// 		var msViewportStyle = document.createElement('style');
	// 		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	// 		document.head.appendChild(msViewportStyle);
	// 	}
	// })();
	const tabHex1 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'show');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'hide');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'hide');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'hide');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'hide');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'hide');
	};
	const tabHex2 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'hide');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'show');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'hide');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'hide');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'hide');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'hide');
	};
	const tabHex3 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'hide');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'hide');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'hide');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'hide');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'hide');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'show');
	};
	const tabHex4 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'hide');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'hide');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'show');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'hide');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'hide');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'hide');
	};
	const tabHex5 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'hide');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'hide');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'hide');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'hide');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'show');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'hide');
	};
	const tabHex6 = () => {
		let thc1 = document.querySelector('#thc1');
		thc1.setAttribute('class', 'hide');
		let thc2 = document.querySelector('#thc2');
		thc2.setAttribute('class', 'hide');
		let thc3 = document.querySelector('#thc3');
		thc3.setAttribute('class', 'hide');
		let thc4 = document.querySelector('#thc4');
		thc4.setAttribute('class', 'show');
		let thc5 = document.querySelector('#thc5');
		thc5.setAttribute('class', 'hide');
		let thc6 = document.querySelector('#thc6');
		thc6.setAttribute('class', 'hide');
	};
	return (
		<TabsWrapper>
			<div id='accordion' role='tablist'>
				<div className='card'>
					<div className='card-header' role='tab' id='headingOne'>
						<a data-toggle='collapse' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
							Open Platform
						</a>
					</div>

					<div
						id='collapseOne'
						className='collapse show'
						role='tabpanel'
						aria-labelledby='headingOne'
						data-parent='#accordion'>
						<div className='card-body pl-4 pr-3'>
							<div className=''>
								<img src={PoweredBySynectiks} width='100%' alt='' className='w-100' />
							</div>
							<p className='p-3'>
								What is Xformation? It's a platform that provides peace of mind, governance, efficiency
								and control of multi-cloud environments. Xformation helps you to migrate and modernize
								your legacy business, take advantage of cloud and microservice architecture and thereby
								accelerate your transformation journey @50% time & cost.  Its primary goals are:
								Accelerated Cloud Adoption Multi-cloud container orchestration App-centric Optimization
								Continuous Delivery / Continuous Compliance / Continuous Automation. Automated
								Performance Monitoring and Cost Control
							</p>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-header' role='tab' id='headingTwo'>
						<a
							className='collapsed'
							data-toggle='collapse'
							href='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							Transformation
						</a>
					</div>
					<div
						id='collapseTwo'
						className='collapse'
						role='tabpanel'
						aria-labelledby='headingTwo'
						data-parent='#accordion'>
						<div className='card-body pl-4 pr-3'>
							<div className='row'>
								<div className='col-sm-12'>
									<h2 className='text-center'>Transformation Services </h2>
									<p className='py-1 py-md-3'>
										Synectiks Transformation services elevate your business by optimizing every
										aspect of your operations for the public cloud or Hybrid cloud – your people,
										infrastructure, applications and data.
									</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-12  p-1'>
									<div className='py-1 h-100'>
										<div className='border-bottom'>
											<h3 className='text-center heading-h3'>Data Transformation</h3>
											<p className='text-justify f-14 px-2 px-md-4'>
												Consolidate your unstructured, semi structure and strtucture data and
												get maximum business insights & real time with minimal TCO of data
												management and its governance.
											</p>
										</div>
									</div>
								</div>
								<div className='col-sm-12  p-1'>
									<div className='py-1 h-100'>
										<div className='border-bottom'>
											<h3 className='text-center heading-h3'>DevOps Transformation</h3>
											<p className='text-justify f-14 px-1 px-md-4'>
												Adopting a DevOps culture starts by transforming your people, tech and
												processes. Accelerate your DevOps adaption by using our open Automation
												platform and skilled resources.
												<br />
												<br />
											</p>
										</div>
									</div>
								</div>
								<div className='col-sm-12  p-1'>
									<div className='py-1 h-100'>
										<div className='border-bottom'>
											<h3 className='text-center heading-h3'>Infrastructure Transformation</h3>
											<p className='text-justify f-14 px-2 px-md-4'>
												Make sure that every bit of your hardware environment is directly
												supporting your business objectives. Transition from a hardware centric
												to a software Defined organisation make huge difference in CapEx and
												Opex.
											</p>
										</div>
									</div>
								</div>
								<div className='col-sm-12  p-1'>
									<div className='py-3 h-100'>
										<div className=''>
											<h3 className='text-center heading-h3'>Application Transformation</h3>
											<p className='text-justify f-14 px-4'>
												Applications that power your enterprise are key to generating a strong
												competitive advantage. Bring innovation, agility and outstanding
												customer experience through moderm architectures and cloud first
												approach.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-header' role='tab' id='headingThree'>
						<a
							className='collapsed'
							data-toggle='collapse'
							href='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'>
							Solutions
						</a>
					</div>
					<div
						id='collapseThree'
						className='collapse'
						role='tabpanel'
						aria-labelledby='headingThree'
						data-parent='#accordion'>
						<div className='card-body pl-3 pr-3'>
							<div className='d-flex flex-column flex-nowrap bg-white'>
								<div className='col order-1'>
									<ul id='categories' className='clr ml-n5'>
										<li className='pusher' />
										<li>
											<div className='thx1' onClick={tabHex1}>
												<img src={thc1} alt='' />
											</div>
										</li>
										<li>
											<div className='thx2' onClick={tabHex2}>
												<img src={hx7} alt='' />
											</div>
										</li>
										<li>
											<div className='thx3' onClick={tabHex3}>
												<img src={hx6} alt='' />
											</div>
										</li>
										<li>
											<div>
												<h3 className='heading-h3 ctc-cent'>Area Of Expertise</h3>
											</div>
										</li>
										<li>
											<div className='thx4' onClick={tabHex4}>
												<img src={hx3} alt='' />
											</div>
										</li>
										<li className='pusher' />
										<li>
											<div className='thx5' onClick={tabHex5}>
												<img src={hx5} alt='' />
											</div>
										</li>
										<li>
											<div className='thx6' onClick={tabHex6}>
												<img src={hx4} alt='' />
											</div>
										</li>
									</ul>
								</div>
								<div className='col order-0 text-center my-4'>
									<h2 className=' text-center'>Expertise</h2>
									<p className='text-uppercase text-center'>
										Delivering purpose-built solutions based on open products and frameworks
									</p>
								</div>
								<div className='col order-2'>
									<div className='show' id='thc1'>
										<h2 className=' text-center text-light'>Microservices</h2>
										<p className=' text-center'>
											Modernization traditional application and legacy infrastructure.
										</p>
									</div>
									<div className='hide' id='thc2'>
										<h2 className=' text-center text-light'>Devops</h2>
										<p className=' text-center'>
											Empowering Organization to adopt Devops culture with through specialized
											people, tools and training.
										</p>
									</div>
									<div className='hide' id='thc3'>
										<h2 className=' text-center text-light'>Cloud</h2>
										<p className=' text-center'>
											Accelerating cloud adoption and software defined transformation through open
											tools and frameworks.
										</p>
									</div>
									<div className='hide' id='thc4'>
										<h2 className=' text-center text-light'>Monitoring</h2>
										<p className=' text-center'>
											Develop purpose-build monitoring solutions based on proven open frameworks.
										</p>
									</div>
									<div className='hide' id='thc5'>
										<h2 className=' text-center text-light'>Analytics</h2>
										<p className=' text-center'>
											Develop purpose-built Fast Data and Big Data solutions based on proven open
											frameworks.
										</p>
									</div>
									<div className='hide' id='thc6'>
										<h2 className=' text-center text-light'>RAD</h2>
										<p className=' text-center'>
											Rapidly build App Blocks based business application in predictable and
											deterministic way.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TabsWrapper>
	);
};
export default Tabs;

const TabsWrapper = styled.section`
	width: 100%;

	#accordion {
		display: block;
		.card-header {
			margin: 8px auto;
			/* box-shadow: 2px 3px 5px -1px lightgrey; */
			background-color: rgba(0, 0, 0, 0);
			border-bottom: 0px solid rgba(0, 0, 0, 0);
			padding: 6px 0;
			height: 6vh;
			width: auto;
		}
		h5 {
			text-align: center;
		}
		#headingOne {
			a {
				padding: 1rem 5rem;
				background: var(--synectiksOrange);
				color: var(--synectiksWhite);
				text-decoration: none;
			}
		}
		#headingTwo {
			a {
				padding: 1rem 5rem;
				background: var(--synectiksRed);
				color: var(--synectiksWhite);
				text-decoration: none;
			}
		}
		#headingThree {
			a {
				padding: 1rem 6.7rem;
				background: var(--synectiksBlue);
				color: var(--synectiksWhite);
				text-decoration: none;
			}
		}
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
	.show {
		display: block;
	}
	#categories {
		overflow: hidden;
		width: 100%;
		transform: rotate(30deg);
		/* margin:0 auto; */
	}
	.hide {
		display: none;
	}
	.ctc-cent {
		transform: rotate(-30deg);
		margin: 1.8rem 0px;
		font-size: 14px;
	}
	/* Hexagons */
	.show {
		display: block;
	}
	#categories {
		overflow: hidden;
		width: 100%;
		transform: rotate(30deg);
		margin-left: -3rem;
		/* margin:0 auto; */
	}
	.hide {
		display: none;
	}

	.clr:after {
		content: "";
		display: block;
		clear: both;
	}
	#categories li {
		position: relative;
		list-style-type: none;
		width: 27.85714285714286%; /* = (100-2.5) / 3.5 */
		padding-bottom: 32.16760145166612%; /* =  width /0.866 */
		float: left;
		overflow: hidden;
		visibility: hidden;

		-webkit-transform: rotate(-60deg) skewY(30deg);
		-ms-transform: rotate(-60deg) skewY(30deg);
		transform: rotate(-60deg) skewY(30deg);
	}
	#categories li:nth-child(3n + 2) {
		margin: 0 1%;
	}
	#categories li:nth-child(6n + 4) {
		margin-left: 0%;
	}
	#categories li:nth-child(6n + 4),
	#categories li:nth-child(6n + 5),
	#categories li:nth-child(6n + 6) {
		margin-top: -6.9285714285%;
		margin-bottom: -6.9285714285%;

		-webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
		-ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
		transform: translateX(50%) rotate(-60deg) skewY(30deg);
	}
	#categories li:nth-child(6n + 4):last-child,
	#categories li:nth-child(6n + 5):last-child,
	#categories li:nth-child(6n + 6):last-child {
		margin-bottom: 0%;
	}
	#categories li * {
		position: absolute;
		visibility: visible;
	}
	#categories li > div {
		width: 100%;
		height: 100%;
		text-align: center;
		color: #fff;
		overflow: hidden;

		-webkit-transform: skewY(-30deg) rotate(60deg);
		-ms-transform: skewY(-30deg) rotate(60deg);
		transform: skewY(-30deg) rotate(60deg);

		-webkit-backface-visibility: hidden;
	}

	/* HEX CONTENT */
	.thx1 > img {
		left: -100%;
		right: -100%;
		width: 70%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.thx2 > img {
		left: -100%;
		right: -100%;
		width: 70%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.thx3 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.thx4 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.thx5 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.thx6 > img {
		left: -100%;
		right: -100%;
		width: 58%;
		height: auto;
		margin: 1.2rem 6.5rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}

	#categories div h1,
	#categories div p {
		width: 100%;
		padding: 0 5%;
		background-color: #008080;
		background-color: rgba(0, 128, 128, 0.8);

		-webkit-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
		-ms-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
		transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
	}
	#categories li h1 {
		bottom: 110%;
		font-style: italic;
		font-weight: normal;
		font-size: 1.5em;
		padding-top: 100%;
		padding-bottom: 100%;
	}
	#categories li h1:after {
		content: '';
		display: block;
		position: absolute;
		bottom: -1px;
		left: 45%;
		width: 10%;
		text-align: center;
		z-index: 1;
		border-bottom: 2px solid #fff;
	}
	#categories li p {
		padding-top: 50%;
		top: 110%;
		padding-bottom: 50%;
	}

	/* HOVER EFFECT  */

	#categories li div:hover h1 {
		bottom: 50%;
		padding-bottom: 10%;
	}

	#categories li div:hover p {
		top: 50%;
		padding-top: 10%;
	}
	#fork {
		position: fixed;
		top: 0;
		left: 0;
		color: #000;
		text-decoration: none;
		border: 1px solid #000;
		padding: .5em .7em;
		margin: 1%;
		transition: color .5s;
		overflow: hidden;
	}
	#fork:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 130%;
		height: 100%;
		background: #000;
		z-index: -1;
		transform-origin: 0 0;
		transform: translateX(-100%) skewX(-45deg);
		transition: transform .5s;
	}
	#fork:hover {
		color: #fff;
	}
	#fork:hover:before {
		transform: translateX(0) skewX(-45deg);
	}
	/* Hexagons */
	#thc1,
	#thc2,
	#thc3,
	#thc4,
	#thc5,
	#thc6 {
		padding: 1rem;
		text-align: center;
	}
	#thc1 {
		background: rgb(44, 117, 162);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#thc2 {
		background: rgb(233, 109, 37);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#thc3 {
		background: rgb(203, 32, 41);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#thc4 {
		background: rgb(129, 55, 108);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#thc5 {
		background: rgb(43, 123, 120);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	#thc6 {
		background: rgb(103, 135, 60);
		color: var(--synectiksWhite);
		margin-top: 0.5rem;
	}
	@media (min-width: 576px) {
		#accordion {
			display: block;
		}
	}
	@media (min-width: 768px) {
		#accordion {
			display: none;
		}
	}
`;
