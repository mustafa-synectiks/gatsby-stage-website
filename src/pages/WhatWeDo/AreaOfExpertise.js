import React from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';
import HomeTabs from '../../components/Home/HomeTabs';
import Tabs from '../../components/Home/Tabs';
import SEO from '../../components/seo.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import img1 from '../../images/ApplicationTransformation/Cloud Management.png';
import img2 from '../../images/ApplicationTransformation/Migration and Modernization.png';

const AreaOfExpertise = ({ location }) => {
	return (
		<Layout>
			<SEO title='Area Of Expertise' />
			<AreaOfExpertiseWrapper>
				<div className=''>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Area Of Expertise' />
				</div>
				<div className='my-4'>
					<h1>Area Of Expertise</h1>
					<p>
						Across our outcome-driven consulting and managed services, it's our open product driven software
						solutions, our deep expertise on modern application architecture and our cloud culture that
						makes the difference.
					</p>
				</div>
				<div className='my-2 my-md-4'>
					<h2 className='my-2 text-center text-md-left'>
						We are primarily helping customers on the following areas:
					</h2>
					<div className='d-flex flex-column align-items-center flex-md-row justify-md-content-start my-2 my-md-4'>
						<div className=''>
							<img src={img2} alt='' className='w-7 mr-md-5' />
						</div>
						<div>
							<h3 className='text-center text-md-left'>Migration & Modernization</h3>
							<p>
								Modernize your legacy applications and Infrastructure using cloud-native technologies
								and deliver predictive and deterministic business outcome.
							</p>
						</div>
					</div>
					<div className='d-flex flex-column align-items-center flex-md-row justify-md-content-start my-2 my-md-4'>
						<div className=''>
							<img src={img1} alt='' className='w-7 mr-md-5' />
						</div>
						<div>
							<h3 className='text-center text-md-left'>Cloud Management</h3>
							<p>
								Fully manage your customers cloud environment with CloudOps delivery enabled with
								DevSecOPs capabilities.
							</p>
						</div>
					</div>
				</div>
				<div className='my-2 my-md-4'>
					<h2 className='text-center my-2 my-md-4 py-2 py-md-4'>
						Area of Expertise for Outcome-based Solution offerings
					</h2>
					<HomeTabs />
					<Tabs />
				</div>
			</AreaOfExpertiseWrapper>
		</Layout>
	);
};
export default AreaOfExpertise;

const AreaOfExpertiseWrapper = styled.div`
	 {
		padding: 1rem;
		.w-7 {
			width: 7rem;
		}
		.blockquote {
			width: 100% !important;
			margin: 0;
		}
	}
	@media screen and (min-width: 576px) {
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
