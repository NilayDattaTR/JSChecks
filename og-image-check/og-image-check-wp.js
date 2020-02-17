/*
|----------------------------------------------------------
| OG Image Check
|----------------------------------------------------------
*
*/

function op_og_image_check_wp(callback) {
    var el = document.querySelector("head meta[property='og:image']");
    var ogImageURL = el.content;
    var ogImage = new Image();
    ogImage.src = ogImageURL;
    if (el) {
        ogImage.onload = function() {
            var ogImageWidth = ogImage.width;
            var ogImageHeight = ogImage.height;
            if(ogImageWidth > 0 && ogImageWidth == 215 && ogImageHeight > 0 && ogImageHeight == 215) {
                callback(buildPassedObject('n/a', getCheckName('op_og_image_check_wp')));
                return;
            } else if (ogImageWidth > 0 && ogImageWidth != 215 && ogImageHeight > 0 && ogImageHeight != 215) {
                callback(
                    buildFailedObject(
                        ogImageURL,
                        getCheckName('op_og_image_check_wp'),
                        "OG Image Check Failed! OG Image is of dimensions " + ogImageWidth + "x" + ogImageHeight + "px"
                    )
                );
                return;
            } else {
                callback(
                    buildFailedObject(
                        ogImageURL,
                        getCheckName('op_og_image_check_wp'),
                        "OG Image Check Failed. OG Image has zero width!"
                    )
                );
                return;
            }
        };
        ogImage.onerror = function() {
            callback(
                buildFailedObject(
                    ogImageURL,
                    getCheckName('op_og_image_check_wp'),
                    "OG Image Check Failed. OG Image is not found!"
                )
            );
            return;
        };
    } else {
        callback(
            buildFailedObject(
                ogImageURL,
                getCheckName('op_og_image_check_wp'),
                "OG Image Check Failed. OG Image is not found!"
            )
        );
        return;
    }
}
qualityChecks.registerCheck(op_og_image_check_wp);