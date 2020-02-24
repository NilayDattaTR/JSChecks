/*
|----------------------------------------------------------
| 341 Blog Short Form Present Check
|----------------------------------------------------------
*
*/

function op_blog_short_form_present_check_pub() {
	var shortForm = document.querySelectorAll('#containerIntakeFormShortAutofill,#containerIntakeFormShort');

	if (shortForm.length > 0) {
		console.log("Blog Short Form Test passed.");
		return;
	} else {
		console.log("A short form was not found on the page.");
		return;
	}
}
var pagetype = document.querySelector("body.blog");
console.log("pagetype: " + pagetype);
if(pagetype) {
	op_blog_short_form_present_check_pub();
}
