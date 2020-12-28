import * as React from 'react';
import { Helmet } from 'react-helmet';
import ApplicationServices from '../../images/ApplicationServices.jpg';
import optamizecloud from '../../images/Synectiks Logo/optamizecloud.jpg';
import '../../components/layout.css';
import SEO from '../../components/seo.js';
import Layout from '../../components/layout';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import devops from '../../images/Hybrid/DevOps.svg';
import cost from '../../images/Hybrid/Cost.svg';
import security from '../../images/Hybrid/Compliance&Security.png';
import migration from '../../images/Hybrid/Workload Migration.png';
import bullet from '../../images/Hybrid/Bullet.svg';
import scms from '../../images/Hybrid/scms.jpg';

export class AwsManaged extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Layout>
				<Helmet>
					<meta
						name='description'
						content='Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 transforming the workplace experience. With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure.'
					/>
					<link rel='canonical' href='https://synectiks.com/office-migration/index.html' />
				</Helmet>
				<AwsManagedWrapper>
					<SEO title='Aws Manged Services' />
					<div className='psl pb-3'>
						<BreadCrumbs
							title='Home'
							className='psl psr'
							subtitle='Services'
							pageTitle='AWS Manged Services'
						/>
					</div>

					<div className='bg-lightgrey mb-0 pb-3'>
						<div className=''>
							<div className=''>
								<div className='bk-managed psr psl'>
									<div className='w-50'>
										<h1 className='my-1 my-md-3'> Optimize your Cloud!</h1>
										<p className='lineHeight-24 ptext mt-md-4 mt-1'>
											SYNECTIKS aws Managed Services enables companies to accelerate the adoption
											of the cloud, lower operating costs, and mitigate security and compliance
											risks in a cost-effective monthly consumption model. As AWS Consulting
											Services Partner, our experts ensure that your workloads meet the
											requirements of the AWS Well-Architected Framework for efficient migration
											and operation in the AWS secured landing zones.
										</p>
										<p className='lineHeight-24 ptext mt-md-4 mt-1'>
											We help companies improve efficiency and security by automating over 80% of
											common operational tasks with a service that is supported by our
											sophisticated customer management process. Our Managed Services considerably
											reduces the time frame for cloud adoption and relieves your team of critical
											migration and operational loads so You can focus on strategic initiatives
											and innovation.
										</p>
									</div>
									<div />
								</div>
							</div>
							<div className='d-flex psr psl pt-4'>
								<div className='w-100  border-aws-1 p-2 px-3 d-flex flex-column align-items-center'>
									<img class='w-50' src={security} alt='Security' />
									<div className=''>
										<h5 className='mt-4 text-center'>Security and Compliance</h5>
										<p className='mt-4 text-justify'>
											SYNECTIKS Managed Services offer a step-by-step extension of your security
											and identity perimeter in the cloud, while at the same time providing
											functions that support you in meeting various compliance program
											requirements (HIPAA, HITRUST, GDPR, SOC, ISO, PCI). Our diligence and
											control enable your corporate and security infrastructure policies to be
											enforced so that you can develop solutions and applications using your
											preferred development approach.
										</p>
									</div>
								</div>
								<div className='w-100  border-aws-1 p-2 px-3 d-flex flex-column align-items-center'>
									<img class='w-50' src={migration} alt='Affordable Pricing' />
									<div className=''>
										<h5 className='mt-4 text-center'>
											Accelerate Migration <br /> to Cloud
										</h5>
										<p className='mt-2 text-justify'>
											SYNECTIKS Managed Services provides an enterprise-grade, proven operating
											environment that enables you to migrate production workloads in days instead
											of months. Our Managed Services team uses the minimally feasible refactoring
											approach, in which only necessary changes are made to your applications to
											meet security and compliance requirements. AMS then takes responsibility for
											the operation of your cloud environment after the migration.
										</p>
									</div>
								</div>
								<div className='w-100  border-aws-1 p-2 px-3 d-flex flex-column align-items-center'>
									<img class='w-50' src={devops} alt='Self-service portal' />
									<div className=''>
										<h5 className='mt-4 text-center'>Improve Innovation</h5>
										<p className='mt-4 text-justify'>
											Enterprise DevOps is the convergence of modern best practices for
											development and existing ITIL process frameworks to give you speed and
											flexibility while controlling governance, security, and compliance. Our
											Managed Services enables Enterprise DevOps by bringing AWS IaaS services
											together into a secure, compatible development platform that is compatible
											with most enterprise workloads.
										</p>
									</div>
								</div>
								<div className='w-100  border-aws-1 p-2 px-3 d-flex flex-column align-items-center'>
									<img class='w-50 ' src={cost} alt='Multi Secure Geo Locations' />
									<div className=''>
										<h5 className='mt-4 text-center'>Cloud Cost Management</h5>
										<p className='mt-4 text-justify'>
											Optimizing cloud operations for your specific business outcomes eliminates
											waste and keeps costs low. Our data-centric approach to infrastructure
											development will see all critical applications effortlessly optimized
											towards performance, scale, and efficiency. So, you can focus less time on
											maintaining your infrastructure and more on innovation.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='w-100  text-black ptext psl py-5'>
							<h3 className=''>AWS Managed Services Features</h3>
							<div className='col-lg-12 d-flex flex-col flex-column flex-md-row'>
								<div className='pt-3 col-sm-4 px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Provisioning</a>
								</div>
								<div className='pt-3 col-sm-4 px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Security and Access Management</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Cost</a>
								</div>
							</div>
							<div className='col-lg-12 d-flex flex-col flex-column flex-md-row'>
								<div className='pt-3 col-sm-4  px-0  d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Monitoring and Event Management</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Compliance</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>24 x 7 Service Desk</a>
								</div>
							</div>
							<div className='col-lg-12 d-flex flex-col flex-column flex-md-row'>
								<div className='pt-3 col-sm-4  px-0  d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Patch and Continuity Management</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Change Management</a>
								</div>
								<div className='pt-3 col-sm-4 px-0  d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Enterprise Support</a>
								</div>
							</div>
							<div className='col-lg-12 d-flex flex-col flex-column flex-md-row'>
								<div className='pt-3 col-sm-4  px-0  d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Availability</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Incident Management</a>
								</div>
								<div className='pt-3 col-sm-4  px-0 d-flex'>
									<img src={bullet} alt='' className='w-aws-8' />

									<a className='navlink navfont noLine'>Firewall Management</a>
								</div>
							</div>
						</div>

						<div className='bg-lightgrey text-black w-100  pb-md-4 pb-2 flex-column flex-md-row d-flex psl psr'>
							<div className='w-100  pl-3 pr-3 text-black'>
								<h3 className='my-1 my-md-3'>Optimize Your Cloud Management</h3>
								<p className='lineHeight-24 ptext mt-md-4 mt-1'>
									The way you manage, monitor, and adapt your cloud operations for your specific
									business outcomes determines your ability to innovate.
									<br />
									<br />
									SYNECTIKS Managed Services takes care of what matters most: Cost, Performance, and
									Most importantly Security. The result is simple but incredibly powerful – the
									freedom to make choices, take actions to enhance your business and innovate within
									your cloud environment.
									<br />
									<br />
									We can help!
								</p>
								<a className='btn btn-primary' href='https://synectiks.com/Contact-us.html'>
									Let's Talk
								</a>
							</div>
							<div className='w-100 ml-md-auto' data-aos='fade-up'>
								<img
									class='w90 ml-md-5 box-shadow'
									src={scms}
									width='100%'
									alt='Hosted Infrastructure'
								/>
							</div>
						</div>
					</div>
					<Helmet>
						<script
							dangerouslySetInnerHTML={{
								__html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `
							}}
						/>
					</Helmet>
				</AwsManagedWrapper>
			</Layout>
		);
	}
}

export default AwsManaged;

const AwsManagedWrapper = styled.div`
	 {
		padding: 2rem 1rem;
		.ptext {
			text-align: left;
		}
		.psr {
			padding-right: 0rem !important;
		}
		.psl {
			padding-left: 0rem !important;
		}
	}
	@media (min-width: 576px) {
		.w90 {
			width: 90% !important;
		}
		padding: 3rem 0rem;
		.ptext {
			text-align: justify;
		}
		.psr {
			padding-right: 4rem !important;
		}
		.psl {
			padding-left: 4rem !important;
		}
	}
`;
