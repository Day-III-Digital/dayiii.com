
function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }
    
    var distanceToHalfWayScreen = window.scrollY + (window.innerHeight * 0.5);
    var distanceToBottom = distanceToHalfWayScreen - element.getBoundingClientRect().bottom;
    var scrollTop = document.documentElement.scrollTop;
    
    var amount = 1;
    if (scrollTop > distanceToBottom) {
        amount = 1 - ((scrollTop - distanceToBottom) / (window.innerHeight * 0.5));
        amount = Math.min(Math.max(amount, 0.0), 1.0);
    }
    
    element.style.opacity = amount;
    var multiplyier = 1;
    if (Boolean(element.closest(".bg-accent"))) {
        multiplyier = -1;
    }
    element.style.transform = "translateX(" + (10 - 10 * amount) * multiplyier + "%)";
}

var alpsdivider = document.getElementsByClassName('alps-divider');
for(var i = 0; i < alpsdivider.length; i++) {
    fadeOutOnScroll(alpsdivider[i]);
}

function scrollHandler() {
    for(var i = 0; i < alpsdivider.length; i++) {
        fadeOutOnScroll(alpsdivider[i]);
    }
}
window.addEventListener('scroll', scrollHandler);