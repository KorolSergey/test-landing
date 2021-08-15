// COUNDOWN
const items = document.querySelectorAll('.banner__timer-num-text > h3');

let countdownDate = new Date (2021, 10, 14, 22, 23, 00).getTime();


function getCountdownTime() {
    const now = new Date().getTime();

    const distance = countdownDate - now

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;  


    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [ days, hours, minutes, seconds];

    items.forEach(function (item, i) {
        item.textContent = values[i];
    })

    if (distance < 0) {
        clearInterval(countdown);
    }
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();


// ANIMATION


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let animItem of animItems) {

            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_show-title');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_show-title');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);
}