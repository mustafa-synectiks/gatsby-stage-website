import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumbs = ({ title, subtitle, pageTitle }) => {
	return (
		<BreadCrumbsWrapper>
			<a href='/'>{title}</a>
			<IoIosArrowForward className='mx-3' />
			<h6 className='mx-2'>{subtitle}</h6>
			<IoIosArrowForward className='mx-3' />
			<h6 className='active'>{pageTitle}</h6>
		</BreadCrumbsWrapper>
	);
};
export default BreadCrumbs;

const BreadCrumbsWrapper = styled.div`
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
	@media screen and (min-width: 576px) {
		display: flex;
		justify-content: flex-start;
		align-items: end;
		flex-direction: row;
	}
`;
