import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

const XformationSoftware = () => {
	return (
		<Layout>
			<XformationWrapper>
				<BreadCrumbs title='Home' subtitle='Migration-Modernization' pageTitle='Xformation Software' />
				<h1>Xformation Software</h1>
			</XformationWrapper>
		</Layout>
	);
};
export default XformationSoftware;

const XformationWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
