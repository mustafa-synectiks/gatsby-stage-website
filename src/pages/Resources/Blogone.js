import React, {useEffect} from 'react';
import Layout from '../../components/layout.js';
import { Helmet } from 'react-helmet';
import BlogBreadCrumbs from '../../components/Home/BlogBreadcrumbs.js';
import styled from 'styled-components';
import blog1 from '../../images/Blog/0.png';

const BlogOne = () => {
	useEffect(() => {
		// var $ = window.$;
		// $("#subscribeform").submit(function(e) {
    // e.preventDefault();
		function submitForm() {
			var subsform = document.getElementByName('subscribeform')[0];
			subsform.submit();
			subsform.reset();
			return false;
		}
});

	return (
		<Layout>
			<BlogWrapper>
				<BlogBreadCrumbs
					title='Home'
					casetitle='Resources'
					subtitle='Blogs'
					pageTitle='Microservices Transformation'
				/>
				<h1>Microservices Transformation</h1>
				<img src={blog1} alt='' className='my-3 my-md-4' />
				<div className='d-flex flex-column flex-md-row'>
					<div className='textWrapper w75'>
						<h3>
							Five Q's you may need to find an answer for a Large Scale Micro-Services transformation
							journey.
						</h3>
						<div>
							<p>
								Most of the organizations today understand the essence of Micro-Services transformation.
								Everybody prefers to address the complexity in code base, at the cost of solving
								complexity in interaction. My views on most important five questions that need to be
								answered when implementing large scale #transformation are:
							</p>
							<h3>1) Management Complexity of Container Clusters Across Clouds & Locations</h3>
							<p>
								When you achieve speed in transformation, you would land up spawning many a container
								cluster across clouds / hub/ edge, how do you manage those clusters control plane
								effectively, provision de-provision effectively, serve agility in provisioning clusters
								across organization which is secure.
							</p>
							<h3>2) CapEx Involved in Management Control Plane</h3>
							<p>
								How do you reduce your CapEx for many a control plane for many a container cluster. When
								you trigger the transformation, you will spawn a another network of container clusters
								itself which looks like another physical network like routers/switches etc. How do you
								effectively manage that container cluster network. While cloud providers gives you the
								container cluster without the overhead of control plane, you will try to have single
								control plane for your on-premise clusters and reduce the CapEx for management plane.
							</p>
							<h3>3)Manage Container Clusters in Hybrid IT</h3>
							<p>
								To balance speed/ security / cost, large organizations are adopting hybrid IT. In hybrid
								environment, how effectively we manage many a cluster floated in hybrid environment from
								a single control plane. We need to find an answer also on how to manage effectively the
								cluster whose hardware resources are pooled across clouds
							</p>
							<h3>
								4) Manage Continuous Security, Continuous Delivery, Continuous compliance across
								Clusters
							</h3>
							<p>
								How to architect your Continuous Security, Continuous delivery, Continuous Compliance so
								that when you roll out a fully containerized ecosystem across your organizations, you
								stay safe.
							</p>
							<h3>5) People</h3>
							<p>
								Most importantly how to align your team skills to operate in a environment that is much
								hybrid, hardware/os /operation agnostics and largely uses hardware aggregation and
								centralized automation's to deliver speed keeping in mind the stringent requirement of
								security, compliance and regulations today.
							</p>
							<hr />
							<p>
								These are totally my own views, based on what i saw the customers experience who has
								started and progressed in their micro-services transformation journey. I thought of
								sharing those five points so that it helps your micro-services transformation journey. I
								would be happy to discuss my findings when i started querying those five aspects.
							</p>
						</div>
					</div>
					<div className='formWrapper w25'>
						<form name='subscribeform' id='subscribeform' action='' onsubmit='submitForm();'>
							<h3 className='text-center'>Subscribe</h3>
							<input
								type='email'
								placeholder='Enter Your Email Address'
								name='subscribemail'
								id='subscribemail'
								className='w-100'
								required
							/>
							<input
								type='submit'
								value='SUBSCRIBE'
								name='subscribe'
								id='subscribe'
								className='btn btn-primary my-3 w-100 bold'
							/>
						</form>
					</div>
				</div>
			</BlogWrapper>
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
				<script
					dangerouslySetInnerHTML={{
						__html: `
var vvfc_BaseURL = (("https:" == document.location.protocol) ? "https://forms.id-visitors.com/FrontEndWeb/" : "http://forms.id-visitors.com/FrontEndWeb/");
var vvfc_ServiceURL = vvfc_BaseURL + 'ProcessFormCapture.aspx';
var vvfc_ScriptURL = vvfc_BaseURL + 'Scripts/vvfcscript.js';
var trackedForms = ['subscribeform'];
var options = { accountId: 'q00IB13hyn', serviceURL: vvfc_ServiceURL, pollInterval: 5000,
forms: [{ id: 'subscribeform', ignoreFields: ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION'], accountFormId: '5e805a27405bf60934b5eddb' } ]};
(function (src) {
var vvscript = document.createElement('script');
vvscript.type = 'text/javascript';
vvscript.async = true; vvscript.src = src;
var scriptElements = document.getElementsByTagName('script');
var lastScriptElement = scriptElements[scriptElements.length - 1];
lastScriptElement.parentNode.insertBefore(vvscript, lastScriptElement.nextSibling);
})(vvfc_ScriptURL);
        `
					}}
				/>
			</Helmet>
		</Layout>
	);
};


export default BlogOne;

const BlogWrapper = styled.div`
	 {
		padding: 2rem 1rem;
		text-align: left;
		.w75,
		.w25 {
			width: 100%;
		}
	}
	@media (min-width: 576px) {
		padding: 3rem 4rem;
		text-align: justify;
		h1,
		h2,
		h3 {
			text-align: left;
		}
		.w75 {
			width: 75vw;
		}
		.w25 {
			width: 25vw;
		}
	}
`;
