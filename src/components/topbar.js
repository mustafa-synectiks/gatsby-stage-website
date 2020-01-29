import React from 'react';
import Social from './social-icons';
import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const Topbar = () => {
	return (
		<TopBarWrapper>
			<a href='/contactus/index.html' className='mb-2 mb-md-0'>
				CONTACT
			</a>
			<h6 className='bl br mn4 mb-0 mb-md-1'>QUESTIONS? &emsp; 609 608 0429 X 102</h6>
			<h6 className='br'>
				<FaEnvelope className='social mr-1' />info@synectiks.com
			</h6>
			<div className='ts'>
				{Social.map((item, index) => {
					return (
						<a key={index} href={item.url} target='_blank' rel='noopener noreferrer' className='mx-1'>
							{item.icon}
						</a>
					);
				})}
			</div>
		</TopBarWrapper>
	);
};

export default Topbar;

const TopBarWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100vw;
	/* padding-left: 2%; */
	a,
	h6 {
		text-decoration: none !important;
		padding-left: 1%;
		padding-right: 1%;
		font-size: 11px;
		-webkit-text-fill-color: #fff;
	}
	.mn4 {
		margin-left: -1.5rem;
	}
	.ts {
		display: flex;
		width: 55vw;
		justify-content: flex-start;
	}

	@media (min-width: 768px) {
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		width: 100vw;
		/* padding-right: 2%; */
		a,
		h6 {
			text-decoration: none !important;
			letter-spacing: 1px;
			color: #fff;
			font-size: 11px;
			-webkit-text-fill-color: white;
		}
		.mn4 {
			margin-left: 0rem;
		}
		.ts {
			width: 10vw;
			padding-left: 2%;
			margin-right: 1.8%;
		}
		.br {
			border-right: 1px solid rgba(255, 255, 255, 1);
		}
		.bl {
			border-left: 1px solid rgba(255, 255, 255, 1);
		}
	}
	@media (min-width: 1024px) {
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		width: 100vw;
		/* padding-right: 7.8%; */
		a,
		h6 {
			text-decoration: none !important;
			letter-spacing: 1px;
			padding-left: 1%;
			padding-right: 1%;
			color: var(--synectiksWhite);
			-webkit-text-fill-color: var(--synectiksWhite);
			font-size: 12px;
			margin-bottom: 0px;
			font-style: normal;
			font-weight: 400;
		}
		.ts {
			width: 10vw;
			padding-left: 0%;
			/* margin-right: 1.8%; */
		}
		.br {
			border-right: 1px solid rgba(255, 255, 255, 1);
			padding-top: 3px;
			padding-bottom: 3px;
		}
		.bl {
			border-left: 1px solid rgba(255, 255, 255, 1);
			padding-top: 3px;
			padding-bottom: 3px;
		}
	}
`;
