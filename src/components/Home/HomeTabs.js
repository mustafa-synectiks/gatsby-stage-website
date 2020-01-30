import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Home/Hexagon';
import classnames from 'classnames';
import { Accordion, Card } from 'react-bootstrap/Accordion';
const Tabs = () => {
	(function() {
		'use strict';

		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement('style');
			msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
			document.head.appendChild(msViewportStyle);
		}
	})();

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
						<div className='card-body pl-2 pr-1'>
							<div className=''>
								{/* <img
														src={PoweredBySynectiks}
														width='100%'
														alt=''
														className='w-100'
													/> */}
							</div>
							<p className='p-3 p-md-4'>
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
						<div className='card-body'>
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
								<div className='col-sm-12 col-md-3 p-1'>
									<div className='py-1 py-md-3 h-100'>
										<div className='border-right'>
											<h3 className='text-center heading-h3'>
												Data <br />Transformation
											</h3>
											<p className='text-justify f-14 px-2 px-md-4'>
												Consolidate your unstructured, semi structure and strtucture data and
												get maximum business insights & real time with minimal TCO of data
												management and its governance.
												<br />
												<br />
											</p>
										</div>
									</div>
								</div>
								<div className='col-sm-12 col-md-3 p-1'>
									<div className='py-1 py-md-3 h-100'>
										<div className='border-right'>
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
								<div className='col-sm-12 col-md-3 p-1'>
									<div className='py-1 py-md-3 h-100'>
										<div className='border-right'>
											<h3 className='text-center heading-h3'>Infrastructure Transformation</h3>
											<p className='text-justify f-14 px-2 px-md-4 border-right'>
												Make sure that every bit of your hardware environment is directly
												supporting your business objectives. Transition from a hardware centric
												to a software Defined organisation make huge difference in CapEx and
												Opex.
											</p>
										</div>
									</div>
								</div>
								<div className='col-sm-12 col-md-3 p-1'>
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
						<div className='card-body'>
							<Hexagon />
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
	@media (min-width: 576px) {
		#accordion {
			display: none;
		}
	}
`;
