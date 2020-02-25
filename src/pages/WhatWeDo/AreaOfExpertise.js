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
				<div className='px-1 px-md-5 py-md-4'>
					<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Area Of Expertise' />
				</div>
				<h1 className='my-4'>Area Of Expertise</h1>
				<p>
					Across our outcome-driven consulting and managed services, it's our open product driven software
					solutions, our deep expertise on modern application architecture and our cloud culture that makes
					the difference.
				</p>
				<div className='my-4'>
					<h3 className='my-4'>We are primarily helping customers on the following areas:</h3>
					<div className='d-flex my-2'>
						<div className='col-2'>
							<img src={img2} alt='' className='w-60' />
						</div>
						<div>
							<h3>Migration & Modernization</h3>
							<p>
								Modernize your legacy applications and Infrastructure using cloud-native technologies
								and deliver predictive and deterministic business outcome.
							</p>
						</div>
					</div>
					<div className='d-flex my-2'>
						<div className='col-2'>
							<img src={img1} alt='' className='w-60' />
						</div>
						<div>
							<h3>Cloud Management</h3>
							<p>
								Fully manage your customers cloud environment with CloudOps delivery enabled with
								DevSecOPs capabilities.
							</p>
						</div>
					</div>
				</div>
				<div>
					<h2>Area of Expertise for Outcome-based Solution offerings</h2>
					<HomeTabs />
					<Tabs />
				</div>
			</AreaOfExpertiseWrapper>
		</Layout>
	);
};
export default AreaOfExpertise;

const AreaOfExpertiseWrapper = styled.div`
	padding: 1rem;
	.w-60 {
		width: 60%;
	}
	padding: 1rem 2rem;
	.blockquote {
		width: 100% !important;
		margin: 0;
	}
	@media screen and (min-width: 576px) {
		padding: 2rem 4rem;
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
