

function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    var returnArr = arr.filter(function (elements) {
        if(elements)
        {
            return elements;
        }
    });
    //console.log(returnArr);
    return returnArr;
}

bouncer([7, "ate", "", false, 9]);