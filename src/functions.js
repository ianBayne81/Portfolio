//GSAP NPM modules code
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

// letters to bounce in from top of screen when page loads
const rehomeLetters = function () {
    
gsap.from("#i", {duration: 4, y: -300, opacity: 0, delay: 0, ease: "bounce"})
gsap.from("#a", {duration: 4, y: -300, opacity: 0, delay: 0.5, ease: "bounce"})
gsap.from("#n", {duration: 4, y: -300, opacity: 0, delay: 1, ease: "bounce"})
gsap.from("#b", {duration: 4, y: -300, opacity: 0, delay: 1.5, ease: "bounce"})
gsap.from("#aa", {duration: 4, y: -300, opacity: 0, delay: 2, ease: "bounce"})
gsap.from("#y", {duration: 4, y: -300, opacity: 0, delay: 2.5, ease: "bounce"})
gsap.from("#nn", {duration: 4, y: -300, opacity: 0, delay: 3, ease: "bounce"})
gsap.from("#e", {duration: 4, y: -300, opacity: 0, delay: 3.5, ease: "bounce"})
gsap.from("#dot", {duration: 4, y: -300, opacity: 0, delay: 4, ease: "bounce"})
gsap.from("#ii", {duration: 4, y: -300, opacity: 0, delay: 4.5, ease: "bounce"})
gsap.from("#o", {duration: 4, y: -300, opacity: 0, delay: 5, ease: "bounce"})

}

//about me button appears within about me container element
const aboutMeSelect = document.querySelector('#about-me-container')
const aboutMeButton = document.createElement('button')
aboutMeButton.textContent = 'learn more about me'
aboutMeButton.classList.add('about-me-button')

const renderLearnMoreButton = () => {
    aboutMeSelect.appendChild(aboutMeButton)
}

//upon click of renderLearnMoreButton this span will appear below video element 
const aboutMeEl = document.querySelector('#more-span')
const aboutMeSpan = document.createElement('span')

const aboutMePara = document.createElement('p')
aboutMePara.textContent = 'My family and I reside in Townsville, North Queensland, Australia. \
 My experience includes time spent in the Australian Defence Force followed by time spent in the transport \
 industry, completing operational, supervisor and manager level roles respectively. \
 My passion for coding and learning new web development skills has helped me achieve the deployment of this \
 web development portfolio displaying the use of html5, CSS3 and modern Javascript languages. \
 My goal is to continue to build on these skills, learning and creating exciting opportunities. Please enjoy.' 

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


export { rehomeLetters, renderLearnMoreButton, initiateSpanText }