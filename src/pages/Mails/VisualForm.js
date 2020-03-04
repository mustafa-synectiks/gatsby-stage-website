import React from 'react';
import '../../css/form.css';

const VisualForm = () => {
	return (
		<section>
			<form action='' id='visualForm'>
				<div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group b-1'>
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
					<input id='last_name' maxlength='80' name='last_name' size='20' type='text' onblur='l()' required />
					<div class='error' />
				</div>
				<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
					<label for='email'>Email *</label>
					<input id='email' min='' name='email' size='20' type='text' onblur='ml(this.value)' required />
					<div class='errorml' />
				</div>
				<div class='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
					<label for='email'>country *</label>
					<select name='countries' id='country'>
						<option value='india'>India</option>
						<option value='us'>US</option>
						<option value='england'>England</option>
						<option value='newzealand'>New Zealand</option>
						<option value='australia'>Australia</option>
					</select>
					<div class='errorml' />
				</div>
				<textarea name='textdescription' id='description' cols='30' rows='10' />
			</form>
		</section>
	);
};

export default VisualForm;
