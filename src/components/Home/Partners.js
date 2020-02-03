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
	.Partnerslider {
		width: auto;
	}
	.Partnerslider .slick-slide {
		background: #292e3e;
		color: white;
		padding: 40px 0;
		font-size: 30px;
		font-family: "Arial", "Helvetica";
		text-align: center;
	}
	.Partnerslider .slick-prev:before,
	.Partnerslider .slick-next:before {
		color: #292e3e;
	}
	.Partnerslider .slick-dots {
		bottom: -30px;
	}
	.Partnerslider .slick-slide:nth-child(odd) {
		background: #57c09f;
	}
`;
