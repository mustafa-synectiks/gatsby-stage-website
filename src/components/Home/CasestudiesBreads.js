import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const CaseBreadCrumbs = ({ title, subtitle, casetitle, pageTitle }) => {
	return (
		<CaseBreadCrumbsWrapper>
			<a href='/'>{title}</a>
			<IoIosArrowForward className='mx-1 mx-md-3' />
			<h6 className=''>{casetitle}</h6>
			<IoIosArrowForward className='mx-1 mx-md-3' />
			<a href='/casestudies/index.html' className='mx-1 mx-md-2'>
				{subtitle}
			</a>
			<IoIosArrowForward className='mx-1 mx-md-3' />
			<h6 className='active'>{pageTitle}</h6>
		</CaseBreadCrumbsWrapper>
	);
};
export default CaseBreadCrumbs;

const CaseBreadCrumbsWrapper = styled.div`
	 {
		display: flex;
		justify-content: flex-start;
		align-items: end;
		flex-direction: column;
		a {
			margin-top: -0.3rem;
		}
		h6.active {
			color: var(--synectiksOrange);
		}
	}

	@media screen and (min-width: 576px) {
		display: flex;
		justify-content: flex-start;
		align-items: end;
		flex-direction: row;
		a {
			margin-top: -0.3rem;
		}
		h6.active {
			color: var(--synectiksOrange);
		}
	}
`;
