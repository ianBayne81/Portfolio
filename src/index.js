import { rehomeLetters, renderLearnMoreButton, initiateSpanText } from './functions.js'

//GSAP NPM modules code
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

//Rehome letter elements upon page load

window.onload = () => {
    rehomeLetters()
}


//delay project links opening for 1.5s to allow for project button animations to complete
document.getElementById("project-container").addEventListener("click", function(e) {

    if (e.isTrusted) {
    e.preventDefault()
    setTimeout(function(){
        e.target.click()
    }, 1500)
    }
})
//Learn more button added
renderLearnMoreButton()

document.querySelector('.about-me-button').addEventListener("click", (e) => {
    initiateSpanText()
})

