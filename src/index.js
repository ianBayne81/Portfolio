//create a white neat button to appear in section labelled "learn more about Ian"

// when clicked a span is activated on top of the bubble video backgroungd,

// also entailing another button to minimise span back to the initial button display


//about-me element

const aboutMe = document.querySelector('#about-me-container')

const aboutMeSpan = document.createElement('span')


const aboutMeButton = document.createElement('button')
aboutMeButton.textContent = 'learn more about me'


const aboutMePara = document.createElement('p')

const renderAboutMeButton = () => {
    aboutMe.appendChild(aboutMeButton)
}

renderAboutMeButton()

document.querySelector('button').addEventListener(click, (e) => {
    aboutMe.innerHTML = ''
    
})
