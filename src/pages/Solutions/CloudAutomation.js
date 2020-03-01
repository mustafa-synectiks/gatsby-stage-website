import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
const CloudAutomation = () => {
	return (
		<Layout>
			<CloudAutomationWrapper>
				<BreadCrumbs title='Home' subtitle='Migration-Modernization' pageTitle='Cloud Automation' />
				<h1 className='mt-4'>Need Cloud Automation content</h1>
			</CloudAutomationWrapper>
		</Layout>
	);
};
export default CloudAutomation;

const CloudAutomationWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
