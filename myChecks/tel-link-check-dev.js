●	op_mobile_tel_link_check_pub
●	op_mobile_tel_link_check_wp

/* Tel link check for publisher sites*/
function op_mobile_tel_link_check_pub() {
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
            console.log('Tel Link is present');
            return;
        } else {
            ctaPhonesList.forEach(function(el) {
                console.log('Tel Link is not present in: ' + el);
            });
            return;
        }
    } else {
        console.log('Check is running in Desktop view');
        return;
    }
}
op_mobile_tel_link_check_pub();

/* Tel link check for wordpress sites*/
function op_mobile_tel_link_check_wp() {
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
            console.log('Tel Link is present');
            return;
        } else {
            ctaPhonesList.forEach(function(el) {
                console.log('Tel Link is not present in: ' + el);
            });
            return;
        }
    } else {
        console.log('Check is running in Desktop view');
        return;
    }
}
op_mobile_tel_link_check_wp();