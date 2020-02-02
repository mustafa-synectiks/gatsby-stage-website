import React from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import SM from '../../images/CS_Software_Migration.jpg';
import RM from '../../images/CS_Realtime_Monitoring.jpg';
import SDFT from '../../images/CS_SoftwareDefinedTransformation.jpg';
import ND from '../../images/CS_NetworkDesign.jpg';
import ST from '../../images/CS_StorageTier.jpg';
import DR from '../../images/CS_DisasterRecovery.jpg';

const CaseStudies = () => {
	return (
		<CaseStudiesWrapper>
			<div className='container-fluid bgWhiteGradient px-3 py-2 px-md-5 py-md-4'>
				<div className='row'>
					<div className='content'>
						<div className='col col-sm-12 col-md-3'>
							<div className='my-2 my-md-5 '>
								<h2 className='mb-2 mb-md-3'>Success Stories </h2>
								<a href='' className='text-capitalize'>
									View all success stories &nbsp; >{' '}
								</a>
							</div>
							<div className='progressnumb'>
								<ul className='progress' role='progressbar' aria-valuemin='0' aria-valuemax='100'>
									<li>01</li>
									<li className='slider__label sr-only' /> <li>06</li>
								</ul>
							</div>
							<div className='slickbtns'>
								<div className='prevbtn'>
									<MdArrowBack className='fa-2x' />
								</div>
								<div className='nextbtn'>
									<MdArrowForward className='fa-2x' />
								</div>
							</div>
						</div>
						<div className='col col-sm-12 col-md-9 h70vh'>
							<div className='slider'>
								<div className='w-450 bshad'>
									<img src={SDFT} alt='Disaster Recovery' />

									<div className='text-group align-self-center p-2 bgWhite'>
										<h3 className=''>Software Defined Transformation</h3>
										<p className='pr-5'>AWS Cloud migration for a large motor industry.</p>{' '}
										<a href='/networkdesign/index.html' className='noLine fw300'>
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
										<a href='/networkdesign/index.html' className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</a>
									</div>
								</div>

								<div className='w-450 bshad'>
									<img src={SM} alt='StorageTier' />{' '}
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className=''>Storage Migration</h3>
										<p className='pr-5'>
											Petabytes of storage migration for a large financial company with zero down
											time.
										</p>{' '}
										<a href='/networkdesign/index.html' className='noLine fw300'>
											Read More <i className='fa fa-arrow-right' />
										</a>
									</div>
								</div>

								<div className='w-450 bshad'>
									<img src={ND} alt='Enterprise-Transformation' />{' '}
									<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
										<h3 className=''>Network Design</h3>
										<p className='pr-5'>
											Complete network Backbone design with highest security for retail.
										</p>
										<a href='/storagemigration/index.html' className='noLine fw300'>
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
										<a href='/networkdesign/index.html' className='noLine fw300'>
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
										</p>{' '}
										<a href='/networkdesign/index.html' className='noLine fw300'>
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
	);
};
export default CaseStudies;

const CaseStudiesWrapper = styled.div`
`;
