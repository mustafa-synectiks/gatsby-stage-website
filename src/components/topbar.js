import React from 'react';
import Social from './social-icons';
import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const Topbar = () => {
	return (
		<TopBarWrapper>
			<a href='/Contact-us.html' className='mb-2 mb-md-0'>
				CONTACT US
			</a>
			<h6 className='bl br'>
				QUESTIONS?
				<span id='quest ' className='ml-2 ml-md-2'>
					609 608 0429 X 102
				</span>
			</h6>
			<a className='br infoMail' href='mailto:info@synectiks.com'>
				<FaEnvelope className='social mr-1' />info@synectiks.com
			</a>
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
	.infoMail {
		display: none;
	}
	display: flex;
	width: 100vw;
	align-items: baseline;
	justify-content: space-around;
	a,
	h6 {
		text-decoration: none !important;
		padding-left: 2%;
		padding-right: 2%;
		font-size: 9px;
		-webkit-text-fill-color: #fff;
	}

	.ts {
		display: flex;
		width: auto;
		justify-content: flex-start;
		a {
			width: auto;
		}
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
	@media (min-width: 378px) {
		.infoMail {
			display: none;
		}
		display: flex;
		width: 100vw;
		align-items: baseline;
		justify-content: space-around;
		a,
		h6 {
			text-decoration: none !important;
			padding-left: 3%;
			padding-right: 3%;
			font-size: 11px;
			-webkit-text-fill-color: #fff;
		}
		#quest {
			cursor: none;
			pointer-event: none;
			text-decoration: none;
			webkit-text-fill-color: white;
		}
		.ts {
			display: flex;
			width: auto;
			justify-content: flex-start;
			a {
				width: auto;
			}
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
	@media (min-width: 768px) {
		.infoMail {
			display: block;
		}
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		width: 100vw;
		padding: 0rem 1.8rem;
		a,
		h6 {
			text-decoration: none !important;
			letter-spacing: 1px;
			color: #fff;
			font-size: 11px;
			-webkit-text-fill-color: white;
			width: auto;
		}

		.ts {
			width: 10vw;
			padding-left: 2%;
			margin-right: 1.8%;
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
	@media (min-width: 1024px) {
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		width: 100vw;
		padding: 0rem 1.8rem;
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
			width: 6.5vw;
			padding-left: 0.6%;
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
