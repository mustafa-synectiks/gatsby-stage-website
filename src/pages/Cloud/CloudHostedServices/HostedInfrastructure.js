import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import HostedInfra from '../../../images/HostedInfra.png';
import CommonCloud from '../../../images/CloudCommon.png';
import '../../../components/layout.css';
import SEO from '../../../components/seo.js';
const wid = {
	width: '91%'
};

export class HostedInfrastructure extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			fields: {},
			errors: {}
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if (!fields['email']) {
			formIsValid = false;
			errors['email'] = 'Cannot be empty';
		}

		if (typeof fields['email'] !== 'undefined') {
			let lastAtPos = fields['email'].lastIndexOf('@');
			let lastDotPos = fields['email'].lastIndexOf('.');

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					fields['email'].indexOf('@@') === -1 &&
					lastDotPos > 2 &&
					fields['email'].length - lastDotPos > 2
				)
			) {
				formIsValid = false;
				errors['email'] = 'Email is not valid';
			}
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	contactSubmit(e) {
		e.preventDefault();
		if (this.handleValidation()) {
			alert('Form submitted');
		} else {
			alert('Form has errors.');
		}
	}

	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}

	render() {
		return (
			<Layout>
				<SEO title='Hosted Infra Structure' />
				<div className='bg-lightgrey container pt-2'>
					<div className='text-black w-100 mt-3 py-2 flex-col d-flex text-justify'>
						<div className='w-100'>
							<img src={HostedInfra} width='100%' alt='Hosted Infrastructure' />{' '}
						</div>

						<div className='w-100  pl-3 pr-3 text-black'>
							<h2>Hosted Infrastructure</h2>
							<p className='lineHeight-24'>
								SYNECTIKS Infrastructure as a Service (IaaS) provides computing, networking and storage
								services with a high degree of control, security and simplicity.
							</p>
							<p>
								Support your mission-critical applications and workloads with instant and scalable
								infrastructure. With SYNECTIKS IaaS, you can focus on your business needs instead of
								spending the time and money it takes to plan, procure, secure and manage the right
								infrastructure to meet your application demands.
							</p>
							<h4 className='my-3'>Quickly Provision Infrastructure for all Your Workloads</h4>
							<p className='lineHeight-24'>
								Whether your mission-critical applications powered by Linux, Windows Server, SAP or
								Oracle, SYNECTIKS offers support for these and other workloads, including your favorite
								Open Source technologies, choose from a wide variety of virtual machine sizes and
								storage performance classes configured for specific types of workloads.
							</p>
						</div>
					</div>

					<div className='w-100 text-black'>
						<h4 className='my-3'>Let SYNECTIKS keep Your Data Secure</h4>
						<p className='lineHeight-24'>
							SYNECTIKS safeguards data in facilities that are protected by industry-leading physical
							security systems and are compliant with a comprehensive portfolio of standards and
							regulations.
						</p>
						<h4 className='my-3'>Reduce and Optimize Infrastructure</h4>
						<p className='lineHeight-24'>
							Deliver the availability, security and performance your workloads require at a fraction of
							the cost of running them on-premises. Pay for only the infrastructure you use for virtual
							machines, reduce expenses for predictable workloads with SYNECTIKS Reserved VM Instances.
						</p>
						<p className='lineHeight-24'>
							<a className='navlink navfont noLine text-logoblue cursPoint' onClick={this.toggle}>
								<small>Contact&nbsp;Us&nbsp;</small>
							</a>
							to learn more about SYNECTIKS Infrastructure as a Service.
							<br />{' '}
						</p>
					</div>

					<div className=''>
						<Modal isOpen={this.state.modal} toggle={this.toggle}>
							<ModalHeader className='bg-lightgrey' toggle={this.toggle}>
								Contact Us
							</ModalHeader>
							<ModalBody className='bg-lightgrey brdr-btm-030'>
								<ModalContact />
							</ModalBody>
						</Modal>
					</div>
					<div className='container'>
						<div className='d-flex justify-content-around align-items-center mt-5 flex-col' />
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
			</Layout>
		);
	}
}

export default HostedInfrastructure;
