import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

const Analytics = () => {
	return (
		<Layout>
			<AnalyticsWrapper>
				<BreadCrumbs title='Home' subtitle='Migration-Modernization' pageTitle='Analytics' />
				<h1 className='mt-4'>Need Analytics Content</h1>
			</AnalyticsWrapper>
		</Layout>
	);
};
export default Analytics;

const AnalyticsWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
