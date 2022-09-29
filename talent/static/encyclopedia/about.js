document.addEventListener('DOMContentLoaded', function() {

    // Find heading
    const about = document.querySelector('#about');
    const about1 = document.querySelector('#about1');

    // Pause Animation by default
    about.style.animationPlayState = 'paused';
    about1.style.animationPlayState = 'paused';

    // Wait for button to be clicked
    document.querySelector('#welcome').onclick = () => {

        // If animation is currently paused, begin playing it
        if (about.style.animationPlayState == 'paused') {
            about.style.animationPlayState = 'running';
            about1.style.animationPlayState = 'running';
        }
    }

})
