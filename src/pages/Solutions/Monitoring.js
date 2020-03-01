import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

const Monitoring = () => {
	return (
		<Layout>
			<MonitoringWrapper>
				<BreadCrumbs title='Home' subtitle='Migration-Modernization' pageTitle='Monitoring' />
				<h1 className='mt-4'>Need Monitoring content</h1>
			</MonitoringWrapper>
		</Layout>
	);
};
export default Monitoring;

const MonitoringWrapper = styled.div`
	 {
		padding: 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
