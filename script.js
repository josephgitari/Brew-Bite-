function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// Testimonial Slider
 const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const indicators = document.querySelectorAll(".indicator")
  let currentSlide = 0

  function showSlide(index) {
    testimonialSlides.forEach((slide) => slide.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    testimonialSlides[index].classList.add("active")
    indicators[index].classList.add("active")
    currentSlide = index
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
    showSlide(currentSlide)
  })

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  })

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index)
    })
  })

  // Auto-advance testimonials
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  }, 5000)


   //cube image slider
let angle = 0;
setInterval(() => {
  angle += 80;
  document.querySelector('.cube').style.transform = `rotateY(${angle}deg)`;
}, 3000);
