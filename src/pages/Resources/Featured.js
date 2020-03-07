import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Cr from '../../images/Careers.png';
import FS from '../../images/FeDevOps-Strategies.png';
import FT from '../../images/FeEnterprise-Transformation.png';
import FMP from '../../images/FeMicroservice-Platform.png';
import FP from '../../images/FeOpen-Platform.png';
import '../../components/layout.css';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
import SEO from '../../components/seo.js';

export class Featured extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Layout>
				<FeaturedWrapper>
					<div className='bg-lightgrey'>
						<SEO title='Featured' />
						{/* <img className='text-center' src={Cr} width='100%' alt='Resources' /> */}

						{/* <div className='text-center centered '> */}
						{/* <div className='text-white'>
								<h3>Resources</h3>
							</div> */}
						<BreadCrumbs title='Home' subtitle='Resources' pageTitle='Featured' />

						<div className=''>
							<h1 className='mt-2 mt-md-4'>Featured</h1>
							<div className='d-flex flex-column flex-md-row justify-content-around flex-fill  align-items-center flex-col'>
								<div>
									<div className='p-1 p-md-5'>
										<img src={FS} width='100%' alt='Enterprise-DevOps' className='imgBx' />
										<div className='text-group align-self-center'>
											<h6 className='font-weight-bold pt-2'>
												Discover the business value of Synectiks Open Xformation Platform and
												how it optimizes Enterprise DevOps Strategies.{' '}
											</h6>
											<a
												href='https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-DevOps-Strategies.pdf'
												target='_blank'
												rel='noopener noreferrer'>
												Learn more <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>

								<div>
									<div className='p-1 p-md-5'>
										<img
											className='border-grey-2px imgBx'
											src={FT}
											width='100%'
											alt='Enterprise-Transformation'
										/>
										<div className='text-group align-self-center '>
											<h6 className='font-weight-bold pt-2'>
												Discover how Synectiks open products based service delivery approach
												creating significant differences in service sector.{' '}
											</h6>
											<a
												href='https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Enterprise-Transformation.pdf'
												target='_blank'
												rel='noopener noreferrer'>
												Learn more <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className=''>
								<div className='d-flex flex-column flex-md-row justify-content-around pt-2 flex-fill  align-items-center flex-col'>
									<div className='col-md-6'>
										<div className='p-1 p-md-5'>
											<img
												src={FMP}
												width='100%'
												alt='Enterprise-Transformation'
												className='imgBx'
											/>{' '}
											<div className='text-group align-self-center'>
												<h6 className='font-weight-bold pt-2'>
													Why to choose Synectiks as your preferred microservices delivery
													partner.
												</h6>

												<a
													href='https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Microservice-Platform.pdf'
													target='_blank'
													rel='noopener noreferrer'>
													Learn more <i className='fa fa-arrow-right' />
												</a>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='p-1 p-md-5'>
											<img
												src={FP}
												width='100%'
												alt='Enterprise-Transformation'
												className='imgBx'
											/>{' '}
											<div className='text-group align-self-center'>
												<h6 className='font-weight-bold pt-2'>
													Synectiks Xformation Platform accelerate any transformation project
													@50% cost &amp; Time.
												</h6>

												<a
													href='https://synectiks-website.s3.amazonaws.com/doc/Synectiks-Open-Platform.pdf'
													target='_blank'
													rel='noopener noreferrer'>
													Learn more <i className='fa fa-arrow-right' />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FeaturedWrapper>
			</Layout>
		);
	}
}
export default Featured;

const FeaturedWrapper = styled.div`
	padding: 2rem 1rem;
	.w-img {
		width: 100% !important;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
		.w-img {
			width: 100% !important;
		}
	}
`;
