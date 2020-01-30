import React from 'react';
import styled from 'styled-components';

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
						<div className='pl-2 pr-1'>
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
						<div>
							<p className='pl-2 pr-1'>
								Synectiks Transformation services elevate your business by optimizing every aspect of
								your operations for the public cloud or Hybrid cloud – your people, infrastructure,
								applications and data.
							</p>
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
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
							squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
							nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
							single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
							beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
							lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
							probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
			</div>
		</TabsWrapper>
	);
};
export default Tabs;

const TabsWrapper = styled.section`
	#accordion {
		display: block;
	}
	@media (min-width: 576px) {
		#accordion {
			display: none;
		}
	}
`;
