import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

const DataTransformation = () => {
	return (
		<Layout>
			<DataTransformationWrapper>
				<BreadCrumbs title='Home' subtitle='Migration-Modernization' pageTitle='Cloud Automation' />
				<h1>Need Data Transformation content</h1>
			</DataTransformationWrapper>
		</Layout>
	);
};
export default DataTransformation;

const DataTransformationWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
