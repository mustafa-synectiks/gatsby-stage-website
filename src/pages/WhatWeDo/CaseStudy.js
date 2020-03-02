import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SM from '../../images/CS_Software_Migration.jpg';
import RM from '../../images/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/CS_NetworkDesign.jpg';
import ST from '../../images/CS_StorageTier.jpg';
import DR from '../../images/CS_DisasterRecovery.jpg';
import Layout from '../../components/layout.js';
import Img from 'gatsby-image';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const CaseStudy = () => {
	return (
		<Layout>
			<SEO title='Case Studies' />
			<CaseStudyWrapper>
				<div className='text-justify'>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Case Studies' />
				</div>
				<h1 className='my-2 my-md-4'>Case Studies</h1>
				<div className='content'>
					<div className='d-flex flex-column flex-md-row justify-content-between mb-2 mb-md-5'>
						<div className='w-450'>
							<a href='/softwaredefined/index.html' className='noLine fw300'>
								<div className='box-shadow'>
									<img src={SDFT} alt='NetworkDesign' />
									<div className='text-group align-self-center p-2 bgWhite'>
										<h3 className='textColor'>Software Defined Transformation</h3>
										<p className='pr-2 pr-md- textColor'>
											AWS Cloud migration for a large motor industry.
										</p>
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</a>
						</div>
						<div className='w-450'>
							<a href='/realtime/index.html' className='noLine fw300'>
								<div className='box-shadow'>
									<img src={RM} alt='NetworkDesign' />
									<div className='text-group align-self-center p-2 bgWhite'>
										<h3 className='textColor'>Realtime Monitoring</h3>
										<p className='pr-2 pr-md-5 textColor'>
											Highly Scalable extremely customizable realtime monitoring platform.
										</p>
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</a>
						</div>

						<div className='w-450'>
							<a href='/storagemigration/index.html' className='noLine fw300'>
								<div className='box-shadow'>
									<img src={SM} alt='StorageTier' />{' '}
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className='textColor'>Storage Migration</h3>
										<p className='pr-5 textColor'>
											Petabytes of storage migration for a large financial company with zero down.
										</p>{' '}
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div className='d-flex flex-column flex-md-row justify-content-between my-2 my-md-5'>
						<a href='/networkdesign/index.html' className='noLine fw300'>
							<div className='w-450'>
								<div className='box-shadow'>
									<img src={ND} alt='Enterprise-Transformation' />{' '}
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className='textColor'>Network Design</h3>
										<p className='pr-5 textColor'>
											Complete network Backbone design with highest security for retail.
										</p>
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</div>
						</a>

						<a href='/storagetier/index.html' className='noLine fw300'>
							<div className='w-450'>
								<div className='box-shadow'>
									<img src={ST} alt='StorageTier' className='h46' />

									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className='textColor'>Storage Tier</h3>
										<p className='pr-5 textColor'>
											Moving Bigdata workloads to aggregated platform for a large telco.
										</p>{' '}
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</div>
						</a>
						<a href='/disasterrecovery/index.html' className='noLine fw300'>
							<div className='w-450'>
								<div className='box-shadow'>
									<img src={DR} alt='StorageTier' />
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className='textColor'>Disaster Recovery</h3>
										<p className='pr-5 textColor'>
											Lightweight disaster recovery platform for indian Defense.
											<br />
											<br />
										</p>
										<span className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</span>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</CaseStudyWrapper>
		</Layout>
	);
};
export default CaseStudy;

const CaseStudyWrapper = styled.div`
	 {
		padding: 2rem 1rem;
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			text-align: left;
		}
		.w-450 {
			width: 100%;
			overflow: hidden !important;
		}
		.fw300 {
			overflow: hidden !important;
		}
		.box-shadow {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
			overflow: hidden !important;
			margin: 1rem 0rem;
		}

		.box-shadow img {
			-webkit-transition: 0.4s ease;
			transition: 0.4s ease;
			overflow: hidden !important;
		}
		.fw300:hover .box-shadow img {
			-webkit-transform: scale(1.04);
			transform: scale(1.04);
			overflow: hidden !important;
		}
	}
	@media screen and (min-width: 576px) {
		padding: 3rem 4rem;
		.w-450 {
			width: 400px;
			padding: 0 2rem;
		}
	}
`;
