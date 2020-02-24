/*
|----------------------------------------------------------
| 341 Blog Short Form Present Check
|----------------------------------------------------------
*
*/

function op_blog_short_form_present_check_pub(callback) {
	var shortForm = document.querySelectorAll('#containerIntakeFormShortAutofill,#containerIntakeFormShort');

	if (shortForm.length > 0) {
		callback(buildPassedObject('n/a', getCheckName('op_blog_short_form_present_check_pub')));
		return;
	} else {
		callback(
			buildFailedObject(
				'n/a',
				getCheckName('op_blog_short_form_present_check_pub'),
				'A short form was not found on the page.'
			)
		);
		return;
	}
}

if (pagetype.indexOf('blog') > -1) {
	qualityChecks.registerCheck(op_blog_short_form_present_check_pub);
}