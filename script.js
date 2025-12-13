document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false,
    });

    const cover = document.getElementById('cover');
    const openBtn = document.getElementById('open-invitation');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('bg-music');
    const toggleMusicBtn = document.getElementById('toggle-music');
    const musicControl = document.getElementById('music-control');
    let isPlaying = false;

    // Handle Open Invitation
    openBtn.addEventListener('click', function () {
        // Unlock scroll
        document.body.classList.add('open');
        
        // Visual transition
        cover.style.opacity = '0';
        setTimeout(() => {
            cover.classList.add('hidden');
            musicControl.classList.remove('hidden'); // Show music button
        }, 1000);

        // Try to play music
        playMusic();
    });

    // Music Control
    toggleMusicBtn.addEventListener('click', function () {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    function playMusic() {
        audio.play().then(() => {
            isPlaying = true;
            toggleMusicBtn.classList.add('playing');
        }).catch((err) => {
            console.log("Auto-play prevented by browser. User interaction needed.");
        });
    }

    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        toggleMusicBtn.classList.remove('playing');
    }

    // Parallax effect for hero (simple)
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const heroOverlay = document.querySelector('.hero-overlay');
        if (heroOverlay) {
            heroOverlay.style.background = `linear-gradient(to bottom, rgba(18,18,18, ${0.3 + scrolled * 0.001}), var(--bg-color))`;
        }
    });
});
