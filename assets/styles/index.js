//Require jQuery
function scrollSmoothToBottom(id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
        scrollTop: div.scrollHeight - div.clientHeight
    }, 500);
}

//Require jQuery
function scrollSmoothToTop(id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
        scrollTop: 0
    }, 500);
}