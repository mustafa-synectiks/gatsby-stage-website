import React,{useState} from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';

const AreaOfExpertise = () => {

	return (
		<Layout>
<AreaOfExpertiseWrapper>
<p>Across our outcome-driven consulting and managed services, it's our open product driven software solutions, our deep expertise on modern application architecture and our cloud culture that makes the difference.</p>
<h2>We are primarily helping customers on the following areas:</h2>
<h2>Migration & Modernization</h2>
<p>Modernize your legacy applications and Infrastructure using cloud-native technologies and deliver predictive and deterministic business outcome.</p>
 <h2>Cloud Management</h2>
 <p>Fully manage your customers cloud environment with CloudOps delivery enabled with DevSecOPs capabilities.</p>

<div>
<h2>Area of Expertise for Outcome-based Solution offerings</h2>
</div>

</AreaOfExpertiseWrapper>
		</Layout>
	);
};
export default AreaOfExpertise;

const AreaOfExpertiseWrapper = styled.div`
padding: 1rem 2rem;
@media  screen and (min-width: 576px){
padding: 2rem 4rem;
}

`;