//GSAP NPM modules code
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

//Rehome letter elements upon page load using GSAP FLIP methods
const selectLetterI = document.querySelector('#i')
const selectLetterA = document.querySelector('#a')
const selectLetterN = document.querySelector('#n')
const selectLetterB = document.querySelector('#b')
const selectLetterAa = document.querySelector('#aa')
const selectLetterY = document.querySelector('#y')
const selectLetterNn = document.querySelector('#nn')
const selectLetterE = document.querySelector('#e')
const selectLetterDot = document.querySelector('#dot')
const selectLetterIi = document.querySelector('#ii')
const selectLetterO = document.querySelector('#o')
const letterHome = document.querySelector('#header-container')
const rehomeLetters = function () {
    let letterI = Flip.getState('#i')
    let letterA = Flip.getState('#a')
    let letterN = Flip.getState('#n')
    let letterB = Flip.getState('#b')
    let letterAa = Flip.getState('#aa')
    let letterY = Flip.getState('#y')
    let letterNn = Flip.getState('#nn')
    let letterE = Flip.getState('#e')
    let letterDot = Flip.getState('#dot')
    let letterIi = Flip.getState('#ii')
    let letterO = Flip.getState('#o')
    letterHome.appendChild(selectLetterI)
    letterHome.appendChild(selectLetterA)
    letterHome.appendChild(selectLetterN)
    letterHome.appendChild(selectLetterB)
    letterHome.appendChild(selectLetterAa)
    letterHome.appendChild(selectLetterY)
    letterHome.appendChild(selectLetterNn)
    letterHome.appendChild(selectLetterE)
    letterHome.appendChild(selectLetterDot)
    letterHome.appendChild(selectLetterIi)
    letterHome.appendChild(selectLetterO)
    Flip.from(letterI, {duration: 3, ease: "power1.out"})
    Flip.from(letterA, {duration: 3.5, ease: "power1.out"})
    Flip.from(letterN, {duration: 4, ease:"power1.out"})
    Flip.from(letterB, {duration: 4.5, ease: "power1.out"})
    Flip.from(letterAa, {duration: 5, ease: "power1.out"})
    Flip.from(letterY, {duration: 5.5, ease: "power1.out"})
    Flip.from(letterNn, {duration: 6, ease: "power1.out"})
    Flip.from(letterE, {duration: 6.5, ease: "power1.out"})
    Flip.from(letterDot, {duration: 7, ease: "power1.out"})
    Flip.from(letterIi, {duration: 7.5, ease: "power1.out"})
    Flip.from(letterO, {duration: 8, ease: "power1.out"})
}

//aboutme button appears over video element
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