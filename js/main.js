//current year
const year = document.querySelector('#year')

currentDate = new Date()
currentYear = currentDate.getFullYear()
year.textContent = currentYear

// logic of starting the game and expanding it to full screen
const button = document.querySelector('.media-wrap__video-button')
const overlay = document.querySelector('.media-wrap__video-overlay')
const iframe = document.querySelector('.iframe')
const bgIframe = document.querySelector('.media-wrap__video-img')

// start game
function startGame() {
    button.style.display = 'none'
    overlay.style.display = 'none'
    bgIframe.style.display = 'none'

    if (launchFullscreen(iframe)) {
        iframe.src =
            'https://d2drhksbtcqozo.cloudfront.net/casino/launcher.html?channel=web&gameid=sweetopiaroyale&moneymode=fun&jurisdiction=MT&partnerid=1'
        return
    }
    openInNewWindow(
        'https://d2drhksbtcqozo.cloudfront.net/casino/launcher.html?channel=mobile&amp;gameid=sweetopiaroyale&amp;moneymode=fun&amp;jurisdiction=MT&amp;partnerid=1'
    )
}

// check for full screen availability
function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    } else {
        return false
    }
    return true
}

// open game in new window
function openInNewWindow(url) {
    window.open(url, '_blank')
}

// click button
button.addEventListener('click', startGame)

//slider game
function createSlider(selector, options) {
    const slider = new Swiper(selector, options);

    const prevButton = document.querySelector(options.navigation.prevEl);
    const nextButton = document.querySelector(options.navigation.nextEl);

    prevButton.addEventListener("click", () => {
        slider.slidePrev();
    });

    nextButton.addEventListener("click", () => {
        slider.slideNext();
    });

    return slider;
}

const mainSwiper = createSlider(".swiper", {
    loop: true,
    slidesPerView: 1,
    direction: "horizontal",
    spaceBetween: 30,
    initialSlide: 0,
    navigation: {
        nextEl: ".custom-next-button",
        prevEl: ".custom-prev-button",
    },
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 2.5,
        },
    },
});

