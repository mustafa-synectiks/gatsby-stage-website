import React from 'react';
import Layout from '../../components/layout.js';
import CaseStudies from '../../components/Home/CaseStudies.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const CaseStudy = () => {
	return (
		<Layout>
			<BreadCrumbs title='Home' subtitle='What We Do' pageTitle='Case Studies' />
			<h1>ok</h1>
			<CaseStudies />
		</Layout>
	);
};
export default CaseStudy;
