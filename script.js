const container = document.getElementById('container');
const images = document.querySelectorAll('.images')
const buttons = document.querySelectorAll('.buttons')

let activeImage = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('left')){
            activeImage--
            if(activeImage < 0){
                activeImage = images.length - 1;
            }
            setActiveImage()
            console.log(`${activeImage} left`);
        }

        if(button.classList.contains('right')){
            activeImage++
            if(activeImage > images.length - 1){
                activeImage = 0;
            }
            setActiveImage()
            console.log(`${activeImage} right`);
        }
    })
})

function setActiveImage(){
    images.forEach(image => image.style.display = "none" )
        images[activeImage].style.display = "block"
}