/*
|----------------------------------------------------------
| Mobile Tel Link Check
|----------------------------------------------------------
*
*/

function op_mobile_tel_link_check_pub(callback) {

    // only run check if viewport is mobile.
    if (window.innerWidth <= 799) {
        // This query finds all text nodes with at least 12 non-whitespace characters who are not direct children of an anchor tag
        var xpr = document.evaluate('/html/body//text()[string-length(normalize-space(self::text())) >= 10 and not(../../parent::A|../parent::A|parent::A|parent::SCRIPT) and not(parent::span[@itemprop="faxNumber"]|parent::span[@class="tel-ignore"]) and not(parent::div[@class="attorneyProfileFax"])]',
            document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

        var listOfNumbers = [];

        for (var i=0, len=xpr.snapshotLength; i < len; ++i) {

            var txt = xpr.snapshotItem(i);

            // Splits with grouping to preserve the text split on
            var numbers = txt.data.split(/([(]?\d{3}[)]?[(\s)?.-]\d{3}[\s.-]\d{4})/);

            // split will return at least three items on a hit, prefix, split match, and suffix
            if (numbers.length >= 3) {
                for (var j = 1; j < numbers.length; j += 2) {
                    listOfNumbers.push(numbers[j]);
                }
            }
        }
        
        if(listOfNumbers.length > 0) {
            var elements = listOfNumbers.join('\n\n');
            callback(
                buildFailedObject(
                    elements,
                    getCheckName('op_mobile_tel_link_check_pub'),
                    'A link without \'tel:\' was found on the site.'
                )
            );
        } else {
            callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_pub')));
        }
        return;
        
    } else {
        callback(buildPassedObject('n/a', getCheckName('op_mobile_tel_link_check_pub')));
        return;
    }
}
qualityChecks.registerCheck(op_mobile_tel_link_check_pub);