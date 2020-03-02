import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import ManagedServices from '../../images/ManagedServices.jpg';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';

const Managedservices = () => {
	return (
		<Layout>
			<ManagedservicesWrapper>
				<BreadCrumbs title='Home' subtitle='Services' pageTitle='Managed Services' />
				<h1 className='p-5'>Need Managed services content</h1>
			</ManagedservicesWrapper>
		</Layout>
	);
};
export default Managedservices;

const ManagedservicesWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
