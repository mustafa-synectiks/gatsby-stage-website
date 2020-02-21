import * as React from 'react';
import { Helmet } from 'react-helmet';
// import { Formik } from "formik"
// import * as Yup from "yup"
// import NiceToMeet from "../../images/NiceToMeet.png"
import Layout from '../../components/layout';
import '../../components/layout.css';
import ContactM from '../../components/ContactMe';
import SEO from '../../components/seo.js';

const s = {
	textAlign: 'center',
	marginTop: '2rem',
	marginBottom: '2rem'
};
const h = {
	paddingTop: '2rem'
};
export class Contact extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title='Ask For Demo' />
				<div class='container'>
					<div style={s}>
						<h1 style={h}>Ask For Demo</h1>
					</div>
					<ContactM />
				</div>
			</Layout>
		);
	}
}

export default Contact;
