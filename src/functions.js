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
 I have spent the past 18 years in the transport and logistics industry \
 working in close teams completing operational, supervisor and manager level roles respectively. \
 My passion for coding and learning new web development skills has helped me achieve the deployment of this \
 web development portfolio displaying the use of html, CSS and Javascript languages supported with node.js modules \
 and webpack configuration. My goal is to utilise these skills in a full time role continually learning and contributing to \
 create exciting opportunities. Please enjoy.'

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


export { renderLearnMoreButton, initiateSpanText }