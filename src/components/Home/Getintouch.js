import React from 'react';
import styled from 'styled-components';

const GetInTouch = () => {
	return (
		<GetTouchWrapper>
			<div className='container-fluid p-1 p-md-5 cstrip'>
				<div className='container bgBlue p-1 p-md-4 d-flex flex-column align-items-center flex-md-row justify-content-around'>
					<div className='cstrip_text'>
						<h3 className='text-white'>Want to know how to evaluate your business?</h3>
					</div>
					<a href='/Contact.html' className='textColor btn btn-cnt btn-lg btn-rnd px-5 btn-width'>
						Get In Touch
					</a>
				</div>
			</div>
		</GetTouchWrapper>
	);
};

export default GetInTouch;

const GetTouchWrapper = styled.div`
	 {
		.cstrip {
			background: transparent;
			.btn-width {
				width: 75%;
			}
			.cstrip_text {
				h3 {
					font-size: 1.2rem;
				}
			}
		}
		.cstrip_text {
			transform: none;
			-webkit-transition: transform .7s ease-in-out, -webkit-transform .7s ease-in-out;
			transition: transform .7s ease-in-out, -webkit-transform .7s ease-in-out;
		}
		.cstrip:hover .cstrip_text {
			transform: translateX(15px);
		}
		.cstrip {
			background: var(--synectiksWhite);
			.btn-width {
				width: auto;
				background: var(--synectiksWhite);
			}
		}
	}
	@media screen and (min-width: 576px) {
		.cstrip {
			background: var(--synectiksWhite);
		}
		.cstrip {
			background: var(--synectiksWhite);
			.btn-width {
				width: auto;
				background: var(--synectiksWhite);
			}
		}
	}
`;
