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

//------------------------------------------
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
const showButton = document.getElementById('generateNumber')
const enterButton = document.getElementById('enterButtin')

showButton.addEventListener('click', function(){
    enterButton.style.display = 'inline-block'
})

//------------------------------------------
const texts = [
    "私は昨日大量のピーナッツバターを食べました彼女は蛍光ピンクのドラゴンを乗って空を飛んでいるところを見ました。レモン味のアイスクリームにチョコレートソースとピーナッツをトッピングすると、幸せな気分になります", 
    "あの日、桜がピンク色のチョコレートと一緒に空を飛んでいました。寿司の雲が空を泳ぎ、たこ焼きの星が踊っていました。猫の声がカラフルなラーメンと一緒に響いていました。", 
    "風がサッカーボールのように転がり、太陽がカレーライスになりました。サクラがオレンジ色の雪を降らせ、川がチーズの流れに変わりました。お寿司の花が歌い、カエルの雨が降りました。", 
    "キツネがカエルの王国を建て、猫がお茶の時間を楽しんでいました。大きなアヒルが空を泳ぎ、猫がハート型の雲を追いかけていました。竜巻がお寿司の川を巻き込み、カエルがおにぎりのお城を建てました。"
];

const textContainer = document.getElementById("textChangerer");

function switchText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  textContainer.textContent = texts[randomIndex];
}
switchText();
setInterval(switchText, 3000);

//------------------------------------------

// let bottomAreaContainer = document.querySelector('.bottomArea');
// let washroom = document.querySelector('.washroom');
// let backrooms1 = document.querySelector('.backrooms1');
// let backrooms2 = document.querySelector('.backrooms2');

// bottomAreaContainer.addEventListener('scroll', function() {
//     var value = bottomAreaContainer.scrollLeft;
    
//     washroom.style.left = -value * 0.5 + 'px';
//     backrooms1.style.left = value * 0.5 + 'px';
//     backrooms2.style.left = -value * 0.5 + 'px';
// });

// const scrollContainer = document.querySelector('.bottomArea');

// scrollContainer.onmouseup = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// scrollContainer.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// }

// scrollContainer.onmousemove = e => {
//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = scrollContainer.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * 100;
//         nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage

//     track.dataset.nextPercentage;

//     track.style.transform = `translate(${nextPercentage}%, -50%)`;

//     for(const image of track.getElementsByClassName("imagez")) {
//         image.style.objectPosition = `${nextPercentage} 50%`;
//     }
// }

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