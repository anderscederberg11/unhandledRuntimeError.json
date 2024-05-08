let currentOpacity = parseFloat(localStorage.getItem('currentOpacity')) || 1; // Get current opacity from local storage or set it to 1
let opacityAnimationRunning = true; // Initially set to true to start the countdown animation

function pageGone() {
    const byeByePage = document.querySelector('.pageLeaving');
    const intervalId = setInterval(() => {
        byeByePage.style.opacity = currentOpacity.toFixed(2);
        currentOpacity -= 0.01; // Decrement by 0.01 to reduce opacity
        localStorage.setItem('currentOpacity', currentOpacity); // Store current opacity in local storage
        if (currentOpacity < -0.01) { // Stop when opacity reaches 0
            clearInterval(intervalId);
            opacityAnimationRunning = false; // Set the flag to false when animation ends
        }
    }, 750);
}

document.addEventListener("DOMContentLoaded", function() {
    pageGone();
});

function increaseOpacity() {
    const byeByePage = document.querySelector('.pageLeaving');
    currentOpacity = parseFloat(byeByePage.style.opacity) + 0.1; // Increment the current opacity by 0.1
    if (currentOpacity > 1) {
        currentOpacity = 1; // Ensure opacity doesn't exceed 1
    }
    byeByePage.style.opacity = currentOpacity;
    localStorage.setItem('currentOpacity', currentOpacity); // Store current opacity in local storage so that it dont reset on refresh
    console.log('New opacity:', currentOpacity);

    // If animation is not running, start animation from the new opacity
    if (!opacityAnimationRunning) {
        pageGone();
        opacityAnimationRunning = true;
    }
}

const toggleFirstArea = () => {
    const pageLeaving = document.querySelector('.pageLeaving');
    const currentPageState = pageLeaving.dataset.page;
    const newPageState = currentPageState === 'false' ? 'true' : 'false';
    pageLeaving.dataset.page = newPageState;
}

//------------------------------------------
function generateRandomNumber() {
    const randomNumber1 = getRandomNumber(0, 999).toString().padStart(3, '0');
    const randomNumber2 = getRandomNumber(0, 999).toString().padStart(3, '0');
    const randomNumber3 = getRandomNumber(0, 9999).toString().padStart(4, '0');
    
    const generatedNumber = `${randomNumber1}-${randomNumber2}-${randomNumber3}`;
    
    document.getElementById('randomNumber').textContent = generatedNumber;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//------------------------------------------

// function checkLength(length,girth){
//     if (length >= 8 && length <= 15 && girth > 2 && length > girth) {
//         return `yous a regular big boy with a ${length} incher and ${girth} girther`;
//     } else if(girth <= 2 && length !== girth && length > 3) {
//         return `yous have a pencil with dimensions ${length} inches by ${girth} inches lmao`
//     } else if( length === girth) {
//         return `yous have a stub with dimensions ${length} inches by ${girth} inches lmao`
//     } else if( length < girth && length > 3) {
//         return `yous have a chode with a ${length} incher and ${girth} widther lmao`;
//     } else if( length >= 16 && length > girth) {
//         return `yous have won in the life lottery with that regular ${length} incher and ${girth} inch girther`
//     } else if( length > girth && Math.abs(length - girth) === 2) {
//         return `dude you have a ${length} incher and a ${girth} inch girther. your girth is getting real cose `
//     } else if( length >= 16 && length < girth) {
//         return `dude what the fuck how is this possible you have a ${length} incher which is cracked but a ${girth} inch girther??`
//     } else {
//         return `yous a small boy with a ${length} incher and ${girth} widther. Get bigger`;
//     }
// }
// console.log(checkLength(Math.floor(Math.random() * 17),Math.floor(Math.random() * 21)))