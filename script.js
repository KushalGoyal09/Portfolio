const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("nav-toggle")
const linkDropdown = document.getElementById("link-dropdown")
const linklist = document.querySelector("#link-dropdown ul")
const topBtn = document.getElementById("top")
const links = linkDropdown.querySelectorAll("a")

navToggle.addEventListener('click',() => {
    const listHeight = linklist.getBoundingClientRect().height
    const containerHeight = linkDropdown.getBoundingClientRect().height

    if(containerHeight === 0) {
        linkDropdown.style.height = `${listHeight}px`
        navToggle.classList.add("nav-toggle-rotate")
    } else {
        linkDropdown.style.height = "0px"
        navToggle.classList.remove("nav-toggle-rotate")
    }
}) 

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    })
})

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 450) {
        topBtn.style.display = "flex"
    } else {
        topBtn.style.display = "none"
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        linkDropdown.style.height = "0px"
        navToggle.classList.remove("nav-toggle-rotate")      
    })
})

const slides = document.querySelectorAll('.slide')

for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    slide.style.left = `${index*100}%`
}
let counter = 0;
const manage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
const updateCounter = () => {
    counter++
    if(counter === slides.length) {
        counter = 0
    }
    manage()
}
const interval = setInterval(updateCounter,5000)