/*
|----------------------------------------------------------
| Mobile Tel Link Check
|----------------------------------------------------------
*
*/

function op_mobile_tel_link_check_wp(callback) {

    // only run check if viewport is mobile.
    if (window.innerWidth <= 799) {
        // This query finds all text nodes with at least 12 non-whitespace characters who are not direct children of an anchor tag
        var xpr = document.evaluate('/html/body//text()[string-length(normalize-space(self::text())) >= 10 and not(../../parent::A|../parent::A|parent::A|parent::SCRIPT) and not(parent::span[@itemprop="faxNumber"]|parent::span[@class="tel-ignore"]) and not(parent::div[@class="attorneyProfileFax"])]',
            document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

        var listOfNumbers = [];
        var pageAsText = document.body.innerText;

        for (var i=0, len=xpr.snapshotLength; i < len; ++i) {

            var txt = xpr.snapshotItem(i);

            // Splits with grouping to preserve the text split on
            var numbers = txt.data.split(/([(]?\d{3}[)]?[(\s)?.-]\d{3}[\s.-]\d{4})/);

            // split will return at least three items on a hit, prefix, split match, and suffix
            if (numbers.length >= 3) {
                for (var j = 1; j < numbers.length; j += 2) {

                    // regex to find Fax Number for wordpress sites
                    // it will search by syntax: 'Fax: <phone number>'
                    var regex1 = new RegExp(`Fax: ${numbers[j]}`);
                    // it will search by syntax: 'fax: <phone number>'
                    var regex2 = new RegExp(`fax: ${numbers[j]}`);
                    // it will search by syntax: 'FAX: <phone number>'
                    var regex3 = new RegExp(`FAX: ${numbers[j]}`);
                    // if current phone number is not fax number i.e. regex = false
                    if (!pageAsText.match(regex1) && !pageAsText.match(regex2) && !pageAsText.match(regex3)) {
                        listOfNumbers.push(numbers[j]);
                    }
                }
            }
        }
        
        if(listOfNumbers.length > 0) {
            var elements = listOfNumbers.join('\n\n');
            callback(
                buildFailedObject(
                    elements,
                    getCheckName('op_mobile_tel_link_check_wp'),
                    'A link without \'tel:\' was found on the site.'
                )
            );
        } else {
            callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_wp')));
        }
        return;
        
    } else {
        callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_wp')));
        return;
    }
}
qualityChecks.registerCheck(op_mobile_tel_link_check_wp);