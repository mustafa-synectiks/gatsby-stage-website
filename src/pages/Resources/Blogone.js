import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
import blog1 from '../../images/Blog/0.png';

const BlogOne = () => {
	return (
		<Layout>
			<BlogWrapper>
				<BreadCrumbs title='Home' subtitle='Blogs' pateTitle='Blog One' />
			</BlogWrapper>
		</Layout>
	);
};

export default BlogOne;

const BlogWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
