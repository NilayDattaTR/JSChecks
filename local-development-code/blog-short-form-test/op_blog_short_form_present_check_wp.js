/*
|----------------------------------------------------------
| 341 Blog Short Form Present Check
|----------------------------------------------------------
*
*/

function op_blog_short_form_present_check_wp() {
    var shortForm = document.querySelectorAll('.ninja-forms-noscript-message,.fl-short-form');
    console.log("shortForm: " + JSON.stringify(shortForm));

	if (shortForm.length > 0) {
		console.log("Blog Short Form Test passed.");
		return;
	} else {
		console.log("A short form was not found on the page.");
		return;
	}
}
var blogPage = document.querySelector("body.page-blog");
var postPage = document.querySelector("body.single-post");
var archivePage = document.querySelector("body.archive");
var categoryPage = document.querySelector("body.category");

console.log("blogPage: " + blogPage);
console.log("postPage: " + postPage);
console.log("archivePage: " + archivePage);
console.log("categoryPage: " + categoryPage);

if(blogPage||postPage||archivePage||categoryPage) {
	op_blog_short_form_present_check_wp();
}
