import React, { useEffect } from 'react';
import Styled from 'styled-component';
const Partners = () => {
	return (
		<section className='Partnerslider'>
			<div>slider 2</div>
			<div>slider 3</div>
			<div>slider 4</div>
			<div>slider 5</div>
			<div>slider 6</div>
			<div>slider 7</div>
			<div>slider 8</div>
		</section>
	);
};

export default Partners;

const PartnerWrapper = styled.section`
	.slider {
		width: auto;
		margin: 30px 50px 50px;
	}
	.slider .slick-slide {
		background: #292e3e;
		color: white;
		padding: 40px 0;
		font-size: 30px;
		font-family: "Arial", "Helvetica";
		text-align: center;
	}
	.slider .slick-prev:before,
	.slider .slick-next:before {
		color: #292e3e;
	}
	.slider .slick-dots {
		bottom: -30px;
	}
	.slider .slick-slide:nth-child(odd) {
		background: #57c09f;
	}
`;
