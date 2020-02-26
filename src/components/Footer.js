import React from 'react';
import styled from 'styled-components';
import Social from './social-icons';
import logo from '../images/Synectiks Logo/synectiks-text-logo.png';
import './layout.css';
export class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				{/* <div className='text-center text-dark fixed-bottom bgFooter content'>
					<button className='bgFooter text-dark  fa fa-times float-right' type='submit' id='hide' />
					<p className='mb-1 pt-2 px-3 fsize08'>
						We use cookies for advertising, social media and analytics purposes. Read about how we use
						cookies in our updated
						<a className=' navfont  text-dark' href='/privacypolicy/index.html'>
							<small className='fsize07'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
						If you continue to use this site, you consent to our use of cookies and our
						<a className=' navfont  text-dark' href='/privacypolicy/index.html'>
							<small className='fsize07'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</small>
						</a>
					</p>
				</div> */}

				<div className='d-sm-flex justify-content-sm-between d-md-flex  justify-content-md-center d-lg-flex justify-content-lg-center d-xl-flex justify-content-xl-center bgFooter px-2 pt-2 px-md-5 pt-md-5'>
					<div className='w-35vw mx-0 ml-md-4 px-2 px-md-0'>
						{/* <h3 className='text-light text-capitalize'>Synectiks</h3> */}
						<a href='/'>
							<img src={logo} alt='' className='w-65 mt-0 mt-md-2' />
						</a>
						{/* <h4 className='text-light text-capitalize'>U.S.A</h4> */}
						<p className='text-light mt-0 mt-md-3'>
							We are a team of highly qualified and experienced professionals from various fields who are
							determined and dedicated to delivering world class professional services to our patrons.
						</p>
					</div>
					<div className='w-30vw mx-0 ml-md-5 pl-md-2 pl-2'>
						<div>
							<h3 className='text-light text-capitalize'>Menu</h3>
							<ul className='text-light text-capitalize p-0'>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										What We Do
									</a>
								</li>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										Migration & Modernization
									</a>
								</li>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										Solutions
									</a>
								</li>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										Services
									</a>
								</li>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										Resources
									</a>
								</li>
								<li>
									<a href='/CloudManagedBackup/index.html' className='text-light'>
										Company
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='w-30vw mx-0 ml-md-4  px-2 px-md-0'>
						<div>
							<h3 className='text-light text-capitalize'>Terms</h3>
							<ul className='text-light text-capitalize p-0'>
								<li>
									<a href='https://synectiks.com/privacypolicy/index.html' className='text-light'>
										Privacy Policy
									</a>
								</li>
								<li>
									<a href='/terms/index.html' className='text-light'>
										Terms & Conditions
									</a>{' '}
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-light  text-capitalize'>Social</h3>
							<div className='d-flex flex-column'>
								{Social.map((item, index) => {
									return (
										<a
											key={index}
											href={item.url}
											target='_blank'
											rel='noopener noreferrer'
											className='text-light text-capitalize d-flex align-content-center mb-2'>
											<span className='text-warning'>{item.icon}</span>
											<span className='ml-3 text-capitalize m5t'>{item.text}</span>
										</a>
									);
								})}
							</div>
						</div>
					</div>
					<div className='w-35vw mx-0 ml-md-n3  px-2 px-md-0'>
						<h3 className='text-light text-capitalize'>Address</h3>
						{/* <a href='/'>
							<img src={logo} alt='' className='w-65 mt-0 mt-md-2' />
						</a> */}
						{/* <h4 className='text-light text-capitalize'>U.S.A</h4> */}
						<p className='text-light mt-0 mt-md-3'>300 Alexander Park Drive, Suite 215,</p>
						<p className='text-light'> Princeton, NJ 08540 </p>
						<p className='text-light'>Sales: +1 (609) 608-0429 X 102 </p>
						<p className='text-light'>Office: +1 (609) 608-0429</p>
						<h3 className='text-light text-capitalize py-3'>
							privacy &copy; 2020
							{/* <a href='https://synectiks.com/privacypolicy/index.html' className='text-light'>
								privacy &copy; 2019
							</a> */}
						</h3>
					</div>
				</div>
			</FooterWrapper>
		);
	}
}

export default Footer;

const FooterWrapper = styled.div`
	.w-65 {
		width: 50%;
	}
	background: var(--textColor);
	p {
		font-size: 1rem;
		line-height: 2.3;
		margin-bottom: 0px;
		font-style: normal;
		font-weight: 200;
	}
	ul {
		line-height: 2.3;
		list-style: none;
		font-size: 1rem;
	}
	a {
		font-weight: 300;
	}
	.m5t {
		margin-top: 5px;
	}
	@media (min-width: 576px) {
		.w-65 {
			width: 55%;
		}
		.w-35vw {
			width: 40vw;
		}
		.w-30vw {
			width: 30vw;
		}
		background: var(--textColor);
		a {
			font-weight: 300;
		}
		p {
			font-size: 1rem;
			line-height: 2.3;
			margin-bottom: 0px;
			font-style: normal;
			font-weight: 200;
		}
		ul {
			line-height: 2.3;
			list-style: none;
			font-size: 1rem;
		}
	}
`;
