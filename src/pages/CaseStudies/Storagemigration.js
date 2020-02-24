import * as React from 'react';
import { Helmet } from 'react-helmet';
import cb from '../../images/Storagemigration.jpg';
import as from '../../images/Application-Services-Slider.png';
import Layout from '../../components/layout';
import SEO from '../../components/seo.js';
import CaseBreadCrumbs from '../../components/Home/CasestudiesBreads.js';

const Storagemigration = () => {
	return (
		<Layout>
			<SEO title='Storage Migration' />
			<div className='softwareDefined_wrap px-1 px-md-5 py-1 py-md-5'>
				<CaseBreadCrumbs
					title='Home'
					casetitle='What We Do'
					subtitle='Case Studies'
					pageTitle='Storage Migration'
				/>
				<h2>Storage Migration</h2>
				<div className='softwareDefined_image'>
					<h3>SAN connectivity via Synectiks Storage Network Solutions</h3>
					<p className='blueBorder pl-2 pl-md-5 py-1 py-3'>
						The leadership took a decision to become Harwdare/OS/Operation/vendor agnostic and achive
						scalability and reliability across the organisation. We helped them with all the technologies,
						training to make that happen. Our open platform helped them to become complete software defined,
						automate all operations. We helped them to learn to manage IT in most modern way.
					</p>
					<img src={cb} alt='' className='w-100' />
				</div>
				<div className='d-flex flex-column flex-md-row justify-content-around py-2 py-md-5'>
					<div className='px-2 px-md-5'>
						<h4>Cloud Implement Services</h4>
						<p>
							Production servers require storage consolidation to scale the growth of digital data.
							Business requires efficient and robust storage solutions based on application needs. ERP,
							Big Data Analysis and IOT require a latest all-flash solution. Synectiks provides a wide
							range of storage solutions and has years of expertise in this domain. We enable enterprises,
							around the globe to connect to cloud-based IT capabilities, help optimize costs, enhance
							productivity and bring innovation to IT operations.
						</p>
					</div>
					<div>
						<img src={as} alt='' className='w-100' />
					</div>
				</div>
				<div>
					<h4> Synectiks SAN model</h4>
					<p>
						Over the years, we have developed expertise around SAN storage that led us in creating robust
						solutions for organizations across the globe in different domains and stages
					</p>
				</div>
				<div className='softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5'>
					<div className='column w-100 px-1 px-5 orangeBorder'>
						<h4>Network Model</h4>
						<p>
							Our unique core-edge SAN network offering works best for the applications providing
							availability and load balancing.
						</p>
					</div>
					<div className='column w-100 px-1 px-5 blueBorder'>
						<h4> Business Objective </h4>
						<p>
							Our strength in offering raw block devices of various sizes delivers best i/o response time
							with a high-end performance of the applications. We design and implement 3 data center, 4
							data center block replications.
						</p>
					</div>
					<div className='column w-100 px-1 px-5 redBorder'>
						<h4>File Model</h4>
						<p>
							We design and build customized NAS solutions for enterprises based on their needs and
							demands. We construct robust networking file access to windows and Unix based clients.
						</p>
					</div>
				</div>
				<div>
					<h4>Synectiks Cloud Solutions</h4>
				</div>
				<div className='softwareDefined_div d-flex flex-column flex-md-row justify-content-around py-1 py-md-5'>
					<div className='column w-100 px-1 px-5 orangeBorder'>
						<h4>L1-L2-L3-L4 support</h4>
						<p>
							It is our support to enterprises at various levels brought us where we are today. We support
							operations at multiple stages to achieve customer SLAs and we succeeded. Desktops or
							applications to be accessed anytime, anywhere and in any device.
						</p>
					</div>
					<div className='column w-100 px-1 px-5 blueBorder'>
						<h4>Build Solutions</h4>
						<p>
							We offer a wide range of industry-specific storage box builds for specific niche industry
							domains.
						</p>
					</div>
					<div className='column w-100 px-1 px-5 redBorder'>
						<h4> Active - Active Solutions</h4>
						<p>
							Our active/active solutions enable application clusters to work and maintain zero downtime.
						</p>
					</div>
				</div>
				<div>
					<h4>
						We follow ITIL process and methodologies to support various levels of supports for the
						enterperises.
					</h4>
					<div className='d-flex flex-column flex-md-row'>
						<div className='px-2 px-md-5'>
							<h4>Storage Automation</h4>
							<p>
								Our core strength is to automate the end to end storage operations. We use various
								DevOps tools to automate most of the storage jobs and with this, we receive customer
								requests at a faster rate.
							</p>
						</div>
						<div className='px-2 px-md-5'>
							<h4>Block and File migration</h4>
							<p>
								We are experts in migrating block data across multiple storage boxes. We offer solutions
								and services to accelerate the migration of storage hardware and data.
							</p>
						</div>
					</div>
				</div>

				<div>
					<h4>Cloud across the globe with 187 data centers foot print.</h4>
					<ul>
						<li>180+ Data centers across the globe.</li>
						<li>50+ Storage experts.</li>
						<li>Handled 150 + PB of storage Data.</li>
						<li>10+ cloud services offering with successful POCs.</li>
						<li>3 partnerships for joint solutions.</li>
						<li>Storage assessment.</li>
						<li>Storage Implementations.</li>
						<li>Latest innovations in cloud.</li>
						<li>Building competencies.</li>
						<li>Domain experience for industries like BFSI, healthcare manufacturing and others.</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};
export default Storagemigration;
