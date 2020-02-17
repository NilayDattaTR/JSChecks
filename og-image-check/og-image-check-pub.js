/*
|----------------------------------------------------------
| OG Image Check
|----------------------------------------------------------
*
*/

function op_og_image_check_pub(callback) {
	window.onload = function() {
		var el = document.querySelector("head meta[property='og:image']");
		var ogImageURL = el.content;
		var ogImage = new Image();
		ogImage.src = ogImageURL;
		if (el) {
			ogImage.onload = function() {
				var ogImageWidth = ogImage.width;
				var ogImageHeight = ogImage.height;
				if(ogImageWidth == 215 && ogImageHeight == 215) {
					callback(buildPassedObject('n/a', getCheckName('op_og_image_check_pub')));
					return;
				} else if (ogImageWidth == 0 && ogImageHeight == 0) {
					callback(
						buildFailedObject(
							ogImageURL,
							getCheckName('op_og_image_check_pub'),
							"OG Image is of zero size."
						)
					);
					return;
				} else {
					callback(
						buildFailedObject(
							ogImageURL,
							getCheckName('op_og_image_check_pub'),
							"OG Image is of dimensions " + ogImageWidth + "x" + ogImageHeight + "px."
						)
					);
					return;
				}
			};
			ogImage.onerror = function() {
				callback(
					buildFailedObject(
						ogImageURL,
						getCheckName('op_og_image_check_pub'),
						"OG Image is not found."
					)
				);
				return;
			};
		} else {
			callback(
				buildFailedObject(
					ogImageURL,
					getCheckName('op_og_image_check_pub'),
					"No OG Meta Tag is found."
				)
			);
			return;
		}
	}
}
qualityChecks.registerCheck(op_og_image_check_pub);