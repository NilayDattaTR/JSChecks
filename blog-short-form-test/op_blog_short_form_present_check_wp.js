/*
|----------------------------------------------------------
| 341 Blog Short Form Present Check
|----------------------------------------------------------
*
*/

function op_blog_short_form_present_check_wp(callback) {
    var shortForm = document.querySelectorAll('.ninja-forms-noscript-message,.fl-short-form');

	if (shortForm.length > 0) {
		callback(buildPassedObject('n/a', getCheckName('op_blog_short_form_present_check_wp')));
		return;
	} else {
		callback(
			buildFailedObject(
				'n/a',
				getCheckName('op_blog_short_form_present_check_wp'),
				'A short form was not found on the page.'
			)
		);
		return;
	}
}

if (pagetype.indexOf('blog-home') > -1 || pagetype.indexOf('blog-post') > -1 || pagetype.indexOf('blog-monthly-archive') > -1 || pagetype.indexOf('blog-category') > -1) {
	qualityChecks.registerCheck(op_blog_short_form_present_check_wp);
}
