import React from 'react';
import styled from 'styled-components';

const IconSection = ({ imgs, heading, description }) => {
	return (
		<IconSectionWrapper>
			<div className='ImageWrapper'>
				<img src={imgs} alt='' />
			</div>
			<div className='TextWrapper'>
				<h5>{heading}</h5>
				<p>{description}</p>
			</div>
		</IconSectionWrapper>
	);
};

export default IconSection;

const IconSectionWrapper = styled.div`
	 {
		display: flex;
		flex-direction: column;
		align-items: center;

		.ImageWrapper {
			width: 15vw;
			img {
				width: 100%;
			}
		}
		.TextWrapper {
			width: 85vw;
			display: flex;
			flex-direction: column;
			h5 {
				text-align: center;
			}
			p {
				text-align: center;
			}
		}
	}
	@media (min-width: 576px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		.ImageWrapper {
			display: flex;
			flex-direction: row;
			width: 20vw;
		}
		.TextWrapper {
			width: 80vw;
			display: flex;
			flex-direction: column;
			h5 {
				text-align: left;
			}
			p {
				text-align: justify;
			}
		}
	}
`;
