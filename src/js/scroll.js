var scrollState = false;
var scrollElem;

function scroll() {
    scrollElem = document.querySelector('.scroll');

    scrollElem.addEventListener('click', function (e) {
        e.preventDefault();
        smoothscroll();

    });

    window.onscroll = function () {

        if (getScrollVertically() >= 960) {
            if (scrollState == false) {
                scrollState = true;
                checkScrollState();
            }

        }
        if (getScrollVertically() < 900) {
            if (scrollState == true) {
                scrollState = false;
                checkScrollState();
            }
        }
    }
}

function getScrollVertically() {
    if (window.pageYOffset != undefined) {
        return pageYOffset;
    }
    else {
        var sy, d = document, r = d.documentElement, b = d.body;
        sy = r.scrollTop || b.scrollTop || 0;
        return sy;
    }
}

function checkScrollState() {
    if (scrollState) {
        scrollElem.classList.remove('scroll_hide');
        scrollElem.classList.add('scroll_show');
    } else {
        scrollElem.classList.remove('scroll_show');
        scrollElem.classList.add('scroll_hide');
    }
}

function smoothscroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
}




