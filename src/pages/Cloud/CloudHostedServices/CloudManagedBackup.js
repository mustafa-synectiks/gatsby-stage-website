import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import { FaBars } from 'react-icons/fa';

import '../../../components/layout.css';
import styled from 'styled-components';
import cloudImage from '../../../images/ManagedBackup/CloudBackup.png';
import cloudImaged from '../../../images/ManagedBackup/cloud.png';
import security from '../../../images/ManagedBackup/Security.png';
import geolocation from '../../../images/ManagedBackup/MultipleSecureGeoLocations.png';
import backupStorage from '../../../images/ManagedBackup/BackupStorage.png';
import efficientStorage from '../../../images/ManagedBackup/EfficientBackupStorageUsage.png';
import protection from '../../../images/ManagedBackup/ProtectionforAnyworkload.png';
import restore from '../../../images/ManagedBackup/Restore.png';
import support from '../../../images/ManagedBackup/Support.png';
import price from '../../../images/ManagedBackup/affordableprice.png';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import classnames from 'classnames';

const CloudManagedBackup = () => {
	const [ activeTab, setActiveTab ] = useState('2');
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	const [ isOpen, setNav ] = useState(true);
	const toggleTab = () => {
		setNav((isOpen) => !isOpen);
	};

	return (
		<Layout>
			<CloudManagedBackupWrapper>
				<div className='bg-lightgrey container-fluid'>
					<Row className=''>
						<Navbar color='light' light expand='md'>
							<NavbarToggler onClick={toggleNavbar} className='mr-2' />
							<Collapse isOpen={!collapsed} navbar>
								<Nav navbar className='bgWhite d-flex my-4 mx-auto w-85'>
									<NavItem className='one'>
										<NavLink
											id='bgL'
											className={classnames({ active: activeTab === '1' })}
											onClick={() => {
												toggle('1');
												toggleTab();
											}}>
											UNDERSTANDING THE CLOUD MANAGED BACKUP
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
											GETTING STARTED TO CLOUD MANAGED BACKUP
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
							</Collapse>
						</Navbar>
						<div className='px-1 mb-3 col-md-12'>
							<TabContent activeTab={activeTab}>
								<TabPane tabId='1' />
								<TabPane tabId='2'>
									<div>
										<div className='row pt-4'>
											<img src={cloudImaged} alt='' className='w-sm-100 h-50 mx-auto' />
											{/* <div className='bg-imageCloudManageBackup' /> */}
										</div>
										<h2 className='py-4'>
											Secure, Reliable & Very Affordable Cloud Backup Solution:
										</h2>
										<p>
											At Synectiks, Data Protection is at the topmost priority and is monitored
											with utmost vigilance. Synectiks Cloud Backup with front line innovation
											reinforcement arrangements offers a simple, secure and moderate cloud
											offsite backup needs. You can have your backup offsite with sureness at
											Synectiks Cloud establishment at Preferred Geo Locations. Synectiks backup
											solutions provide exceptional, customizable backup and storage management
											solutions for any system setup: physical servers, virtual machines, PCs,
											business-critical applications, Databases and more.
										</p>
										<h2 className='py-4'>Why choose SYNECTIKS Cloud Backup Solution? </h2>
										<div className='row'>
											<div className='d-flex flex-column align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img src={security} alt='security' className='w-7' />
												</div>
												<div className='w-8vh'>
													<h3> Security: </h3>
													<p>
														Make sure your vendor offers strong security, including
														encryption. It doesn't matter how well you have protected your
														primary systems if your backup systems present an easy target
														for attackers. Any cloud backup service you use needs to have
														the same level of security that your primary systems have
													</p>
													<ul>
														<li>
															END to END Encryption: In-Flight and Data-At-Rest Encryption
														</li>
														<li>AI-based ransomware protection </li>
													</ul>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column  align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img src={backupStorage} alt='security' className='w-7' />
												</div>
												<div className='w-8vh'>
													<h3>Different Modes of Backup Storage available: </h3>
													<p>S3, NAS, SAN, ABGP.</p>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='d-flex flex-column  align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img src={price} alt='Affordable Price' className='w-7' />
												</div>
												<div className='w-8vh'>
													<h3>Affordable Price:</h3>
													<p>
														Cloud Backup storage as low as $0.018/GB per Month (only charged
														for the storage consumed).
													</p>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column  align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img
														src={efficientStorage}
														alt='Efficient Backup storage usage'
														className='w-8'
													/>
												</div>
												<div className='w-8vh'>
													<h3>Efficient Backup Storage Usage:</h3>{' '}
													<p>
														De-duplication and Compression technologies optimize backup
														storage capacity.
													</p>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column  align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img
														src={geolocation}
														alt='Multi Secure Geo Location'
														className='w-7'
													/>
												</div>
												<div className='w-8vh'>
													<h3>Multi Secure Geo Locations: </h3>
													<p>
														We at Synectiks aim for 3-2-1 rule of Thumb to protect the Data,
														which implies that you should always have three copies of your
														data, that you keep it backed up on at least two different types
														of storage media, and that you have at least one copy of the
														data offsite.
														<br />
														Synectiks have different backup Secure Geo locations with
														different power grids to make sure your data is available when
														disaster strike in one location.
													</p>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column  align-items-center flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img
														src={protection}
														alt='protection for any workload'
														className='w-6'
													/>
												</div>
												<div className='w-8vh'>
													<h3>Protection for any workload:</h3>
													<p>
														Protect Windows, Linux, Macs, eight major hypervisors, iOS,
														Android, Complete Office 365 Protection, all Major Applications
														and Databases.
													</p>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column align-items-center  flex-md-row py-2 py-md-4'>
												<div className='w-2vh'>
													<img src={support} alt='support' className='w-6' />
												</div>
												<div className='w-8vh'>
													<h3>Support:</h3>
													<p>
														Follow the Sun model - 24/7/365 days support from both onshore
														and offshore Teams
													</p>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='d-flex flex-column align-items-center  flex-md-row py-2 py-md-4 mx-auto'>
												<div className='w-2vh'>
													<img src={restore} alt='restore' className='w-7' />
												</div>
												<div className='w-8vh'>
													<h3>Fast Recovery:</h3>
													<p>Recover the Data faster, transfer rate up to 1GB/sec </p>
												</div>
											</div>
										</div>
									</div>
								</TabPane>
								<TabPane tabId='3' />
							</TabContent>
						</div>
					</Row>
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

export default CloudManagedBackup;

const CloudManagedBackupWrapper = styled.div`
	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, .5);
		border-color: rgba(0, 0, 0, 0);
	}
	padding-top: 1.5rem;
	h1,
	h2,
	h4,
	h5,
	h6,
	p {
		text-align: left;
	}
	h3 {
		text-align: center;
	}

	.w-sm-100 {
		width: 100%;
	}
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
		text-align: left;
	}
	a#bgL.active,
	a#bgLL.active,
	a#bgLLL.active {
		text-align: left;
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
		background: white;
	}
	ul.tabList.nav.flex-column {
		position: relative;
		z-index: 99999;
		width: 100%;
		left: 0rem;
	}
	.tabList {
		display: block;
		margin-bottom: 4rem;
	}
	.tabsHide {
		display: none;
		margin-bottom: 4rem;
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
		padding: 0rem 2rem;
	}
	.w-6 {
		width: 6rem;
	}
	.w-7 {
		width: 7rem;
	}
	.w-8 {
		width: 8rem;
	}
	.position-relative {
		top: 2rem;
	}
	@media (min-width: 576px) {
		h3 {
			text-align: left;
		}
		.w-sm-100 {
			width: 75%;
		}
		.w-2vh {
			width: 15vw;
		}
		.w-8vh {
			width: 75vw;
		}
		.nav-link.active {
			background: var(--synectiksBlue);
			color: var(--synectiksWhite);
		}
		.w-85 {
			width: 100%;
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
			/* width: 25vw; */
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
			/* padding-left: 3.2rem; */
		}
		ul.nav.flex-column > li > a {
			width: 100%;
			color: rgba(0, 0, 0, 0.8);
			height: 10vh;
			font-size: 15px;
			cursor: pointer;
		}
		.tab-content > .active {
			padding-top: 0rem;
			padding-right: 4rem;
			padding-left: 4rem;
			padding-bottom: 2rem;
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
