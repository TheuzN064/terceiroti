       // Lógica do modal
       const music = document.getElementById('background-music');
       const toggleButton = document.getElementById('music-toggle');

       // Define o volume inicial
       music.volume = 0.4; // Volume inicial em 20%

       toggleButton.addEventListener('click', () => {
      
           if (music.paused) {
               music.play();
               toggleButton.textContent = '🔊';
           } else {
               music.pause();
               toggleButton.textContent = '🔈';
           }
       });

       const promoImg = document.getElementById('promo-img');
       const modalOverlay = document.getElementById('modal-overlay');
       const modalClose = document.getElementById('modal-close');

       promoImg.addEventListener('click', () => {
           modalOverlay.style.display = 'block';
       });

       modalClose.addEventListener('click', () => {
           modalOverlay.style.display = 'none';
       });

       modalOverlay.addEventListener('click', (e) => {
           if (e.target === modalOverlay) {
               modalOverlay.style.display = 'none';
           }
       });

       // Flocos de neve dinâmicos
       const snowContainer = document.getElementById('snow-container');
       for (let i = 0; i < 70; i++) { // Agora com 100 flocos
           const flake = document.createElement('div');
           flake.className = 'snowflake';
           flake.innerText = '❄';
           flake.style.left = `${Math.random() * 100}vw`;
           flake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Velocidade aleatória
           flake.style.fontSize = `${Math.random() * 10 + 10}px`; // Tamanho aleatório
           snowContainer.appendChild(flake);
       }
