import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Layout from '../../components/layout';
import { FaBars } from 'react-icons/fa';

import '../../components/layout.css';
import styled from 'styled-components';
import cloudImage from '../../images/ManagedBackup/CloudBackup.png';
import cloudImaged from '../../images/ManagedBackup/cloud.png';
import security from '../../images/ManagedBackup/Security.png';
import geolocation from '../../images/ManagedBackup/MultipleSecureGeoLocations.png';
import backupStorage from '../../images/ManagedBackup/BackupStorage.png';
import efficientStorage from '../../images/ManagedBackup/EfficientBackupStorageUsage.png';
import protection from '../../images/ManagedBackup/ProtectionforAnyworkload.png';
import restore from '../../images/ManagedBackup/Restore.png';
import support from '../../images/ManagedBackup/Support.png';
import price from '../../images/ManagedBackup/affordableprice.png';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SEO from '../../components/seo.js';

const PrimaryCloudHostingServices = () => {
	const [ activeTab, setActiveTab ] = useState('2');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const [ isOpen, setNav ] = useState(true);
	const toggleTab = () => {
		setNav((isOpen) => !isOpen);
	};

	return (
		<Layout>
			<SEO title='Primary Cloud Hosting Services' />
			<CloudManagedBackupWrapper>
				<div className='bg-lightgrey container-fluid'>
					<div className=''>
						<Row className='position-relative'>
							<div className='col-md-12'>
								<div className=''>
									<button onClick={toggleTab} className='logo-btn'>
										<FaBars />
									</button>
									<div>
										{/* <div className={isOpen ? `tabsHide` : `tabList`}> */}
										{/* <Nav className='sidetabs'>
											<NavItem className='one'>
												<NavLink
													id='bgL'
													className={classnames({ active: activeTab === '1' })}
													onClick={() => {
														toggle('1');
														toggleTab();
													}}>
													Hosted Infrastructure
												</NavLink>
											</NavItem>

											<NavItem className='one'>
												<NavLink
													id='bgLL'
													className={classnames({ active: activeTab === '2' })}
													onClick={() => {
														toggle('2');
														toggleTab();
													}}>
													Cloud Managed Backup
												</NavLink>
											</NavItem>
											<NavItem className='one'>
												<NavLink
													id='bgLLL'
													className={classnames({ active: activeTab === '3' })}
													onClick={() => {
														toggle('3');
														toggleTab();
													}}>
													Cloud Managed DR
												</NavLink>
											</NavItem>
										</Nav> */}
										<Nav className='d-flex my-4 mx-auto w-85'>
											{/* <Nav className='sidetabs'> */}
											{/* <Nav vertical className='sidetabs'> */}
											<NavItem className='one'>
												<NavLink
													id='bgL'
													className={classnames({ active: activeTab === '1' })}
													onClick={() => {
														toggle('1');
														toggleTab();
													}}>
													UNDERSTANDING THE HYBRID CLOUD primary
												</NavLink>
											</NavItem>

											<NavItem className='one'>
												<NavLink
													id='bgLL'
													className={classnames({ active: activeTab === '2' })}
													onClick={() => {
														toggle('2');
														toggleTab();
													}}>
													GETTING STARTED TO HYBRID CLOUD
												</NavLink>
											</NavItem>
											<NavItem className='one'>
												<NavLink
													id='bgLLL'
													className={classnames({ active: activeTab === '3' })}
													onClick={() => {
														toggle('3');
														toggleTab();
													}}>
													HOW SYNECTIKS CAN HELP
												</NavLink>
											</NavItem>
											<NavItem className='one'>
												<NavLink
													id='bgLLL'
													className={classnames({ active: activeTab === '4' })}
													onClick={() => {
														toggle('4');
														toggleTab();
													}}>
													{/* <span>
                      <img src={SD} alt="" className='imgHyb'/>
                    </span> */}
													SYNECTIKS DIFFERENTIATOR
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</div>
							</div>
							<div className='px-1 mb-3 col-md-12'>
								<TabContent activeTab={activeTab}>
									<TabPane tabId='1' />

									<TabPane tabId='2'>
										<div>
											<div className='row pt-2 pt-md-4  mx-auto'>
												<img src={cloudImaged} alt='' className='w-100 h-50 mx-auto' />
												{/* <div className='bg-imageCloudManageBackup' /> */}
											</div>
											<h2 className='py-2 py-md-4'>
												Secure, Reliable & Very Affordable Cloud Backup Solutions Ok it
											</h2>
											<p>
												At Synectiks, Data Protection is the topmost priority and is taken very
												seriously. Synectiks Cloud Backup with cutting edge technology backup
												solutions offers an easy, secure and affordable cloud offsite backup
												needs. you can have your backup offsite with confidence at Synectiks
												Cloud infrastructure at preferred Geo locations. Synectiks backup
												solutions provide exceptional, customizable backup and storage
												management solutions for any system setup: physical servers, virtual
												machines, PCs, business-critical applications, Databases and more.
											</p>
											<h2 className='py-2 py-md-4'>
												Why choose SYNECTIKS Cloud Backup Solution?
											</h2>
											<div className='row'>
												<div className='d-flex flex-column flex-md-row py-2 py-md-4'>
													<div className='w-25 mr-3'>
														<img src={security} alt='security' className='w-100' />
													</div>
													<div>
														<h3> Security: </h3>
														<p>
															Make sure your vendor offers strong security, including
															encryption. It doesn't matter how well you have protected
															your primary systems if your backup systems present an easy
															target for attackers. Any cloud backup service you use needs
															to have the same level of security that your other systems
															have
														</p>
														<ul>
															<li>
																END to END Encryption: In-Flight and Data-At-Rest
																Encryption
															</li>
															<li>AI-based ransomware protection</li>
														</ul>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='py-2 py-md-4'>
													<div>
														<img src={backupStorage} alt='security' className='imgSize' />
													</div>
													<div>
														<h3>Different Modes of Backup Storage available: </h3>
														<p> S3, NAS, ABGP, SAN</p>
													</div>
												</div>
											</div>

											<div className='row'>
												<div className='py-4'>
													<div>
														<img src={price} alt='Affordable Price' className='imgSize' />
													</div>
													<div>
														<h3>Affordable Price:</h3>
														<p>
															Cloud Backup storage as low as $0.018/GB per Month (only
															charged for the storage consumed by backup)
														</p>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='py-4'>
													<div>
														<img
															src={efficientStorage}
															alt='Efficient Backup storage usage'
															className='imgSize'
														/>
													</div>
													<h3>Efficient Backup Storage Usage:</h3>{' '}
													<p>
														De-duplication and Compression technologies optimize backup
														storage capacity.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='d-flex py-4'>
													<div className='w-25 mr-3'>
														<img
															src={geolocation}
															alt='Multi Secure Geo Location'
															className='w-100'
														/>
													</div>
													<div>
														<h3>Multi Secure Geo Locations: </h3>
														<p>
															We at Synectiks we aim for 3-2-1 rule of Thumb to protect
															the Data, which implies that you should always have three
															copies of your data, that you keep it backed up on at least
															two different types of storage media, and that you have at
															least one copy of the data offsite.
															<br />
															Synectiks have different backup Secure Geo locations with
															different power grids to make sure your data is available
															when disaster strike in one location
														</p>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='py-4'>
													<div>
														<img
															src={protection}
															alt='protection for any workload'
															className='w-10'
														/>
														<h3>Protection for any workload:</h3>
													</div>
													<p>
														Protect Windows, Linux, Macs, eight major hypervisors, iOS,
														Android, Complete Office 365 Protection, all Major Applications
														and Databases.
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='py-4'>
													<div>
														<img src={support} alt='support' className='wsprt' />
														<h3>Support:</h3>
													</div>
													<p>
														Follow the Sun model - 24/7/365 days support from both onshore
														and offshore Teams
													</p>
												</div>
											</div>
											<div className='row'>
												<div className='py-4'>
													<div>
														<img src={restore} alt='restore' className='w-15' />
														<h3>Restore:</h3>
													</div>
													<p>Faster Restore up to 500MB/sec</p>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId='3' />
								</TabContent>
							</div>
						</Row>
					</div>
				</div>
				<Helmet>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `
						}}
					/>
				</Helmet>
			</CloudManagedBackupWrapper>
		</Layout>
	);
};

export default PrimaryCloudHostingServices;

const CloudManagedBackupWrapper = styled.div`
	.hybridFixed {
		position: fixed;
		top: 6rem;
		left: 0;
		z-index: 99;
	}
	a#bgL,
	a#bgLL,
	a#bgLLL {
		padding: 0.5rem 1.5rem;
		font-size: 12px;
		height: auto;
		/* background: white !important; */
		text-align: left;
		/* display:flex;
    justify-content: space-between; */
	}
	a#bgL.active,
	a#bgLL.active,
	a#bgLLL.active {
		/* border-right: 5px solid #007cc2; */
		/* background: white !important; */
		text-align: left;
		/* color: #007cc2; */
		border-radius: 0px;
		padding: 0.5rem 1.5rem;
		font-size: 12px;
		height: auto;
		width: 100%;
	}
	.imgHyb {
		margin-right: 25px !important;
		width: 55px !important;
		z-index: 999;
		position: relative;
	}
	.one {
		z-index: 99999;
		/* display: flex; */
		background: white;
		/* box-shadow: 5px 5px 5px lightgray; */
		/* padding: 5px 2px 2px 2px; */
		/* border-bottom: 1px solid lightgrey; */
		/* width:100%; */
		/* background:rgba(0,0,0,0.5); */
	}
	ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
		display: block;
		/* width: 100%;
		color: rgba(0, 0, 0, 0.8);
		height: 10vh;
		font-size:15px;
		cursor: pointer; */
		/* padding-left: 3.2rem; */
	}
	.tabsHide {
		display: none;
	}
	h1 {
		font-size: 1.4rem;
	}
	h2 {
		font-size: 1.3rem;
	}
	h3 {
		font-size: 1.2rem;
	}
	h4 {
		font-size: 1.1rem;
	}
	.hybmt {
		margin-top: 2.5rem;
	}
	/* .nav-link.active {
		background: rgba(0, 0, 0, 0);
	} */
	.logo-btn {
		font-size: 2rem;
		background: white;
		border: none;
		outline: none;
		width: 100vw;
		padding: 0.6rem;
		text-align: left;
		box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.3);
		color: rgba(0, 0, 0, 0.5);
	}

	.logo-btn:hover {
		cursor: pointer;
	}
	.tab-content > .active {
		padding: 2rem 0rem;
	}

	@media (min-width: 576px) {
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.w-85 {
			width: 87vw;
			border: 1px solid var(--textColor);
			background: var(--synectiksWhite);
			justify-content: space-between;
		}
		.w-10 {
			width: 7%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}
		.wsprt {
			width: 10%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}
		.w-15 {
			width: 15%;
			float: left;
			margin-right: 1.7rem;
			margin-bottom: 2rem;
		}
		.imgSize {
			width: 15%;
			float: left;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}

		ul.nav.flex-column {
			position: relative;
			z-index: 99999;
			width: 100%;
			left: 0rem;
		}
		.tabList {
			display: block;
		}
		.tabsHide {
			display: block;
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 14px;
			cursor: pointer;
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 15px;
			cursor: pointer;
		}
		.tab-content > .active {
			padding: 4rem;
			text-align: justify;
		}
		a#bgL,
		a#bgLL,
		a#bgLLL {
			padding: 0.5rem 0.5rem !important;
			text-align: left;
			font-size: 14px;
		}

		a#bgL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		a#bgL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLL.active {
			border-bottom: 5px solid #007cc2;
			position: relative;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		a#bgLLL.active {
			position: relative;
			border-bottom: 5px solid #007cc2;
			/* padding-left: 1rem !important; */
			/* background: bgBlue !important; */
			font-size: 14px;
		}
		a#bgLLL.active:after {
			top: 100%;
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
			border-color: rgba(136, 183, 213, 0);
			border-top-color: var(--synectiksBlue);
			border-width: 20px;
			margin-left: -20px;
		}
		.logo-btn {
			display: none;
		}
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: left;
			margin-right: 2rem;
			margin-bottom: 10px;
		}

		.hbh1 {
			font-size: 2.5rem;
		}
		.hybridFixed {
			display: block;
			height: auto;
			position: sticky;
			top: 16%;
			padding-bottom: 21.4rem;
			padding-top: 2.4rem;
		}
		.nav-item > a.active,
		.nav-item > a:active {
			height: auto;
		}
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.75rem;
		}
		h4 {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 768px) {
		.himage {
			width: 100%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			margin-right: 2rem;
			margin-bottom: 10px;
		}
	}
	@media (min-width: 1024px) {
		.himage {
			width: 50%;
			height: auto;
			box-shadow: 5px 5px 5px #789;
			float: left;
			margin-right: 2rem;
			margin-bottom: 10px;
		}
	}
`;
