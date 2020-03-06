import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout.js';
import BreadCrumbs from '../../components/Home/Breadcrumbs.js';
import SEO from '../../components/seo.js';

const VisualForm = () => {
	useEffect(() => {
		var $ = window.$;
		var validationArr = {
			f: false,
			l: false,
			c: false,
			// mb: false,
			ml: false,
			src: false,
			inds: false
		};

		function t() {
			let t = document.getElementById('des');
			let fnt = document.getElementsByClassName('texterror');
			if (t.value.length === 0) {
				fnt[0].innerHTML = 'Please Enter Your Description';
				validationArr['inds'] = false;
				enableDisableButton();
			} else {
				fnt[0].innerHTML = '';
				validationArr['inds'] = true;
				enableDisableButton();
			}
		}
		function f() {
			let f = document.getElementById('first_name');
			let fn = document.getElementsByClassName('error');
			if (f.value.length === 0) {
				fn[0].innerHTML = 'Please Enter Your First Name';
				validationArr['f'] = false;
				enableDisableButton();
			} else if (f.value.length < 3) {
				fn[0].innerHTML = 'Please Enter Your Correct Name';
				validationArr['f'] = false;
				enableDisableButton();
			} else {
				fn[0].innerHTML = '';
				validationArr['f'] = true;
				enableDisableButton();
			}
		}
		function l() {
			let l = document.getElementById('last_name');
			let fn = document.getElementsByClassName('error');
			if (l.value.length === 0) {
				fn[1].innerHTML = 'Please Enter Your last Name';
				validationArr['l'] = false;
				enableDisableButton();
			} else if (l.value.length < 3) {
				fn[1].innerHTML = 'Please Enter Your Correct Name';
				validationArr['l'] = false;
				enableDisableButton();
			} else {
				fn[1].innerHTML = '';
				validationArr['l'] = true;
				enableDisableButton();
			}
		}

		function c() {
			let c = document.getElementById('company');
			let fn = document.getElementsByClassName('errorc');
			if (c.value.length === 0) {
				fn[0].innerHTML = 'Please Enter Your Company Name';
				validationArr['c'] = false;
				enableDisableButton();
			} else if (c.value.length < 2) {
				fn[0].innerHTML = 'Please Enter Correct Company Name';
				validationArr['c'] = false;
				enableDisableButton();
			} else {
				fn[0].innerHTML = '';
				validationArr['c'] = true;
				enableDisableButton();
			}
		}

		function ct() {
			let ct = document.getElementById('city');
			let fn = document.getElementsByClassName('errorct');
			if (ct.value.length === 0) {
				fn[0].innerHTML = 'Please Enter Your Country Name';
				// enableDisableButton();
			} else if (ct.value.length < 3) {
				fn[0].innerHTML = 'Please Enter Correct Country Name';
				// enableDisableButton();
			} else {
				fn[0].innerHTML = '';
				// enableDisableButton();
			}
		}

		function ml(vEmail) {
			let ml = document.getElementById('email');
			let fn = document.getElementsByClassName('errorml');
			let valEmail = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,3})?$/;
			if (!vEmail.match(valEmail)) {
				fn[0].innerHTML = 'Please Enter Corporate Email Id';
				validationArr['ml'] = false;
				enableDisableButton();
			} else {
				if (ml.value.length === 0) {
					fn[0].innerHTML = 'Please Enter Email Id';
					validationArr['ml'] = false;
					enableDisableButton();
				} else {
					fn[0].innerHTML = '';
					validationArr['ml'] = true;
					enableDisableButton();
				}
			}
		}

		function src() {
			let sl = document.getElementById('lead_source');
			let fn = document.getElementsByClassName('errorms');
			let ds = document.getElementsByClassName('src');
			if (sl.value == 'none') {
				fn[0].innerHTML = 'Please Select Your Country';
				if (ds.length > 0) {
					ds[0].style.display = 'none';
				}
				validationArr['src'] = false;
				enableDisableButton();
			} else if (sl.value === 'Othersource') {
				if (ds.length > 0) {
					ds[0].style.display = 'block';
					ds[0].style.position = 'relative';
					ds[0].style.left = '-5%';
					ds[0].style.top = '0';
				}
				fn[0].innerHTML = '';
				validationArr['src'] = false;
				enableDisableButton();
			} else {
				fn[0].innerHTML = '';
				validationArr['src'] = true;
				enableDisableButton();
			}
		}

		function inds() {
			let ind = document.getElementById('industry');
			let fn = document.getElementsByClassName('errormss');
			let ds = document.getElementsByClassName('inds');
			if (ind.value == 'none') {
				fn[0].innerHTML = 'Please Select any One Service';
				ds[0].style.display = 'none';
				validationArr['inds'] = false;
				enableDisableButton();
			} else if (ind.value === 'Others') {
				ds[0].style.display = 'block';
				ds[0].style.position = 'relative';
				ds[0].style.left = '-5%';
				ds[0].style.top = '0';
				fn[0].innerHTML = '';
				validationArr['inds'] = false;
				document.getElementById('des').value = '';
				document.getElementById('iText').innerHTML = 'Please Enter Your Description!';
				enableDisableButton();
			} else if (
				ind.value === 'Cloud' ||
				ind.value === 'Foundation' ||
				ind.value === 'EnterpriseTransformation' ||
				ind.value === 'MigrationDeployment' ||
				ind.value === 'Optimization' ||
				ind.value === 'Operations' ||
				ind.value === 'HostedInfrastructure' ||
				ind.value === 'backupDRaas' ||
				ind.value === 'ManagedServices' ||
				ind.value === 'Office'
			) {
				fn[0].innerHTML = '';
				ds[0].style.display = 'none';
				validationArr['inds'] = true;
				enableDisableButton();
			} else if (ind.value !== 'Others') {
				ds[0].style.display = 'none';
				validationArr['inds'] = true;
				enableDisableButton();
			} else {
				fn[0].innerHTML = '';
				validationArr['inds'] = true;
				enableDisableButton();
			}
		}

		var isDataValid = false;
		function enableDisableButton() {
			var isValid = true;
			var $submitBtn = $('#submit-btn');
			for (var i in validationArr) {
				isValid = isValid && validationArr[i];
			}
			isDataValid = isValid;
			if (isValid) {
				$submitBtn.removeAttr('disabled');
			} else {
				$submitBtn.attr('disabled', true);
			}
		}

		function addEventListner() {
			$('#Cform').on('submit', function(e) {
				if (!isDataValid) {
					e.preventDefault();
				}
			});
		}

		addEventListner();
	});
	return (
		<Layout>
			<VisualFormWrapper>
				<SEO title='Contact Form' />
				<BreadCrumbs title='Home' subtitle='Mail' pageTitle='Contact Form' />
				<form form='Cform' id='Cform' method='POST' class='was-validated'>
					<div class='row'>
						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
							<label for='first_name'>First Name *</label>
							<input
								id='first_name'
								maxlength='80'
								name='first_name'
								size='20'
								type='text'
								onblur='f()'
								required
							/>
							<div class='error' />
						</div>

						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
							<label for='last_name'>Last Name *</label>
							<input
								id='last_name'
								maxlength='80'
								name='last_name'
								size='20'
								type='text'
								onblur='l()'
								required
							/>
							<div class='error' />
						</div>

						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
							<label for='email'>Email *</label>
							<input
								id='email'
								min=''
								name='email'
								size='20'
								type='text'
								onblur='ml(this.value)'
								required
							/>
							<div class='errorml' />
						</div>
					</div>
					<div class='row'>
						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
							<label for='company'>Company *</label>
							<input
								id='company'
								maxlength='80'
								name='company'
								size='20'
								type='text'
								onblur='c()'
								required
							/>
							<div class='errorc' />
						</div>

						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group' required>
							<label for='lead_source'>Country *</label>
							<select id='lead_source' name='lead_source' onblur='src()' onchange='src()'>
								<option value='none'>--None--</option>
								<option value='Afghanistan'>Afghanistan</option>
								<option value='Åland Islands'>Åland Islands</option>
								<option value='Albania'>Albania</option>
								<option value='Algeria'>Algeria</option>
								<option value='American Samoa'>American Samoa</option>
								<option value='Andorra'>Andorra</option>
								<option value='Angola'>Angola</option>
								<option value='Anguilla'>Anguilla</option>
								<option value='Antarctica'>Antarctica</option>
								<option value='Antigua and Barbuda'>Antigua and Barbuda</option>
								<option value='Argentina'>Argentina</option>
								<option value='Armenia'>Armenia</option>
								<option value='Aruba'>Aruba</option>
								<option value='Australia'>Australia</option>
								<option value='Austria'>Austria</option>
								<option value='Azerbaijan'>Azerbaijan</option>
								<option value='Bahamas'>Bahamas</option>
								<option value='Bahrain'>Bahrain</option>
								<option value='Bangladesh'>Bangladesh</option>
								<option value='Barbados'>Barbados</option>
								<option value='Belarus'>Belarus</option>
								<option value='Belgium'>Belgium</option>
								<option value='Belize'>Belize</option>
								<option value='Benin'>Benin</option>
								<option value='Bermuda'>Bermuda</option>
								<option value='Bhutan'>Bhutan</option>
								<option value='Bolivia'>Bolivia</option>
								<option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
								<option value='Botswana'>Botswana</option>
								<option value='Bouvet Island'>Bouvet Island</option>
								<option value='Brazil'>Brazil</option>
								<option value='British Indian Ocean Territory'>British Indian Ocean Territory</option>
								<option value='Brunei Darussalam'>Brunei Darussalam</option>
								<option value='Bulgaria'>Bulgaria</option>
								<option value='Burkina Faso'>Burkina Faso</option>
								<option value='Burundi'>Burundi</option>
								<option value='Cambodia'>Cambodia</option>
								<option value='Cameroon'>Cameroon</option>
								<option value='Canada'>Canada</option>
								<option value='Cape Verde'>Cape Verde</option>
								<option value='Cayman Islands'>Cayman Islands</option>
								<option value='Central African Republic'>Central African Republic</option>
								<option value='Chad'>Chad</option>
								<option value='Chile'>Chile</option>
								<option value='China'>China</option>
								<option value='Christmas Island'>Christmas Island</option>
								<option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option>
								<option value='Colombia'>Colombia</option>
								<option value='Comoros'>Comoros</option>
								<option value='Congo'>Congo</option>
								<option value='Congo, The Democratic Republic of The'>
									Congo, The Democratic Republic of The
								</option>
								<option value='Cook Islands'>Cook Islands</option>
								<option value='Costa Rica'>Costa Rica</option>
								<option value='Cote D&#39;ivoire'>Cote D'ivoire</option>
								<option value='Croatia'>Croatia</option>
								<option value='Cuba'>Cuba</option>
								<option value='Cyprus'>Cyprus</option>
								<option value='Czech Republic'>Czech Republic</option>
								<option value='Denmark'>Denmark</option>
								<option value='Djibouti'>Djibouti</option>
								<option value='Dominica'>Dominica</option>
								<option value='Dominican Republic'>Dominican Republic</option>
								<option value='Ecuador'>Ecuador</option>
								<option value='Egypt'>Egypt</option>
								<option value='El Salvador'>El Salvador</option>
								<option value='Equatorial Guinea'>Equatorial Guinea</option>
								<option value='Eritrea'>Eritrea</option>
								<option value='Estonia'>Estonia</option>
								<option value='Ethiopia'>Ethiopia</option>
								<option value='Falkland Islands (Malvinas)'>Falkland Islands (Malvinas)</option>
								<option value='Faroe Islands'>Faroe Islands</option>
								<option value='Fiji'>Fiji</option>
								<option value='Finland'>Finland</option>
								<option value='France'>France</option>
								<option value='French Guiana'>French Guiana</option>
								<option value='French Polynesia'>French Polynesia</option>
								<option value='French Southern Territories'>French Southern Territories</option>
								<option value='Gabon'>Gabon</option>
								<option value='Gambia'>Gambia</option>
								<option value='Georgia'>Georgia</option>
								<option value='Germany'>Germany</option>
								<option value='Ghana'>Ghana</option>
								<option value='Gibraltar'>Gibraltar</option>
								<option value='Greece'>Greece</option>
								<option value='Greenland'>Greenland</option>
								<option value='Grenada'>Grenada</option>
								<option value='Guadeloupe'>Guadeloupe</option>
								<option value='Guam'>Guam</option>
								<option value='Guatemala'>Guatemala</option>
								<option value='Guernsey'>Guernsey</option>
								<option value='Guinea'>Guinea</option>
								<option value='Guinea-bissau'>Guinea-bissau</option>
								<option value='Guyana'>Guyana</option>
								<option value='Haiti'>Haiti</option>
								<option value='Heard Island and Mcdonald Islands'>
									Heard Island and Mcdonald Islands
								</option>
								<option value='Holy See (Vatican City State)'>Holy See (Vatican City State)</option>
								<option value='Honduras'>Honduras</option>
								<option value='Hong Kong'>Hong Kong</option>
								<option value='Hungary'>Hungary</option>
								<option value='Iceland'>Iceland</option>
								<option value='India'>India</option>
								<option value='Indonesia'>Indonesia</option>
								<option value='Iran, Islamic Republic of'>Iran</option>
								<option value='Iraq'>Iraq</option>
								<option value='Ireland'>Ireland</option>
								<option value='Isle of Man'>Isle of Man</option>
								<option value='Israel'>Israel</option>
								<option value='Italy'>Italy</option>
								<option value='Jamaica'>Jamaica</option>
								<option value='Japan'>Japan</option>
								<option value='Jersey'>Jersey</option>
								<option value='Jordan'>Jordan</option>
								<option value='Kazakhstan'>Kazakhstan</option>
								<option value='Kenya'>Kenya</option>
								<option value='Kiribati'>Kiribati</option>
								<option value='Korea, Democratic People&#39;s Republic of'>
									Korea, Democratic People's Republic of
								</option>
								<option value='Korea, Republic of'>Korea, Republic of</option>
								<option value='Kuwait'>Kuwait</option>
								<option value='Kyrgyzstan'>Kyrgyzstan</option>
								<option value='Lao People&#39;s Democratic Republic'>
									Lao People's Democratic Republic
								</option>
								<option value='Latvia'>Latvia</option>
								<option value='Lebanon'>Lebanon</option>
								<option value='Lesotho'>Lesotho</option>
								<option value='Liberia'>Liberia</option>
								<option value='Libyan Arab Jamahiriya'>Libyan Arab Jamahiriya</option>
								<option value='Liechtenstein'>Liechtenstein</option>
								<option value='Lithuania'>Lithuania</option>
								<option value='Luxembourg'>Luxembourg</option>
								<option value='Macao'>Macao</option>
								<option value='Macedonia, The Former Yugoslav Republic of'>
									Macedonia, The Former Yugoslav Republic of
								</option>
								<option value='Madagascar'>Madagascar</option>
								<option value='Malawi'>Malawi</option>
								<option value='Malaysia'>Malaysia</option>
								<option value='Maldives'>Maldives</option>
								<option value='Mali'>Mali</option>
								<option value='Malta'>Malta</option>
								<option value='Marshall Islands'>Marshall Islands</option>
								<option value='Martinique'>Martinique</option>
								<option value='Mauritania'>Mauritania</option>
								<option value='Mauritius'>Mauritius</option>
								<option value='Mayotte'>Mayotte</option>
								<option value='Mexico'>Mexico</option>
								<option value='Micronesia, Federated States of'>Micronesia, Federated States of</option>
								<option value='Moldova, Republic of'>Moldova, Republic of</option>
								<option value='Monaco'>Monaco</option>
								<option value='Mongolia'>Mongolia</option>
								<option value='Montenegro'>Montenegro</option>
								<option value='Montserrat'>Montserrat</option>
								<option value='Morocco'>Morocco</option>
								<option value='Mozambique'>Mozambique</option>
								<option value='Myanmar'>Myanmar</option>
								<option value='Namibia'>Namibia</option>
								<option value='Nauru'>Nauru</option>
								<option value='Nepal'>Nepal</option>
								<option value='Netherlands'>Netherlands</option>
								<option value='Netherlands Antilles'>Netherlands Antilles</option>
								<option value='New Caledonia'>New Caledonia</option>
								<option value='New Zealand'>New Zealand</option>
								<option value='Nicaragua'>Nicaragua</option>
								<option value='Niger'>Niger</option>
								<option value='Nigeria'>Nigeria</option>
								<option value='Niue'>Niue</option>
								<option value='Norfolk Island'>Norfolk Island</option>
								<option value='Northern Mariana Islands'>Northern Mariana Islands</option>
								<option value='Norway'>Norway</option>
								<option value='Oman'>Oman</option>
								<option value='Pakistan'>Pakistan</option>
								<option value='Palau'>Palau</option>
								<option value='Palestinian Territory, Occupied'>Palestinian Territory, Occupied</option>
								<option value='Panama'>Panama</option>
								<option value='Papua New Guinea'>Papua New Guinea</option>
								<option value='Paraguay'>Paraguay</option>
								<option value='Peru'>Peru</option>
								<option value='Philippines'>Philippines</option>
								<option value='Pitcairn'>Pitcairn</option>
								<option value='Poland'>Poland</option>
								<option value='Portugal'>Portugal</option>
								<option value='Puerto Rico'>Puerto Rico</option>
								<option value='Qatar'>Qatar</option>
								<option value='Reunion'>Reunion</option>
								<option value='Romania'>Romania</option>
								<option value='Russian Federation'>Russian Federation</option>
								<option value='Rwanda'>Rwanda</option>
								<option value='Saint Helena'>Saint Helena</option>
								<option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
								<option value='Saint Lucia'>Saint Lucia</option>
								<option value='Saint Pierre and Miquelon'>Saint Pierre and Miquelon</option>
								<option value='Saint Vincent and The Grenadines'>
									Saint Vincent and The Grenadines
								</option>
								<option value='Samoa'>Samoa</option>
								<option value='San Marino'>San Marino</option>
								<option value='Sao Tome and Principe'>Sao Tome and Principe</option>
								<option value='Saudi Arabia'>Saudi Arabia</option>
								<option value='Senegal'>Senegal</option>
								<option value='Serbia'>Serbia</option>
								<option value='Seychelles'>Seychelles</option>
								<option value='Sierra Leone'>Sierra Leone</option>
								<option value='Singapore'>Singapore</option>
								<option value='Slovakia'>Slovakia</option>
								<option value='Slovenia'>Slovenia</option>
								<option value='Solomon Islands'>Solomon Islands</option>
								<option value='Somalia'>Somalia</option>
								<option value='South Africa'>South Africa</option>
								<option value='South Georgia and The South Sandwich Islands'>
									South Georgia and The South Sandwich Islands
								</option>
								<option value='Spain'>Spain</option>
								<option value='Sri Lanka'>Sri Lanka</option>
								<option value='Sudan'>Sudan</option>
								<option value='Suriname'>Suriname</option>
								<option value='Svalbard and Jan Mayen'>Svalbard and Jan Mayen</option>
								<option value='Swaziland'>Swaziland</option>
								<option value='Sweden'>Sweden</option>
								<option value='Switzerland'>Switzerland</option>
								<option value='Syrian Arab Republic'>Syrian Arab Republic</option>
								<option value='Taiwan, Province of China'>Taiwan, Province of China</option>
								<option value='Tajikistan'>Tajikistan</option>
								<option value='Tanzania, United Republic of'>Tanzania, United Republic of</option>
								<option value='Thailand'>Thailand</option>
								<option value='Timor-leste'>Timor-leste</option>
								<option value='Togo'>Togo</option>
								<option value='Tokelau'>Tokelau</option>
								<option value='Tonga'>Tonga</option>
								<option value='Trinidad and Tobago'>Trinidad and Tobago</option>
								<option value='Tunisia'>Tunisia</option>
								<option value='Turkey'>Turkey</option>
								<option value='Turkmenistan'>Turkmenistan</option>
								<option value='Turks and Caicos Islands'>Turks and Caicos Islands</option>
								<option value='Tuvalu'>Tuvalu</option>
								<option value='Uganda'>Uganda</option>
								<option value='Ukraine'>Ukraine</option>
								<option value='United Arab Emirates'>United Arab Emirates</option>
								<option value='United Kingdom'>United Kingdom</option>
								<option value='United States'>United States</option>
								<option value='United States Minor Outlying Islands'>
									United States Minor Outlying Islands
								</option>
								<option value='Uruguay'>Uruguay</option>
								<option value='Uzbekistan'>Uzbekistan</option>
								<option value='Vanuatu'>Vanuatu</option>
								<option value='Venezuela'>Venezuela</option>
								<option value='Viet Nam'>Viet Nam</option>
								<option value='Virgin Islands, British'>Virgin Islands, British</option>
								<option value='Virgin Islands, U.S.'>Virgin Islands, U.S.</option>
								<option value='Wallis and Futuna'>Wallis and Futuna</option>
								<option value='Western Sahara'>Western Sahara</option>
								<option value='Yemen'>Yemen</option>
								<option value='Zambia'>Zambia</option>
								<option value='Zimbabwe'>Zimbabwe</option>
							</select>
							<div class='errorms' />
						</div>

						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
							<label for='mobile'>Phone</label>
							<input id='mobile' minlength='10' maxlength='10' name='mobile' size='20' type='tel' />
						</div>
					</div>
					<div class='row'>
						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group' required>
							<label for='industry'>Select Service *</label>
							<select id='industry' name='industry' onchange='inds()'>
								<option value='none'>--None--</option>
								<option value='Microservices'>&nbsp;Microservices</option>
								<option value='Devops'>&nbsp;Devops</option>
								<option value='Cloudmigrationservices'>&nbsp;Cloud Migration Services</option>
								<option value='Publiccloudsolutions'>&nbsp;Public Cloud Solutions</option>
								<option value='hybridcloudsolutions'>&nbsp;Hybrid Cloud Solutions</option>
								<option value='monitoring&analyticssolutions'>
									&nbsp;Monitoring & Analytics Solutions
								</option>
								<option value='Hostingervices'>&nbsp;Hosting Services</option>
								<option value='Backupservices'>&nbsp;Backup Services</option>
								<option value='DisasterRecoveryservices'>&nbsp;Disaster Recovery Services</option>
								<option value='O365services'>&nbsp;Microsoft office 365 Services</option>
								<option value='managedservices'>&nbsp;Managed Services</option>
								<option value='Others' id='others'>
									&nbsp;Other
								</option>
							</select>
							<div class='errormss' />
						</div>

						<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group inds'>
							<textarea
								name='description'
								rows='3'
								cols='40'
								placeholder='Write Others&#39;s description If selected'
								id='des'
								onkeyup='t()'
							/>
							<div class='texterror' id='iText' />
						</div>
						<div
							class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'
							style={{ alignSelf: ' baseline', marginTop: '2rem' }}>
							<input
								type='submit'
								name='submit'
								value='Submit'
								class='btn btn-primary w-50 pos-3'
								id='submit-btn'
								disabled
							/>
						</div>
					</div>
				</form>
			</VisualFormWrapper>
		</Layout>
	);
};

export default VisualForm;

const VisualFormWrapper = styled.div`
	padding: 2rem 1rem;
	form {
		/* background: #F3F5F7/; */
		width: 100%;
		margin: 0px auto;
		padding: 1rem 3rem 0rem 3rem;
		border-radius: 5px;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.field-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}

	label {
		margin-bottom: 8px;
		color: #425163;
		font-weight: 600;
	}

	input,
	select,
	textarea {
		border: 2px solid #e1e1e1;
		border-radius: 6px;
		padding: 8px 10px;
		color: #777;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: #007cc2;
	}

	input.has-error,
	select.has-error,
	textarea.has-error {
		border-color: #f26969;
	}

	.error,
	.errormb,
	.errorc,
	.errorct,
	.errorml,
	.errorms,
	.texterror,
	.errormss {
		color: #f26969;
		font-weight: bold;
		font-size: 0.9em;
		display: block;
		text-align: left;
		margin-top: 5px;
	}
	.texterror {
		width: 14rem;
	}

	.src,
	.inds {
		display: none;
	}

	.des {
		display: block;
	}

	.pos-3 {
		position: relative;
		top: 37%;
	}
	.btn.btn-primary:disabled {
		background-color: #d1d1d1;
		border: 1px solid #d1d1d1;
	}

	@media (min-width: 576px) {
		padding: 3rem 4rem;
	}
`;
