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
import GetInTouch from '../../components/Home/Getintouch.js';

const WhySynectiks = ({ location }) => {
	return (
		<Layout>
			<WhySynectiksWrapper>
				<SEO title='Why Synectiks' />
				<div className=''>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Why Synectiks' />
				</div>
				<div className='pt-md-4'>
					<h1>Why Synectiks </h1>
					<p>
						As an Open Product based Cloud Solution provider, we help enterprises take advantage of public &
						private cloud and its infinite resources to migrate and modernize their business so that they
						outperform their peers by becoming truly disruptive.
					</p>
				</div>
				<div className='pt-md-4'>
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
				</div>
				<div className='pt-md-4'>
					<h2 className='py-2 py-md-2'>Our Team</h2>
					<img src={team} alt='' className='my-2 my-md-4 W-100 box-shadow' width='100%' />
					<p className='mt-md-5'>
						Our passionate global team is a real good mix of Highly Experienced product developers who has
						been part of many big success and young fully stack developers fully trained to deliver in a
						DevOps cultural environment. Our deep expertise both on Application and Infrastructure helps us
						to deliver cloud native solutions in an optimal manner and manage its lifecycle in a DevSecOps
						way. We have learned to deliver software in a predictable and deterministic way.
					</p>
				</div>
				<div className='container-fluid'>
					<div className='hybmt'>
						<h3>Top 12 reasons to select us as your cloud migration and modernization partner! </h3>
						<div className='my-4'>
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
										Experience Teams with a proven track record of CloudOps delivery enabled with
										DevSecOps Capabilities
									</p>
								</div>
								<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
									<div className='d-flex align-items-center flex-column'>
										<img src={TM} alt='' className='tw m-0' />
										<h4 className='my-2 my-md-3'>Time & Money</h4>
									</div>
									<p>
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
										distributed across multiple clouds and boundaries within a single control plane.
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
										Use our existing automation capabilities to automate infrastructure, operations,
										in security the hybrid IT environment.
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
									<div className='d-flex text-center px-0 px-md-5'>
										<div>
											<div className='d-flex align-items-center flex-column'>
												<img src={DE} alt='' className='tw m-0' />
												<h4 className='my-3'>Demo Environment</h4>
											</div>
											<p>
												Avail the opportunity to quickly create demo hybrid cloud setup in our
												existing hybrid IT environment and testify your key business use cases.
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
				<div>
					<GetInTouch />
				</div>
				{/* </div> */}
			</WhySynectiksWrapper>
		</Layout>
	);
};
export default WhySynectiks;

const WhySynectiksWrapper = styled.div`
	 {
		padding: 1rem;
		.hybmt {
			h3 {
				font-size: 1.1rem;
			}
		}
		h3 {
			text-align: center;
		}
		blockquote {
			width: 100% !important;
			margin: 0;
		}
	}
	@media screen and (min-width: 576px) {
		.hybmt {
			h3 {
				font-size: 1.5rem;
			}
		}
		padding: 3rem 4rem;

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
