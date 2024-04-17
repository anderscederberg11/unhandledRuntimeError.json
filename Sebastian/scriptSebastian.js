let opacityAnimationRunning = true; // Initially set to true to start the countdown animation
let currentOpacity = 1; // Initial opacity

function pageGone() {
    const byeByePage = document.querySelector('.pageLeaving');
    const intervalId = setInterval(() => {
        byeByePage.style.opacity = currentOpacity.toFixed(2);
        console.log(currentOpacity.toFixed(2));
        currentOpacity -= 0.01; // Decrement by 0.01 to reduce opacity
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
    console.log('New opacity:', currentOpacity);

    // If animation is not running, start animation from the new opacity
    if (!opacityAnimationRunning) {
        pageGone();
        opacityAnimationRunning = true; // Set the flag to true
    }
}
//---------------------------------------------

// const byeByePage = document.getElementsByClassName('pageLeaving');
// byeByePage.style.opacity = 0;

// function pageGone() {
//     let i = 0;
//     const intervalId = setInterval(() => {
//         console.log(i.toFixed(2));
//         i += 0.01;
//         if (i >= 1) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// pageGone();

// function test() {
//     let i = 0;
//     const intervalId = setInterval(() => {
//         console.log(i.toFixed(2));
//         i += 0.01;
//         if (i >= 1) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// test();

