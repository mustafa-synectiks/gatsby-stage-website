import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import lc from '../../images/LargeMotorCompany.jpg';
import SEO from '../../components/seo.js';
import styled from 'styled-components';
import CaseBreadCrumbs from '../../components/Home/CasestudiesBreads.js';

const brdr = {
	borderRadius: '0 0.25rem 0.25rem 0'
};

const Softwaredefined = () => {
	return (
		<Layout>
			<SoftwaredefinedWrapper>
				<SEO title='Software Defined' />
				<div className='softwareDefined_wrap'>
					<CaseBreadCrumbs
						title='Home'
						casetitle='What We Do'
						subtitle='Case Studies'
						pageTitle='Software Defined'
					/>
					<h2>Software Defined</h2>
					<div className='softwareDefined_image'>
						<h3>Large Motor Company</h3>
						<p className='blueBorder pl-2 pl-md-5 py-1 py-3'>
							The leadership took a decision to become Harwdare/OS/Operation/vendor agnostic and achive
							scalability and reliability across the organisation. We helped them with all the
							technologies, training to make that happen. Our open platform helped them to become complete
							software defined, automate all operations. We helped them to learn to manage IT in most
							modern way.
						</p>
						<img src={lc} alt='' className='w-100' />
					</div>
					<div className='softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5'>
						<div className='column w-100 px-1 px-5 orangeBorder'>
							<h4>Industry</h4>
							<p>Automobiles</p>
						</div>
						<div className='column w-100 px-1 px-5 blueBorder'>
							<h4>Business Objective</h4>
							<p>
								Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make
								everything software defined.
							</p>
						</div>
						<div className='column w-100 px-1 px-5 redBorder'>
							<h4>Technologies</h4>
							<p> AWS, Infrastructure as a code, microservices, devops</p>
						</div>
					</div>
					<div>
						<h4>Overview</h4>
						<p>
							Four data centers and more than two thousand servers running 24/7, with twenty plus
							applications and two hundred operations team, Large Motor Company handles massive daily
							operations round the clock to give the best world class service to their customers.
						</p>
						<h4>Challenges</h4>
						<p>
							Scalability: This was the primary and pertinent challenge of Large Motor Company as their
							applications were not horizontally scalable due to which their applications, faced many
							performance issues. Reliability: They had difficulty in confronting hardware downtime,
							unplanned outages have directly impacted software downtime and baffled their IT operations,
							applications and data. Vendor Dependency: They were running licensed products for HA
							clustering, system monitoring and security. Most of the products were licensed. Traditional
							IT infrastructure: With traditional Infrastructure, it is not only difficult to manage a
							data center but also hard to improve costs in maintaining the physical resources. The Large
							Motor company was not using more than 10% of their physical resources.
						</p>
					</div>
					<div>
						<h4>Solutions</h4>
						<ul>
							<li>
								We remodeled their legacy IT infrastructure into an entirely software-defined
								architecture.
							</li>
							<li>
								Entire operations effort have been shortened and condensed to maintain the four data
								centers.
							</li>
							<li>
								We provided a centralized source, valid data and advanced data governance technology.
							</li>
							<li>
								We designed the entire application layer with statelessness, ensuring horizontal
								scalability, better security and visibility to the exposed API.
							</li>
							<li>
								{' '}
								We proved our expertise once again by delivering fast and accurate releases to meet the
								growing business demand.
							</li>{' '}
							<li>
								{' '}
								We rebuilt and revamped the existing applications to meet today’s agility and
								scalability demands in the market.
							</li>{' '}
							<li>
								{' '}
								We reduced high CAPEX and OPEX and made them achieve more with less IT budget.
							</li>{' '}
							<li> We offered a complete license agnostic solution.</li>
						</ul>
					</div>
					<div>
						<h4>
							Synectiks providing a customized solution and targeting the pain points of Large Motor
							Systems.
						</h4>
						<p>
							When Large Motor Company approached Synectiks, they were handling multiple tasks with
							traditional infrastructure model. They have reached a point on the edge where they can no
							longer withstand the outage issues that rippled their business to two folds and finally
							resulted in high potential cost for their business. Initially, Large Motor Company’s
							infrastructure was not tailored as per their requirements that resulted in maintaining huge
							operations effort to manage their data centers. They were expecting quick and accurate
							releases to meet their growing business needs. With almost high CAPEX and OPEX, their IT
							budget was already skyrocketing and was going beyond their expectations. Their primary focus
							areas were on scalability, agility and reliability issues. Once fixed, they can outperform
							in their core areas and compete in their line of business for better business prospects.
						</p>
						<h4>How did Synectiks Consolidate, Validate and Outline the issues of Large Motor Systems?</h4>
						<p>
							We believe in harvesting information as much as possible that will yield a better solution.
							That is exactly what we did with Large Motor Company. Upon analyzing their queries on a
							broader spectrum, we did a quick 360° audit on their existing infrastructure and harvested
							some vital insights on key improvement areas and a plan for any migration path and risks
							involved in the following process. We conducted multiple PoC’S with Large Motor Company to
							channel a solid understanding of the technologies and modernize their IT infrastructure. By
							translating the entire hardware infrastructure into a few lines of software code, we crafted
							a backbone infrastructure effortlessly. Also, we refactored monolith applications to
							multiple microservices and established a complete application lifecycle management and
							operation support system to maintain their business operations. Ultimately, by achieving the
							required data security, governance and compliance requirements in the cloud.
						</p>

						<h4>OUTCOME</h4>
						<p>
							The entire business system is now managed by few resources reducing CAPEX by 80% and OPEX by
							70%. Large Motor Company’s legacy infrastructure is entirely a new transformed
							software-defined infrastructure. As we promised, they achieved scalability, reliability,
							security, agility and operation SLA’s. The entire infrastructure is maintained with the code
							that we created and tailored as per their business requests. Large Motor Company achieved
							elasticity to create, modify, shrink and remove infrastructure needs dynamically in no time.
							For a successful delivery pipeline, our DevOps automation helps them to manage the lifecycle
							of multiple microservices through the automated platform. To achieve continuous delivery, we
							release quality codes every hour.
						</p>
					</div>
				</div>
			</SoftwaredefinedWrapper>
		</Layout>
	);
};

export default Softwaredefined;

const SoftwaredefinedWrapper = styled.div`
	 {
		padding: 2rem 1rem;
	}

	@media screen and (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
