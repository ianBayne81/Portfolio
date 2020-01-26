import { renderHeading, renderLearnMoreButton, initiateSpanText } from './functions.js'

renderHeading()

//delay project links opening for 1.5s to allow for project button animations to complete
document.getElementById("project-container").addEventListener("click", function(e) {

if (e.isTrusted) {
    e.preventDefault()
    setTimeout(function(){
        e.target.click()
    }, 1500)
}
})

renderLearnMoreButton()

document.querySelector('.about-me-button').addEventListener("click", (e) => {
    initiateSpanText()
})

