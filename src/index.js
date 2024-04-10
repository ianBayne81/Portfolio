

// letters to bounce in from top of screen when page loads

gsap.from(".letters", {y: -250, delay: 1.5, duration: 1.5, stagger: .25, ease: "back"})

// event listeners for project buttons / with 1.5s delay to allow for the css animation

document.querySelector("#buttonOne").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://volumecalculator.netlify.com")
    }, 1500)
})

document.querySelector("#buttonTwo").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://playhangmangame.netlify.com")
    }, 1500)  
})

document.querySelector("#buttonThree").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://yourlist.netlify.com")
    }, 1500)  
})

document.querySelector("#buttonFour").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://www.jasy.io")
    }, 1500)  
})

document.querySelector("#buttonFive").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://www.tayla.io")
    }, 1500)  
})

document.querySelector("#buttonSix").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://handy-calc.netlify.app")
    }, 1500)  
})

document.querySelector("#buttonSeven").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://iansrockpaperscissors.netlify.app")
    }, 1500)  
})

document.querySelector("#buttonEight").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://personalcontacts.netlify.app")
    }, 1500)  
})


//create button to appear within the about me container element

const aboutMeSelect = document.querySelector('#about-me-container')
const aboutMeButton = document.createElement('button')
aboutMeButton.textContent = 'learn more about me'
aboutMeButton.classList.add('about-me-button')

const renderLearnMoreButton = () => {
    aboutMeSelect.appendChild(aboutMeButton)
}

//upon click of renderLearnMoreButton this span will appear 

const aboutMeEl = document.querySelector('#more-span')
const aboutMeSpan = document.createElement('span')

const aboutMePara = document.createElement('p')
aboutMePara.textContent = 'My family and I reside in Townsville, North Queensland, Australia. \
 My experience includes time spent in the Australian Defence Force followed by time spent in the transport \
 industry, completing operational, supervisor and manager level roles respectively. \
 My passion for coding and learning new web development skills has helped me achieve the deployment of this \
 web development portfolio displaying the use of html5, CSS3 and modern Javascript languages. \
 My goal is to continue to build on these skills, learning and creating exciting opportunities. Please enjoy.' 

 //create button to close and hide the text span
const minimiseButt = document.createElement('button')
minimiseButt.textContent = 'close'
minimiseButt.classList.add('close-span-button')


const initiateSpanText = () => {
    aboutMeEl.appendChild(aboutMeSpan)
    aboutMeSpan.appendChild(aboutMePara)
    aboutMeSpan.appendChild(minimiseButt)
}

minimiseButt.addEventListener("click", (e) => {
    aboutMeEl.innerHTML = ''
})

renderLearnMoreButton()

document.querySelector('.about-me-button').addEventListener("click", (e) => {
    initiateSpanText()
})

