function asyncFunction(callback) {
    setTimeout(function() {
        $("body").append("asyncFunction::timeout <br /> ");

    })
}