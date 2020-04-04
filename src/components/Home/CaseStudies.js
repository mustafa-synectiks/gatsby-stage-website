import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SM from '../../images/case/CS_Software_Migration.jpg';
import RM from '../../images/case/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/case/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/case/CS_NetworkDesign.jpg';
import ST from '../../images/case/CS_StorageTier.jpg';
import DR from '../../images/case/CS_DisasterRecovery.jpg';
import Header from '../Header.js';
import Footer from '../Footer.js';
import Layout from '../../components/layout.js';
import Img from 'gatsby-image';
import SEO from '../seo.js';
import BreadCrumbs from './Breadcrumbs.js';
import { Helmet } from 'react-helmet';

const getImages = graphql`
	query Images {
		fluid: file(relativePath: { eq: "CS_SoftwareDefinedTransformation.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const CaseStudies = () => {
	const data = useStaticQuery(getImages);
	return (
		<Layout>
			<SEO title='Case Studies' />
			<CaseStudiesWrapper>
				<div className='px-1 px-md-1 py-2 text-justify'>
					<BreadCrumbs title='Home' subtitle='Case Studies' pageTitle='Case Studies' />
				</div>
				<h2>Case Studies </h2>
				<div className='container-fluid mx-auto px-3 py-2 px-md-5 py-md-4'>
					<div className='row'>
						<div className='content'>
							<div className='d-flex flex-column flex-md-row justify-content-center'>
								<div className='w-450'>
									<div className='bshad'>
										{/* <img src={SDFT} alt='Disaster Recovery' /> */}
										<Img fluid={data.fluid.childImageSharp.fluid} />

										<div className='text-group align-self-center p-2 bgWhite'>
											<h3 className=''>Software Defined Transformation</h3>
											<p className='pr-5'>AWS Cloud migration for a large motor industry.</p>{' '}
											<a href='/softwaredefined/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>

								<div className='w-450'>
									<div className='bshad'>
										<img src={RM} alt='NetworkDesign' />{' '}
										<div className='text-group align-self-center p-2 bgWhite'>
											<h3 className=''>Realtime Monitoring</h3>
											<p className='pr-2 pr-md-5'>
												Highly Scalable extremely customizable realtime monitoring platform.
											</p>{' '}
											<a href='/realtime/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>

								<div className='w-450'>
									<div className='bshad'>
										<img src={SM} alt='StorageTier' />{' '}
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Storage Migration</h3>
											<p className='pr-5'>
												Petabytes of storage migration for a large financial company with zero
												down.
											</p>{' '}
											<a href='/storagemigration/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='d-flex flex-column flex-md-row justify-content-center py-5'>
								<div className='w-450'>
									<div className='bshad'>
										<img src={ND} alt='Enterprise-Transformation' />{' '}
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Network Design</h3>
											<p className='pr-5'>
												Complete network Backbone design with highest security for retail.
											</p>
											<a href='/networkdesign/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>

								<div className='w-450'>
									<div className='bshad'>
										<img src={ST} alt='StorageTier' className='h46' />

										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Storage Tier</h3>
											<p className='pr-5'>
												Moving Bigdata workloads to aggregated platform for a large telco.
											</p>{' '}
											<a href='/storagetier/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>

								<div className='w-450'>
									<div className='bshad'>
										<img src={DR} alt='StorageTier' />
										<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
											<h3 className=''>Disaster Recovery</h3>
											<p className='pr-5'>
												Lightweight disaster recovery platform for indian Defense.
												<br />
											</p>
											<a href='/disasterrecovery/index.html' className='noLine fw300'>
												Read More <i className='fa fa-arrow-right' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CaseStudiesWrapper>
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
		</Layout>
	);
};
export default CaseStudies;

const CaseStudiesWrapper = styled.div`
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
	}
	.bshad {
		box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.5);
	}
	@media screen and (min-width: 576px) {
		padding: 2rem 4rem;
		.w-450 {
			width: 400px;
			padding: 0 2rem;
		}
	}
`;
