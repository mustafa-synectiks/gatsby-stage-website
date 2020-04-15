import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack, MdClose } from 'react-icons/md';
import ScrollAnimation from 'react-animate-on-scroll';
import './layout.css';
import Jumbo from '../images/HomePage/Transformation.png';
import circle2 from '../images/HomePage/Transformation.png';
import circle3 from '../images/HomePage/Solutions.jpg';
import tab1 from '../images/HomePage/Transformation_Icon.png';
import tab2 from '../images/HomePage/OpenPlatform.png';
import tab3 from '../images/HomePage/Solution.png';
import circle1 from '../images/HomePage/Open Platform.jpg';
import Slider1 from '../images/HomePage/Slider1.jpg';
import Slider2 from '../images/HomePage/Slider2.jpg';
import Slider3 from '../images/HomePage/Slider3.jpg';
import aws from '../images/HomePage/aws.png';
import acro from '../images/HomePage/Acronis Logo.png';
import gle from '../images/HomePage/google.png';
import msa from '../images/HomePage/msa.png';
import PoweredBySynectiks from '../images/HomePage/PoweredBySynectiks.png';
import Hexagon from './Home/Hexagon';
import HomeTabs from './Home/HomeTabs';
import Tabs from './Home/Tabs';
import Partners from './Home/Partners';
import GetInTouch from './Home/Getintouch.js';
import SEO from '../components/seo.js';
import SuccessStories from './Home/SuccessStories'
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Jumbotron
} from 'reactstrap';
import classnames from 'classnames';
const Slider = () => {
	const [ activeTab, setActiveTab ] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<HomeWrapper>
		<Helmet>
		<link rel='content' href='https://www.synectiks.com/'/>
		  <meta name="keywords" content="cloud migration strategy,
cloud migration services,
aws cloud migration,
how will you design a aws cloud migration of a legacy system,
legacy application migration to the cloud practicability and methodology,
cloud application migration,
cloud migration,
devops best practices,
devops architecture,
devops maturity model,
devops as a service,
devops culture,
devops goals,
devops workflow,
cncf,
event driven architecture microservices,
microservices deployment architecture,
aws microservices,
java microservices,
monolithic vs microservices,
building microservices: designing fine-grained systems,
software platform,
cloud infrastructure,
cloud infrastructure as a service,
orchestration tools,
infrastructure automation,
legacy application,
transformation services,
cloud business solutions,
serverless deploy,
cloud based architecture,
public private hybrid cloud,
cloud based hosting,
cloud server providers,
cloud solutions companies,
private cloud providers,
solution based,
cloud computing companies to invest in,
cloud infrastructure services,
cloud servers providers,
infrastructure cloud,
microsoft cloud service provider,
"/>
<link rel='canonical' href='https://synectiks.com/'/>
		<meta name='description' content="As an Open Product based Cloud Solution provider, we help enterprises take advantage of public & private cloud and its infinite resources to migrate and modernize their business so that they outperform their peers by becoming truly disruptive." />
		</Helmet>
			<div className='container-fluid'>
				<div className='row'>
					<div id='owl-demo' className='owl-carousel owl-theme'>
						<div className='item'>
							<div className='caption'>
								<h3 className='animated delay-1s slow fadeInRight'>
									Accelerate your migration <br />& modernization Journey
								</h3>
								<p className='animated delay-2s slow fadeInRight'>
									synectiks open xformation Platform and <br />
									deep expertise make your cloud transformation <br />
									safe and agile.
								</p>
							</div>
							<img src={Slider1} alt='Accelerate your migration and modernization journey' />
						</div>
						<div className='item'>
							<div className='caption'>
								<h3 className=''>
									Optimize <br />DevOps transformation
								</h3>
								<p className=''>
									we accelerate organization evolution <br />through open platform and <br />skilled
									resources.
								</p>
								<a
									href='https://synectiks.com/devops-transformation/index.html'
									className='btn btn-primary'>
									Learn More
								</a>
							</div>

							<img src={Slider2} alt='Optimize Devops Transformation' />
						</div>
						<div className='item'>
							<div className='caption'>
								<h3 className=''>
									modernize your business, <br />adopt cloud native <br />microservices architecture
								</h3>
								<p className=''>
									accelerate high performance reliable <br /> application delivery using microservices
									<br />across clouds.
								</p>
								<a href='https://synectiks.com/microservices/index.html' className='btn btn-primary'>
									Learn More
								</a>
							</div>

							<img
								src={Slider3}
								alt='modernize your business, adopt cloud native microservices architecture'
							/>
						</div>
					</div>
					<div id='progbar' />
				</div>
			</div>
			<div className='container-fluid bgBlue px-2 px-md-5 '>
				<div className='row'>
					<div className='col heading1 mt-3 mt-md-0 pt-4 pt-md-0'>
						<h1 className='textWhite text-left px-1 px-md-3'>
							We’ve always done things differently<span className='fa-3x l-0'>...</span>
						</h1>
						<div className='circleFlex'>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle1} alt='open platform' />
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle2} alt='transformation' />
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='fadeInUp'>
								<div className='circle'>
									<img src={circle3} alt='solutions' />
								</div>
							</ScrollAnimation>
						</div>
						<div className='circletext px-1 px-md-3'>
							<p className='text-light'>
								As an Open Product based Cloud Solution provider, we help enterprises take advantage of
								public & private cloud and its infinite resources to migrate and modernize their
								business so that they outperform their peers by becoming truly disruptive.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='bgMain'>
				<div className='container-fluid bgWhite pt-0 px-0 pb-3 pb-md-0 p-md-5'>
					<div className='tabsHeading'>
						<h2 className='py-3'>Area Of Expertise For Outcome Based Solution Offerings</h2>
					</div>
					<HomeTabs />
					<Tabs />
				</div>
				<div className='container-fluid bgOrange px-3 px-md-5 pt-0 pb-0 pt-md-2 pb-md-4'>
					<h2 className='text-capitalize textWhite pb-0 pb-md-3 text-center'>Our Partners</h2>
					<Partners />
				</div>
	<div>
	{/* <SuccessStories/> */}
	</div>
				<div>
					<GetInTouch />
				</div>
				<div className=''>
					<div className='text-center fixed-bottom Footerbg prvtpolicy'>
						<p className='mb-1 pt-2 px-3 fsize08'>
							We use cookies to make sure you have better experience on our website. Read about how we use
							cookies in our
							<a className='navfont Footerbg' href='/privacy-policy/index.html'>
								&nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
							</a>

						</p>
						<MdClose className='closeBtn' type='submit' id='hide'/>
					</div>
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
		</HomeWrapper>
	);
};

export default Slider;

const HomeWrapper = styled.section`{
.navfont{
	position:relative;
	top:0px;
	font-size:8px;
}

.fsize08{
	font-size:8px;
	position:relative;
	top:5px;
}
.prvtpolicy{
	height:45px;
	line-height: 10px;
	margin-top:0px;
	padding: 0px 30px;
.closeBtn{
 position: absolute;
    top: 20%;
    right: 2%;
    font-size: 1.4rem;
}
}
h1{
	font-size: 1.875rem;
}

#collapseOne{
	p{
		text-align:left;
	}
}
#collapseTwo{
	p{
		text-align:left;
	}
}
#collapseThree{
	p{
		text-align:left;
	}
}
.circletext{
	p{
		text-align: center;
	}
}
width: 100%;
.partners-logo{
	display: flex;
	flex-direction:column;
}

	h3{
		font-size: 1.2rem;
		text-align: left;
	}
	p{
		text-align: left;
		font-size: 1rem;
		/* min-height:75px;
		max-height:75px; */
		margin-bottom: 0rem;
	}
}
.h70vh{
	height:52vh;
}



.heading1 {
	h2{
	text-align: left;
	font-size:1.8rem;
	line-height: 44px;
}

p{
	font-size: 1rem;
	line-height: 28px;
	text-align: center;
	margin-top:1rem;
	margin-bottom:1rem;
	word-break: keep-all;
	text-rendering: optimizeLegibility;
}
}
.tabsHeading {
	h2{
		font-size:1.8rem;
		text-align: center;
		padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 10px;
		padding-right: 10px;
		background: white;
		margin-bottom:0rem;
	}
}
.circleFlex{
	display: flex;
	flex-direction: column;
	.circle {
		width:100%;
			border-radius: 50%;
		img{
			width:100%;
			border-radius: 60%;
			box-shadow: 0px 0px 0px 2px var(	--synectiksWhite);
			margin-top: 1rem;
		}
	}
}

.tabsFlex{
	display:none;
}
	.Homecard-shadow {
			width:auto;
			/* padding: 1.5rem 1.5rem 0rem 1.5rem; */
			/* border-bottom: 5rem solid white !important; */
			border-radius: 25px;
			-webkit-border-radius: 25px  ;
			-moz-border-radius: 25px ;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px ;
			padding-top:1rem;
			cursor: pointer;
		}
.ct1,.ct2,.ct3{
	width:0rem;
	height:0rem;
	padding:0;
	img{
		display:none;
	}
}


	background: var(--bgMain);
	.border {
		border: 1px solid var(--synectiksBlue) !important;
	}

	.JumboHeight {
		width: 100vw;
		height: 25vh;
	}
	.tab-content {
		padding: 0px;
  border: 0px solid white;
		border-radius: 25px;
		display:none;
}
	}
}

	@media screen and  (min-width: 576px) {

		.navfont,.fsize08{
	font-size:16px;
	position: relative;
    top: 18%;
}
		.prvtpolicy{
	height:40px;
	padding: 0;
.closeBtn{
    position: absolute;
    top: 20%;
    right: 2%;
    font-size: 1.4rem;
}
}

h1{
	font-size: 3.2rem;
}

		.circletext{
	 p{
		text-align: left;
	}
}



		.partners-logo{
	display: flex;
	flex-direction:row;
}

		.heading1{

	h2 {
		font-family: montserrat, sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 2.56rem;
		line-height: 44px;
		letter-spacing: normal;
		margin:1.5rem 0rem;
		background:transparent;
}
p{
	font-size: 1rem;
	line-height: 28px;
	text-align: left;
	margin-top:4rem;
	margin-bottom:3rem;
}
}
.tabsFlex{
	display:none;
}

.tab-content {
		padding: 0px;
  border: 0px solid white;
		border-radius: 25px;
		display:block;
}
.tabsHeading{
	h2{
		font-family: montserrat, sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 2.56rem;
		line-height: 44px;
		letter-spacing: normal;
		text-align: center;
		padding: 0rem;
		background: rgba(255,255,255,0);
		margin-bottom:2rem
	}
}
.circleFlex{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.circle{
			width:16rem;
			height:16rem;
			border-radius: 50%;
			img{
				border-radius: 60%;
				box-shadow: 0px 0px 0px 2px var(	--synectiksWhite);
			}
		}
	}
}

		.h46{
			height: 46vh;
		}
.ct1,.ct2,.ct3{
    padding: 3rem;
    border-radius: 50%;
    width: 10rem;
    margin: 0 auto;
				height: 10rem;
				img{
					display:block
				}
}


.card-body {
	padding :1rem 0rem 0rem 0rem;
	h2 {
	font-family: montserrat;
	font-size: 1.5rem;
	color: rgba(0, 0, 0, 1);
	font-weight: 600;
	font-style: normal;
 }
}
.pointerDown {
	transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	font-size: 4rem;
	margin-top: 0rem;
	text-align:center;
}

		.fw300 {
			font-weight: 300;
		}
		background: var(--bgMain);


		p {
			word-break: break-word;
		}
		.ml-7 {
			padding-left: 8rem;
			padding-right: 8rem;
		}
		.solutionImage {
			width: 90%;
		}

		/* OWL Carousel v1 */
		.owl-pagination {
			display: flex;
			justify-
			content: space-evenly;
			flex-direction: column;
			align-items: flex-end;
			position: absolute;
			right: 4%;
			top: 40%;
		}
		.owl-theme .owl-controls .owl-page span {
			display: block;
			width: 12px;
			height: 12px;
			margin: 5px 7px;
			filter: Alpha(Opacity=50);
			opacity: 1;
			-webkit-border-radius: 20px;
			-moz-border-radius: 20px;
			border-radius: 20px;
			background: var(--synectiksWhite);
		}
		.owl-theme .owl-controls .owl-page.active span,
		.owl-theme .owl-controls.clickable .owl-page:hover span {
			background: var(--synectiksOrange);
		}
		#owl-demo .item{
			position:relative;
			.caption{
				position: absolute;
					width:auto;
				top:25%;
				left:4%;
				h3{
				color: white;
				text-align: left;
				text-transform:capitalize;
				padding-bottom:14px;
				line-height: 1.4;
				font-size: 1.9rem;
				font-weight: 200;
			}
				h3::after{
					content:'';
					display: block;
					width:9rem;
					height:0.6rem;
					position:absolute;
					background: var(--synectiksBlue);
					margin-top: 5px;
			}
			p{
				text-transform:capitalize;
				line-height: 1.6;
				color: white;
				text-align: left;
   	word-spacing: normal;
    font-size: 1.2rem;
    letter-spacing: 1px;
			}
			}
		}
		#owl-demo .item img {
			display: block;
			width: 100%;
			height: 460px;
			margin-top: 15px;
		}
		ul {
			list-style: none;
		}
		.showul{
			list-style: disc;
		}
		#bar {
			width: 0%;
			max-width: 100%;
			height: 8px;
			background: var(--synectiksOrange);
			margin-top: -0.7rem;
		}

		/* OWL Carousel v1 */
		.fa1x {
			font-size: 1.7rem;
		}
		.border {
			border: 1px solid var(--synectiksBlue) !important;
		}

		.JumboHeight {
			width: 100vw;
			height: auto;
			margin-top: -2px;
		}
		.nav-item > a.active,
		.nav-item > a:active {
			background: rgba(255, 255, 255, 1) !important;
			border-color: var(--synectiksBlue);
			border-bottom: 1.5rem solid white;
			height: auto;
			border-radius: 25px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
			padding: 0rem;
		}

		.nav-tabs .nav-link:focus,
		.nav-tabs .nav-link:hover {
			border-color: inherit;
		}
		.nav-tabs {
			border-bottom: 0px solid rgba(255, 255, 255, 0);
		}
		.card {
			border: 1px solid rgba(0, 0, 0, 0);
		}

.borderHomePageTab2{
	border: 4px solid var(--synectiksRed);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
}
.borderHomePageTab3{
	border: 4px solid var(--synectiksBlue);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
			border-radius: 25px;
    border-top-right-radius: 0;
}
		.borderHomePageTab1 {
			border: 4px solid var(--synectiksOrange);
			padding: 1rem;
			position: relative;
			z-index: 0;
			border-radius: 25px;
			border-radius: 25px;
    border-top-left-radius: 0;
		}

		.Homecard-shadow {
			width:18rem;
			border-radius: 25px;
			-webkit-border-radius: 25px  ;
			-moz-border-radius: 25px ;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px ;
			padding-top:1rem;
			cursor: pointer;
		}
		#tab1,#tab2,#tab3 {
			padding: 1.5rem 1.5rem 0rem 1.5rem;
			box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
			/* border-bottom: 5rem solid white !important; */
			border-radius: 25px;
			-webkit-border-radius: 25px ;
			-moz-border-radius: 25px;
			-ms-border-radius: 25px ;
			-o-border-radius: 25px;
			cursor: pointer;
			margin: 0;
			/* margin: 0 20px 0 0; */
   padding: 0;
		}
a#tab1:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}
a#tab2:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}
a#tab3:not(.active) {
			border: 4px solid rgba(255,255,255,1);
				border-radius: 30px;
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			-ms-border-radius: 30px ;
			-o-border-radius: 30px;
}

		 a#tab1.active h2{
color:var(--synectiksOrange);
			}
		 a#tab2.active h2{
color:var(--synectiksRed);
			}
		 a#tab3.active h2{
color:var(--synectiksBlue);
			}
		 a#tab1.active{
			 border: 4px solid var(--synectiksOrange);
    color: var(--synectiksOrange);
    position: relative;
    z-index: 999;
    /* left: -20px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
		}
		 a#tab2.active{
			border: 4px solid var(--synectiksRed);
    color: var(--synectiksRed);
    position: relative;
    z-index: 999;
    /* left: 0px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
				}
		a#tab3.active{
			border: 4px solid var(--synectiksBlue);
    color: var(--synectiksBlue);
    position: relative;
    z-index: 999;
    /* right: -20px; */
    top: 0%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 0px 0px transparent;
    margin-bottom: -1%;
    height: 22rem;
    border-bottom: 0px;
					}
		.vdoSize {
			width: 50vw;
			height: 65vh;
			margin-top: 3rem;
			margin-bottom: 4.5rem;
		}

		/* Hexagons */

#categories{
  overflow:hidden;
		width:100%;
		transform: rotate(30deg);
  margin-bottom: 3rem;
  /* margin:0 auto; */
}
.clr:after{
  content:"";
  display:block;
  clear:both;
}
#categories li{
  position:relative;
  list-style-type:none;
  width:27.85714285714286%; /* = (100-2.5) / 3.5 */
  padding-bottom: 32.16760145166612%; /* =  width /0.866 */
  float:left;
  overflow:hidden;
  visibility:hidden;

  -webkit-transform: rotate(-60deg) skewY(30deg);
  -ms-transform: rotate(-60deg) skewY(30deg);
  transform: rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(3n+2){
  margin:0 1%;
}
#categories li:nth-child(6n+4){
  margin-left:0%;
}
#categories li:nth-child(6n+4), #categories li:nth-child(6n+5), #categories li:nth-child(6n+6) {
	margin-top: -6.9285714285%;
  margin-bottom: -6.9285714285%;

  -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  transform: translateX(50%) rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(6n+4):last-child, #categories li:nth-child(6n+5):last-child, #categories li:nth-child(6n+6):last-child{
  margin-bottom:0%;
}
#categories li *{
  position:absolute;
  visibility:visible;
}
#categories li > div{
  width:100%;
  height:100%;
  text-align:center;
  color:#fff;
  overflow:hidden;

  -webkit-transform: skewY(-30deg) rotate(60deg);
  -ms-transform: skewY(-30deg) rotate(60deg);
  transform: skewY(-30deg) rotate(60deg);

	-webkit-backface-visibility:hidden;

}


#categories div h1, #categories div p{
  width:100%;
  padding:0 5%;
  background-color:#008080; background-color: rgba(0, 128, 128, 0.8);
  font-family: 'Raleway', sans-serif;

  -webkit-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
  -ms-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
  transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
}
#categories li h1{
  bottom:110%;
  font-style:italic;
  font-weight:normal;
  font-size:1.5em;
  padding-top:100%;
  padding-bottom:100%;
}
#categories li h1:after{
	content:'';
  display:block;
  position:absolute;
  bottom:-1px; left:45%;
  width:10%;
  text-align:center;
  z-index:1;
  border-bottom:2px solid #fff;
}
#categories li p{
	padding-top:50%;
	top:110%;
	padding-bottom:50%;
}


/* HOVER EFFECT  */

#categories li div:hover h1 {
  bottom:50%;
  padding-bottom:10%;
}

#categories li div:hover p{
  top:50%;
  padding-top:10%;
}
#fork{
  position:fixed;
  top:0;
  left:0;
  color:#000;
  text-decoration:none;
  border:1px solid #000;
  padding:.5em .7em;
  margin:1%;
  transition: color .5s;
  overflow:hidden;
}
#fork:before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 130%; height: 100%;
  background: #000;
  z-index: -1;
  transform-origin:0 0 ;
  transform:translateX(-100%) skewX(-45deg);
  transition: transform .5s;
}
#fork:hover {
  color: #fff;
}
#fork:hover:before {
  transform: translateX(0) skewX(-45deg);
}
		/* Hexagons */
	}
	/*  */
	/* STARTING */
	/* TAB VERSION STYLING */
	/*  */
	/*  */
	}
	@media screen and (min-width: 768px) {
		background: var(--bgMain);
		.tabsFlex{
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: space-between;
}
.circleFlex{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	.circle{
			width:20rem;
			height:20rem;
			border-radius: 50%;
			img{
				border-radius: 60%;
				box-shadow: 0px 0px 0px 2px var(	--synectiksWhite);
			}
		}
	}
}
	}
`;
