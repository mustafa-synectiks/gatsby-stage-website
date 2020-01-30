import React from 'react';
import styled from 'styled-components';
import hx1 from '../../images/HomePage/1.png';
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
	const hex1 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'show');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex2 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'show');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex3 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'show');
	};
	const hex4 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'show');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex5 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'hide');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'show');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	const hex6 = () => {
		let hx1 = document.querySelector('#hc1');
		hx1.setAttribute('class', 'hide');
		let hc2 = document.querySelector('#hc2');
		hc2.setAttribute('class', 'hide');
		let hc3 = document.querySelector('#hc3');
		hc3.setAttribute('class', 'hide');
		let hc4 = document.querySelector('#hc4');
		hc4.setAttribute('class', 'show');
		let hc5 = document.querySelector('#hc5');
		hc5.setAttribute('class', 'hide');
		let hc6 = document.querySelector('#hc6');
		hc6.setAttribute('class', 'hide');
	};
	return (
		<TabsWrapper>
			<div id='accordion' role='tablist'>
				<div className='card'>
					<div className='card-header' role='tab' id='headingOne'>
						<h5 className='mb-0'>
							<a
								data-toggle='collapse'
								href='#collapseOne'
								aria-expanded='true'
								aria-controls='collapseOne'>
								Open Platform
							</a>
						</h5>
					</div>

					<div
						id='collapseOne'
						className='collapse show'
						role='tabpanel'
						aria-labelledby='headingOne'
						data-parent='#accordion'>
						<div className='card-body pl-4 pr-3'>
							<div className=''>
								{/* <img
														src={PoweredBySynectiks}
														width='100%'
														alt=''
														className='w-100'
													/> */}
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
						<h5 className='mb-0'>
							<a
								className='collapsed'
								data-toggle='collapse'
								href='#collapseTwo'
								aria-expanded='false'
								aria-controls='collapseTwo'>
								Transformation
							</a>
						</h5>
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
						<h5 className='mb-0'>
							<a
								className='collapsed'
								data-toggle='collapse'
								href='#collapseThree'
								aria-expanded='false'
								aria-controls='collapseThree'>
								Solutions
							</a>
						</h5>
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
									<ul id='categories' class='clr ml-n5'>
										<li class='pusher' />
										<li>
											<div className='hx1' onClick={hex1}>
												<img src={hx1} alt='' />
											</div>
										</li>
										<li>
											<div className='hx2' onClick={hex2}>
												<img src={hx7} alt='' />
											</div>
										</li>
										<li>
											<div className='hx3' onClick={hex3}>
												<img src={hx6} alt='' />
											</div>
										</li>
										<li>
											<div>
												<h3 className='heading-h3 ct-cent'>Area Of Expertise</h3>
											</div>
										</li>
										<li>
											<div className='hx4' onClick={hex4}>
												<img src={hx3} alt='' />
											</div>
										</li>
										<li class='pusher' />
										<li>
											<div className='hx5' onClick={hex5}>
												<img src={hx5} alt='' />
											</div>
										</li>
										<li>
											<div className='hx6' onClick={hex6}>
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
									<div className='show' id='hc1'>
										<h2 className=' text-center'>Microservices</h2>
										<p className=' text-center'>
											Modernization traditional application and legacy infrastructure.
										</p>
									</div>
									<div className='hide' id='hc2'>
										<h2 className=' text-center'>Devops</h2>
										<p className=' text-center'>
											Empowering Organization to adopt Devops culture with through specialized
											people, tools and training.
										</p>
									</div>
									<div className='hide' id='hc3'>
										<h2 className=' text-center'>Cloud</h2>
										<p className=' text-center'>
											Accelerating cloud adoption and software defined transformation through open
											tools and frameworks.
										</p>
									</div>
									<div className='hide' id='hc4'>
										<h2 className=' text-center'>Monitoring</h2>
										<p className=' text-center'>
											Develop purpose-build monitoring solutions based on proven open frameworks.
										</p>
									</div>
									<div className='hide' id='hc5'>
										<h2 className=' text-center'>Analytics</h2>
										<p className=' text-center'>
											Develop purpose-built Fast Data and Big Data solutions based on proven open
											frameworks.
										</p>
									</div>
									<div className='hide' id='hc6'>
										<h2 className=' text-center'>RAD</h2>
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
	.hx1 > img {
		left: -100%;
		right: -100%;
		width: 70%;
		height: auto;
		margin: 1.2rem 5.3rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx2 > img {
		left: -100%;
		right: -100%;
		width: 70%;
		height: auto;
		margin: 1.2rem 5.3rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx3 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.1rem 5.4rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx4 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.5rem 5.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx5 > img {
		left: -100%;
		right: -100%;
		width: 65%;
		height: auto;
		margin: 1.3rem 5.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	.hx6 > img {
		left: -100%;
		right: -100%;
		width: 58%;
		height: auto;
		margin: 1.3rem 5.6rem;
		transform: rotate(-30deg);
		cursor: pointer;
	}
	#hc1,
	#hc2,
	#hc3,
	#hc4,
	#hc5,
	#hc6 {
		padding: 1rem;
		text-align: center;
	}
	#hc1 {
		background: rgb(44, 117, 162);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	#hc2 {
		background: rgb(233, 109, 37);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	#hc3 {
		background: rgb(203, 32, 41);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	#hc4 {
		background: rgb(129, 55, 108);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	#hc5 {
		background: rgb(43, 123, 120);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	#hc6 {
		background: rgb(103, 135, 60);
		color: var(--synectiksWhite);
		margin-top: 3rem;
	}
	@media (min-width: 576px) {
		#accordion {
			display: none;
		}
	}
`;
