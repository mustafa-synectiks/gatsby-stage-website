import * as React from 'react';
import { Helmet } from 'react-helmet';
// import Script from 'react-load-script'
import about from '../../images/AboutUs.jpg';
import Layout from '../../components/layout';
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
import SEO from '../../components/seo.js';
import GetInTouch from '../../components/Home/Getintouch.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const blue = {
	color: '#007CC2'
};
const red = {
	color: 'red'
};
const lineHeight = {
	lineHeight: '35px'
};
export class Aboutus extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Layout>
				<AboutWrapper>
					<SEO title='About Us' />
					<div className='bg-lightgrey'>
						<div>{/* <img className='  text-center ' src={about} width='100%' alt='AboutUs' /> */}</div>
						<div className=''>
							<div className=''>
								<BreadCrumbs title='Home' subtitle='Company' pageTitle='About Us' />
								<h1 className='mt-md-4 text-left'>Mission Statement:</h1>
								<p className='py-4'>
									As an Open Product based Cloud Solution provider, we help enterprises take advantage
									of public & private cloud and its infinite resources to migrate and modernize their
									business so that they outperform their peers by becoming truly disruptive.
								</p>

								<blockquote class='bloqwidth blockquote blockquote-custom bg-white p-5 shadow rounded'>
									<div className='blockquote-custom-icon bg-info shadow-sm'>
										<i className='fa fa-quote-left text-white' />
									</div>
									<h2 className='mb-0 mt-2 font-italic'>We’ve always done things differently!</h2>
								</blockquote>
								<p className='py-4'>
									Synectiks builds open source software that helps enterprises to migrate and
									modernize their business rapidly at optimal economy. Customers use our migration and
									management software platform, Xformation to migrate and modernize their business and
									create affordable and powerful custom solutions that bring simplicity and absolute
									confidence to a data-driven decision making. Our open product driven solution
									approach rapidly delivers high quality solutions and reduce at least 50% time &
									money compare to proprietary licensed based product or pure managed services
									delivery model. Customers avoid vendor lock-in, enjoys absolute freedom and
									flexibility. These aren’t your typical consulting and managed services. They’re an
									entirely new kind of engagement focused on empowerment – not dependency.{' '}
								</p>
								<blockquote class='bloqwidth blockquote blockquote-custom bg-white p-5 shadow rounded'>
									<div className='blockquote-custom-icon bg-info shadow-sm'>
										<i className='fa fa-quote-left text-white' />
									</div>
									<h2 className='mb-0 mt-2 font-italic'>We’re constantly elevating our culture!</h2>
								</blockquote>
								<p className='py-4'>
									The core values of Synectiks lies on trust, ethics and long-term relationship
									building. As we look to elevate the future, it’s vital that our culture - how we do
									things - evolves with us. We continuously learn unlearn the stuff. A company that is
									writing open products and framework and boosting the cloud and DevSecOps culture by
									truly operating in a collaborative and empowerment model and creating a positive
									impact in the society and environment. Our passionate global team demonstrate just
									what DevSecOps culture can achieve. Our passionate global team is real good mix of
									Highly Experienced product developers who has been part of many big success and
									young full stack developers fully trained to deliver in DevOps cultural environment.
									Our deep expertise both on Application and Infrastructure helps us to deliver cloud
									native solutions in an optimal manner and manage its lifecycle in a DevOps way. We
									have learnt to deliver software in predictable and deterministic way.
								</p>
							</div>
						</div>
						<div className='container-fluid px5'>
							<h3>Top 12 reasons to select us as your cloud migration and modernization partner! </h3>
							<div className='hybmt'>
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
												Experience Team with proven track record of CloudOps delivery enabled
												with DevSecOps Capabilities
											</p>
										</div>
										<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
											<div className='d-flex align-items-center flex-column'>
												<img src={TM} alt='' className='tw m-0' />
												<h4 className='my-2 my-md-3'>Time & Money</h4>
											</div>
											<p>
												{' '}
												Our open Product Driven Delivery Model allows customers to quickly
												build, deliver and orchestrate cross cloud services @50% time & cost.
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
												Xformation is a single interface and platform to manage all your
												workloads distributed across multiple clouds and boundaries within a
												single control plane.
											</p>
										</div>
										<div className='col-sm-4 col-md-4 text-center d-flex align-items-center flex-column'>
											<div className='d-flex align-items-center flex-column'>
												<img src={CS} alt='' className='tw m-0' />
												<h4 className='my-4'>Compliance & Security</h4>
											</div>
											<p>
												Our compliance and security assessment tools makes sure your hybrid
												cloud journey meet your business compliance.
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
												Our advanced partnership with major public cloud providers help you to
												get support at every stage.
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
														Avail the opportunity to quickly create demo hybrid cloud setup
														in our existing hybrid IT environment and testify you key
														business use cases.
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
					</div>
				</AboutWrapper>
			</Layout>
		);
	}
}

export default Aboutus;

const AboutWrapper = styled.div`{
padding: 2rem 1rem;
.bloqwidth{
	width: 100%;
}
h3{
	text-align : center;
}
.cstrip {
	background: transparent;
.btn-width{
	width: auto;
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
}
	@media (min-width: 576px) {
padding: 3rem 4rem;
.bloqwidth{
	width: 75%;
}
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
