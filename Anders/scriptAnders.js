document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.switch-checkbox');
    const cart = document.querySelector('.cart');
    const added = document.querySelector('.added');
    const hellCat = document.querySelector('.hellcat-container');

        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                cart.style.display = 'none';
                added.style.display = 'flex'
                hellCat.style.opacity = '1';
            } else {
                cart.style.display = 'flex';
                added.style.display = 'none';
                hellCat.style.opacity = '0';
            }

            setTimeout(function() {
                hellCat.style.opacity = '0';
            }, 5000);
        })

})



// document.addEventListener('DOMContentLoaded', function() {
//     const audioPlayer = document.getElementsByClassName("getarb")[0];

    
//     audioPlayer.volume = 0.4;
// });