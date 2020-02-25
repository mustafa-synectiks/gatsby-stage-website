import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';

const Blog = () => {
	return (
		<Layout>
			<div className='px-5 pt-5'>
				<BreadCrumbs title='Home' subtitle='Resources' pageTitle='Blog' />
			</div>
			<h1 className='p-5'>Need Blog Content</h1>
		</Layout>
	);
};

export default Blog;
