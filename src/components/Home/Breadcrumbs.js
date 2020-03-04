import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumbs = ({ title, subtitle, pageTitle }) => {
	return (
		<BreadCrumbsWrapper>
			<a href='/'>{title}</a>
			<IoIosArrowForward className='mx-3 rotateIcon' />
			<h6 className='mx-2'>{subtitle}</h6>
			<IoIosArrowForward className='mx-3 rotateIcon' />
			<h6 className='active'>{pageTitle}</h6>
		</BreadCrumbsWrapper>
	);
};
export default BreadCrumbs;

const BreadCrumbsWrapper = styled.div`
	a {
		width: 18%;
	}
	a,
	h6,
	.rotateIcon {
		font-size: 8px;
		text-align: left;
	}
	.rotateIcon {
		transform: rotate(0deg);
	}
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	flex-direction: row;
	a {
		margin-top: -0.3rem;
	}
	h6.active {
		color: var(--synectiksOrange);
	}
	@media screen and (min-width: 576px) {
		a {
			width: auto;
		}
		.rotateIcon,
		a,
		h6 {
			font-size: 16px;
		}
		.rotateIcon {
			transform: rotate(0deg);
		}
		display: flex;
		justify-content: flex-start;
		align-items: end;
		flex-direction: row;
	}
`;
