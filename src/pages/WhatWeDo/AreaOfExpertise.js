import React from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';
import HomeTabs from '../../components/Home/HomeTabs';
import Tabs from '../../components/Home/Tabs';
import SEO from '../../components/seo.js';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const AreaOfExpertise = ({ location }) => {
	return (
		<Layout>
			<SEO title='Area Of Expertise' />
			<AreaOfExpertiseWrapper>
				<Breadcrumb
					location={location}
					crumbLabel='Devops'
					crumbStyle={{ color: '#666' }}
					crumbActiveStyle={{ color: 'orange' }}
				/>
				<blockquote className='w-75 blockquote blockquote-custom bg-white p-5 shadow rounded'>
					<div className='blockquote-custom-icon bg-info shadow-sm'>
						<i className='fa fa-quote-left text-white' />
					</div>
					<h3 className='mb-0 mt-2 font-italic'>
						Across our outcome-driven consulting and managed services, it's our open product driven software
						solutions, our deep expertise on modern application architecture and our cloud culture that
						makes the difference.
					</h3>
				</blockquote>

				<h2>We are primarily helping customers on the following areas:</h2>
				<h2>Migration & Modernization</h2>
				<p>
					Modernize your legacy applications and Infrastructure using cloud-native technologies and deliver
					predictive and deterministic business outcome.
				</p>
				<h2>Cloud Management</h2>
				<p>
					Fully manage your customers cloud environment with CloudOps delivery enabled with DevSecOPs
					capabilities.
				</p>

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
