function ogCheck() {
    var el = document.querySelector("head meta[property='og:image']");
    var ogImageURL = el.content;
    var ogImage = new Image();
    ogImage.src = ogImageURL;
    if (el) {
        ogImage.onload = function() {
            var ogImageWidth = ogImage.width;
            var ogImageHeight = ogImage.height;
            if(ogImageWidth > 0 && ogImageWidth == 215 && ogImageHeight > 0 && ogImageHeight == 215) {
                console.log("OG Image Check Passed!");
                return true;
            } else if (ogImageWidth > 0 && ogImageWidth != 215 && ogImageHeight > 0 && ogImageHeight != 215) {
                console.log("OG Image Check Failed! OG Image is of dimensions " + ogImageWidth + "x" + ogImageHeight + "px");
                return false;
            } else {
                console.log("OG Image Check Failed. OG Image has zero width!");
                return false;
            }
        };
        ogImage.onerror = function() {
            console.log("OG Image Check Failed. OG Image is not found!");
            return false;
        };
    } else {
        console.log("OG Image Check Failed. Error: no element is found!");
        return false;
    }
}
ogCheck();

function ogCheckNew() {
    var el = document.querySelector("head meta[property='og:image']");
    var ogImageURL = el.content;
    var ogImage = new Image();
    ogImage.src = ogImageURL;
    if (el) {
        ogImage.onload = function() {
            var ogImageWidth = ogImage.width;
            var ogImageHeight = ogImage.height;
            if(ogImageWidth == 215 && ogImageHeight == 215) {
                console.log("OG Image Check Passed!");
                return true;
            } else if (ogImageWidth == 0 && ogImageHeight == 0) {
                console.log("OG Image Check Failed. OG Image has zero width! \n\n" + ogImageURL);
                return false;
            } else {
                console.log("OG Image Check Failed! OG Image is of dimensions " + ogImageWidth + "x" + ogImageHeight + "px \n\n" + ogImageURL);
                return false;
            }
        };
        ogImage.onerror = function() {
            console.log("OG Image Check Failed. OG Image is not found! \n\n" + ogImageURL);
            return false;
        };
    } else {
        console.log("OG Image Check Failed. Error: no OG Meta Tag is found!");
        return false;
    }
}
ogCheckNew();