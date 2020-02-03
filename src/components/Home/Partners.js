import React, { useEffect } from 'react';
import styled from 'styled-components';
import aws from '../../images/HomePage/aws.png';
import acro from '../../images/HomePage/Acronis Logo.png';
import gle from '../../images/HomePage/google.png';
import msa from '../../images/HomePage/msa.png';
const Partners = () => {
	return (
		<div className='customer-logos'>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={aws} className='w-100' />
				</div>
			</div>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={gle} className='w-100' />
				</div>
			</div>
			<div>
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={msa} className='w-100' />
				</div>
			</div>
			<div>
				{' '}
				<div className='w-75 mx-auto mb-2 mb-md-0'>
					<img src={acro} className='w-100' />
				</div>
			</div>
		</div>
	);
};

export default Partners;

const PartnerWrapper = styled.section``;
