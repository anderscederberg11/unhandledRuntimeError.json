document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.switch-checkbox');
    const fullSwitch = this.querySelector('.toggle-switch');
    const cart = document.querySelector('.cart');
    const added = document.querySelector('.added');
    const hellCat = document.querySelector('.hellcat-container');
    const audioPlayer = document.querySelector('.getarb');
    const typeAudio = document.querySelector('.type-sh');
    const blurContainers = document.querySelectorAll('.blur-container');
    const donateButton = document.querySelector('.donate');
    const amountElement = document.getElementById('amount');
    let amount = parseInt(amountElement.textContent.replace(/\D/g, ''));
    const amountContainer = document.querySelector('.donate-message');

    function incrementAmount() {
        amount += 1;
        amountElement.textContent = `$${amount} USD`;
    }

    setInterval(incrementAmount, 10);

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            cart.style.display = 'none';
            added.style.display = 'flex';
            hellCat.style.opacity = '1';
            setTimeout(() => {
                hellCat.style.opacity = '0';
            }, 5000);
        } else {
            cart.style.display = 'flex';
            added.style.display = 'none';
            hellCat.style.opacity = '0';
        }
    });

    audioPlayer.volume = 0.4;
    typeAudio.volume = 0.3;

    blurContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            // Ensure the .blur is targeted correctly
            const blurDiv = container.querySelector('.blur');
            blurDiv.style.transform = 'translateY(100%)';
        });

        container.addEventListener('mouseleave', () => {
            const blurDiv = container.querySelector('.blur');
            blurDiv.style.transform = 'translateY(0)';
        });
    });



    document.querySelectorAll('.main-container').forEach((container, index) => {
        container.addEventListener('mouseenter', () => {
            container.style.backgroundColor = 'var(--light-gray)';
            if (index === 1) {
                audioPlayer.pause();
                typeAudio.play();
                donateButton.style.zIndex = '3';
            }
            if (index === 0) {
                fullSwitch.style.zIndex = '3';
            }
            
        });

        container.addEventListener('mouseleave', () => {
            container.style.backgroundColor = 'var(--white)';
            if (index === 1) {
                typeAudio.pause();
                audioPlayer.play();
                donateButton.style.zIndex = '1';
            }
            if (index === 0) {
                fullSwitch.style.zIndex = '1';
            }
        });
    });

    fullSwitch.addEventListener('mouseenter', function() {
        
    })

    donateButton.addEventListener('click', function() {
        amountContainer.style.display = 'flex';
        const interval = setInterval(incrementAmount, 10); // Adjust this value as needed for the increment speed
        setTimeout(() => {
            amountContainer.style.display = 'none';
            clearInterval(interval); // Stop the interval when hiding the container
        }, 10000); // 10 seconds
    });

    const gameArea = document.getElementById('gameArea');
    const ball = document.getElementById('ball');
    const scoreBoard = document.getElementById('scoreBoard');
    
    let score = 0;
    let ballSpeed = 2;
    let ballX = Math.random() * (gameArea.clientWidth - ball.clientWidth);
    let ballY = Math.random() * (gameArea.clientHeight - ball.clientHeight);
    let ballDirectionX = ballSpeed;
    let ballDirectionY = ballSpeed;
    
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    
    ball.addEventListener('click', () => {
        score++;
        scoreBoard.innerText = `Score: ${score}`;
    
        if (score === 5) {
            alert('Congratulations! You reached a score of 5!');
        }
    
        ballSpeed += 0.5;
        ballDirectionX = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
        ballDirectionY = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    });
    
    function moveBall() {
        ballX += ballDirectionX;
        ballY += ballDirectionY;
    
        if (ballX <= 0 || ballX >= gameArea.clientWidth - ball.clientWidth) {
            ballDirectionX *= -1;
        }
    
        if (ballY <= 0 || ballY >= gameArea.clientHeight - ball.clientHeight) {
            ballDirectionY *= -1;
        }
    
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
    
        requestAnimationFrame(moveBall);
    }
    
    moveBall();
    

});
