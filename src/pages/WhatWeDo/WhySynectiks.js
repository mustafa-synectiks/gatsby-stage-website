import React from 'react';
import Layout from '../../components/layout.js';
import team from '../../images/AboutUs.jpg';
import styled from 'styled-components';
import EM from '../../images/Hybrid/Engagement Model.png';
import LTR from '../../images/Hybrid/Long Term Retention.png';
import WO from '../../images/Hybrid/Optimization Service.png';
import DE from '../../images/Hybrid/DemoEnvironment.png';
import EA from '../../images/Hybrid/Extreme Automation.png';
import PCP from '../../images/Hybrid/Public Cloud Partnership.png';
import SCP from '../../images/Hybrid/Single Control plane.png';
import CS from '../../images/Hybrid/Compliance&Security.png';
import TM from '../../images/Hybrid/Time & Money.png';
import EE from '../../images/Hybrid/E2E Solution.png';
import EX from '../../images/Hybrid/Experience.png';
import EXP from '../../images/Hybrid/Expertise.png';
import SEO from '.././../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const WhySynectiks = ({ location }) => {
	return (
		<Layout>
			<SEO title='Why Synectiks' />
			<WhySynectiksWrapper>
				<div className='px-1 px-md-5 pt-2 pt-md-5 mt-md-3'>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Why Synectiks' />
				</div>
				<div className='px-2 px-md-5 mx-0 mx-md-3 py-2 py-2 py-md-5'>
					<h1>Why-Syenctiks </h1>
					<p>
						As an Open Product based Cloud Solution provider, we help enterprises take advantage of public &
						private cloud and its infinite resources to migrate and modernize their business so that they
						outperform their peers by becoming truly disruptive.
					</p>
					<h2>We’ve always done things differently</h2>
					<p>
						Synectiks builds open source software that helps enterprises to migrate and modernize their
						business rapidly at optimal economy. Customers use our migration and management software
						platform, Xformation to migrate and modernize their business and create affordable and powerful
						custom solutions that bring simplicity and absolute confidence to a data-driven decision making.
						Committed to codifying our know-how, once we solve a problem, we automate the solution. When
						running our products and solutions in mission-critical environments, our community knows that
						they can turn to us for world-class support. Customers avoid vendor lock-in and save (much)
						money! Our open product driven solution approach rapidly delivers high quality solutions and
						reduce at least 50% time & money compare to typical managed services delivery model.{' '}
					</p>
					<div> </div>
					<img src={team} alt='' className='py-2 py-md-4 w-100' />
					<p>
						Our passionate global team is real good mix of Highly Experienced product developers who has
						been part of many big success and young full stack developers fully trained to deliver in DevOps
						cultural environment. Our deep expertise both on Application and Infrastructure helps us to
						deliver cloud native solutions in an optimal manner and manage its lifecycle in a DevSecOps way.
						We have learnt to deliver software in predictable and deterministic way.{' '}
					</p>
					<div className='container-fluid px5'>
						<h3>Top 12 reasons to select us as your cloud migration and modernization partner! </h3>
						<div className='hybmt'>
							<div className='my-4'>
								``{' '}
								<div className='row'>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={EX} alt='' className='tw m-0' />
											<h4 className='my-2 my-md-3'>Experience</h4>
										</div>
										<p> 10+ Large Scale Hybrid Cloud Transformation</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={EXP} alt='' className='tw m-0' />
											<h4 className='my-2 my-md-4'>Expertise</h4>
										</div>
										<p>
											Experience Team with proven track record of CloudOps delivery enabled with
											DevSecOps Capabilities
										</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={TM} alt='' className='tw m-0' />
											<h4 className='my-2 my-md-3'>Time & Money</h4>
										</div>
										<p>
											{' '}
											Our open Product Driven Delivery Model allows customers to quickly build,
											deliver and orchestrate cross cloud services @50% time & cost.
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
											Single point of contact for Application Migration, Transformation and
											Integration to cloud-native Apps services.
										</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={SCP} alt='' className='tw m-0' />
											<h4 className='my-3'>Single Control plane</h4>
										</div>
										<p>
											{' '}
											Xformation is a single interface and platform to manage all your workloads
											distributed across multiple clouds and boundaries within a single control
											plane.
										</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={CS} alt='' className='tw m-0' />
											<h4 className='my-4'>Compliance & Security</h4>
										</div>
										<p>
											Our compliance and security assessment tools makes sure your hybrid cloud
											journey meet your business compliance.
										</p>
									</div>
								</div>
							</div>

							<div>
								<div className='row'>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={EA} alt='' className='tw m-0' />
											<h4 className='my-3'>Extreme Automation</h4>
										</div>
										<p>
											Use our existing automation capabilities to automate infrastructure ,
											operations, security in hybrid IT environment.
										</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={PCP} alt='' className='tw m-0' />
											<h4 className='my-4'>Public Cloud Partnership</h4>
										</div>
										<p>
											Our advanced partnership with major public cloud providers help you to get
											support at every stage.
										</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex text-center px-5'>
											<div>
												<div className='d-flex align-items-center flex-column'>
													<img src={DE} alt='' className='tw m-0' />
													<h4 className='my-3'>Demo Environment</h4>
												</div>
												<p>
													Avail the opportunity to quickly create demo hybrid cloud setup in
													our existing hybrid IT environment and testify you key business use
													cases.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='mb-4'>
								<div className='row'>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={WO} alt='' className='tw m-0' />
											<h4 className='my-4'>Optimization Service</h4>
										</div>
										<p>We do optimal resource pooling from multiple clouds.</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={EM} alt='' className='tw m-0' />
											<h4 className='my-3'>Engagement Model</h4>
										</div>
										<p>Our every engagement focused on empowerment – not dependency</p>
									</div>
									<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
										<div className='d-flex align-items-center flex-column'>
											<img src={LTR} alt='' className='tw m-0' />
											<h4 className='my-4'>Long Term Retention</h4>
										</div>
										<p>100% Customer Retention Rate.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container-fluid p-1 p-md-5 cstrip'>
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
			</WhySynectiksWrapper>
		</Layout>
	);
};
export default WhySynectiks;

const WhySynectiksWrapper = styled.div`
h3{
	text-align : center;
}
.cstrip {
	background: transparent;
.btn-width{
	width: 75%;
}
.cstrip_text{
	h3{
		font-size:22px;
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
.blockquote{
	width: 100% !important;
	margin: 0;
}
	@media (min-width: 576px) {

.cstrip{
	background: var(--synectiksWhite);
}
  .btn-width{
    width: auto;
    background: var(--synectiksWhite);
    }
		.px5 {
			padding-left: 3.75rem;
			padding-right: 3.75rem;
		}
		.blockquote-custom {
			position: relative;
			font-size: 1.1rem;
		}

		.blockquote-custom-icon {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: -25px;
			left: 50px;
		}
	}
`;
