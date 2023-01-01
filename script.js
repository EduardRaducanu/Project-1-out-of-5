const slides = document.querySelectorAll('.slide');

for (const slide of slides){
    for(let slideCount = 0; slideCount <= 2; slideCount++){
        slide.addEventListener('click', () => {
            slide.classList.toggle('active');
            slideCount =slideCount + 1;
            
            if (slideCount === 2){
                clearActiveSlides();
                slideCount = 0;
            }
        })
    }
} 

function clearActiveSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');   
    })
}