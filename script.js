const button = document.querySelector('.switch-container')
const video = document.querySelector('video')

button.addEventListener('click', () => {
    if(!button.classList.contains('slide')){
        button.classList.add('slide')
        video.pause();
    } else{
        button.classList.remove('slide')
        video.play();
    }
})

// DOMContentLoaded => When the structure of HTML have been loaded, but not rendered yet. So we use this when we want to render HTML in the dynamic/run time
// Load Event => When the HTML have fully loaded

const gif = document.getElementById('preload-container')

    

window.addEventListener('load', () => {
    gif.classList.add('hide-preloader')
})