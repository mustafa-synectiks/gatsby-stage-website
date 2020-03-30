import React from 'react';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import styled from 'styled-components';
import blog1 from '../../images/Blog/0.png';
import SEO from '../../components/seo.js';

const Blog = () => {
	return (
		<Layout>
			<BlogWrapper>
				<SEO title='Blogs' />
				<div className=''>
					<BreadCrumbs title='Home' subtitle='Resources' pageTitle='Blog' />
					<h1 className='my-2 my-md-4'>Synectiks Blog</h1>
				</div>
				<div>
					<div className='w-450'>
						<div className='bshad'>
							<a href='/blogone/index.html' className='noLine fw300'>
								<img src={blog1} alt='Enterprise-Transformation' width='100%' />{' '}
								<div className='text-group align-self-center p-1 p-md-2 bgWhite'>
									{/* <h3 className=''>Network Design</h3> */}
									<p className='pr-5'>
										Five Q's you may need to find an answer for a Large Scale Micro-Services
										transformation journey.
									</p>
									<span className='noLine fw300'>
										Read More <i className='fa fa-arrow-right' />
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</BlogWrapper>
		</Layout>
	);
};

export default Blog;

const BlogWrapper = styled.div`
	 {
		padding: 2rem 1rem;
		.w-450 {
			width: 100%;
			padding: 0;
			.bshad {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
			}
		}
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
		.w-450 {
			width: 400px;
			padding: 0;
		}
	}
`;
