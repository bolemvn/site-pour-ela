document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const initialScreen = document.querySelector('.initial-screen');
    const mainContent = document.querySelector('.main-content');

    // Gère le clic sur le bouton de démarrage
    if (startButton) {
        startButton.addEventListener('click', function() {
            initialScreen.style.display = 'none'; // Masque l'écran initial
            mainContent.style.display = 'block'; // Affiche le contenu principal
            // Optionnel: Faire défiler doucement vers le haut de la page une fois le contenu affiché
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Gère les boutons pour révéler/masquer les paroles
    const revealButtons = document.querySelectorAll('.reveal-button');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target; // Récupère l'ID de l'élément à cibler
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Toggle l'affichage de l'élément (masqué/affiché)
                if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                    targetElement.style.display = 'block';
                    this.textContent = 'Masquer les paroles'; // Change le texte du bouton
                } else {
                    targetElement.style.display = 'none';
                    this.textContent = 'Découvre les paroles secrètes'; // Rétablit le texte du bouton
                }
            }
        });
    });

    // Gère les boutons pour jouer votre voix
    const playMyVoiceButtons = document.querySelectorAll('.play-my-voice-button');

    playMyVoiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.dataset.audio; // Récupère l'ID de l'élément audio à jouer
            const audioElement = document.getElementById(audioId);

            if (audioElement) {
                // Pause et remet à zéro la lecture si déjà en cours
                audioElement.pause();
                audioElement.currentTime = 0;
                // Joue l'audio
                audioElement.play();
            }
        });
    });
});
