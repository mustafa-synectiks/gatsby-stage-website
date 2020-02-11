import React from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SM from '../../images/CS_Software_Migration.jpg';
import RM from '../../images/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/CS_NetworkDesign.jpg';
import ST from '../../images/CS_StorageTier.jpg';
import DR from '../../images/CS_DisasterRecovery.jpg';
import Layout from '../../components/layout.js';

const CaseStudies = () => {
	return (
		<Layout>
			<CaseStudiesWrapper>
				<h2>Case Studies </h2>
				<div className='container-fluid mx-auto px-3 py-2 px-md-5 py-md-4'>
					<div className='row'>
						<div className='content'>
							<div className='d-flex flex-column flex-md-row justify-content-center'>
								<div className='w-450 bshad'>
									<img src={SDFT} alt='Disaster Recovery' />

									<div className='text-group align-self-center p-2 bgWhite'>
										<h3 className=''>Software Defined Transformation</h3>
										<p className='pr-5'>AWS Cloud migration for a large motor industry.</p>{' '}
										<a href='/softwaredefined/index.html' className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</a>
									</div>
								</div>

								<div className='w-450 bshad'>
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

								<div className='w-450 bshad'>
									<img src={SM} alt='StorageTier' />{' '}
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className=''>Storage Migration</h3>
										<p className='pr-5'>
											Petabytes of storage migration for a large financial company with zero down.
										</p>{' '}
										<a href='/storagemigration/index.html' className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							<div className='d-flex flex-column flex-md-row justify-content-center py-5'>
								<div className='w-450 bshad'>
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

								<div className='w-450 bshad'>
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

								<div className='w-450 bshad'>
									<img src={DR} alt='StorageTier' />
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className=''>Disaster Recovery</h3>
										<p className='pr-5'>
											Lightweight disaster recovery platform for indian Defense.
											<br />
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
			</CaseStudiesWrapper>
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
	@media screen and (min-width: 576px) {
		padding: 2rem 4rem;
		.w-450 {
			width: 400px;
			padding: 0 2rem;
		}
	}
`;
