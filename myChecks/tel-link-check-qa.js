/*
|----------------------------------------------------------
| 1119 Tel Link Check
|----------------------------------------------------------
*
*/

/* Tel link check for publisher sites*/
function op_mobile_tel_link_check_pub(callback) {
    // only run check if viewport is mobile.
    if (window.innerWidth <= 799) {
        // Select all elements with class cta-phone
        var ctaPhones = document.querySelectorAll('.cta-phone');
        var ctaPhonesList = [];
        ctaPhones.forEach(function(el) {
            // Select all elements with tel link inside cta-phone.
            var item = el.querySelector('a[href*="tel:"]');
            if (!item) { // To prevent null values from appending to the array.
                ctaPhonesList.push(el.innerText);
            }
        });
        if(!ctaPhonesList.length) {
            callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_pub')));
            return;
        } else {
            callback(
                buildFailedObject(
                    ctaPhonesList,
                    getCheckName('op_mobile_tel_link_check_pub'),
                    'Links without \'tel:\' was found on the site.'
                )
            );
            return;
        }
    } else {
        callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_pub')));
        return;
    }
}
qualityChecks.registerCheck(op_mobile_tel_link_check_pub);


/* Tel link check for wordpress sites*/
function op_mobile_tel_link_check_wp(callback) {
    // only run check if viewport is mobile.
    if (window.innerWidth <= 799) {
        // Select all elements with class cta-phone
        var ctaPhones = document.querySelectorAll('.nap-item--phone');
        var ctaPhonesList = [];
        ctaPhones.forEach(function(el) {
            // Select all elements with tel link inside cta-phone.
            var item = el.querySelector('a[href*="tel:"]');
            if (!item) { // To prevent null values from appending to the array.
                ctaPhonesList.push(el.innerText);
            }
        });
        if(!ctaPhonesList.length) {
            callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_wp')));
            return;
        } else {
            callback(
                buildFailedObject(
                    ctaPhonesList,
                    getCheckName('op_mobile_tel_link_check_wp'),
                    'Links without \'tel:\' was found on the site.'
                )
            );
            return;
        }
    } else {
        callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_wp')));
        return;
    }
}
qualityChecks.registerCheck(op_mobile_tel_link_check_wp);

