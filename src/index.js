

// letters to bounce in from top of screen when page loads

gsap.from(".letters", {y: -250, delay: 1.5, duration: 1.5, stagger: .25, ease: "back"})

// menu to slide in / options to lower on delay / svg to animate on click

const toggleMenu = document.querySelector(".menu-slide")
const toggleOptions = document.querySelectorAll(".option-button-curtain")
const closeDiv = document.querySelector(".close-div")

document.querySelector(".menu-button").addEventListener("click", function (e) {
    e.preventDefault()
    
    closeDiv.classList.toggle("close-div-down")

    toggleMenu.classList.toggle("menu-slide-active")

    toggleOptions.forEach(function (item) {
        item.classList.toggle("option-button-curtain-active")
    })

})

// menu option eventlisteners
const github = document.querySelector("#github")
const contact = document.querySelector("#contact")
const resume = document.querySelector("#resume")

github.addEventListener("click", function (e) {
    e.preventDefault()
    location.assign("https://github.com/ianBayne81")
})

contact.addEventListener("click", function (e) {
    e.preventDefault()
    location.assign("mailto:ian.bayne81series@gmail.com")
})

resume.addEventListener("click", function (e) {
    e.preventDefault()
    location.assign("images/Ian-Bayne.pdf")
})

// event listeners for project buttons / with 1.5s delay to allow for the css animation

document.querySelector("#buttonOne").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://volumecalculator.netlify.app")
    }, 1500)
})

document.querySelector("#buttonTwo").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://playhangmangame.netlify.app")
    }, 1500)  
})

document.querySelector("#buttonThree").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://yourlist.netlify.app")
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

document.querySelector("#buttonNine").addEventListener("click", function(e){
    e.preventDefault()
    setTimeout(() => {
        window.location.assign("https://galacticbattle.netlify.app")
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

//code for images element

//key variables
const selectDiv = document.querySelectorAll(".images")
let rightArray = []
let leftArray = []

//set up each div
selectDiv.forEach(function (item) {
    leftArray.push(item)
    item.style.zIndex = 0

    leftArray.forEach((number) => {
        number.style.left = leftArray.indexOf(number) * 10 + "px"
    })

    // let createPara = document.createElement('p')
    // createPara.textContent = item.id
    // item.appendChild(createPara)  
    
})

//eventlisteners for each div
selectDiv.forEach(function(item) {

    let startX
    //let startY
    let getId
    let result

    item.addEventListener('touchstart', function(e) {
        e.preventDefault()
        
            startX = e.touches[0].clientX
            //startY = e.touches[0].clientY
            getId = e.target.id
            result = document.getElementById(getId)
        
    })
        
    item.addEventListener('touchend', function(e) {
        e.preventDefault()

        let endX = e.changedTouches[0].clientX
        //let endY = e.changedTouches[0].clientY
        let resultX = endX - startX
        //let resultY = endY - startY
        
        if (!rightArray.includes(result) &&
                resultX > 5) { 

            if (rightArray.length === 0) {

                result.style.zIndex++
                let remove = leftArray.indexOf(result)
                leftArray.splice(remove, 1)
                
                rightArray.push(result)
                let right = (rightArray.indexOf(result) * 10)
                result.style.left = right + 200 + "px"
                result.style.transition = "left 2s"
                
            } else if (rightArray.length > 0) {

                const previousElementRight = rightArray[rightArray.length - 1]    
                let resultTwo = previousElementRight.style.zIndex
                result.style.zIndex = ++resultTwo 
                    
                let remove = leftArray.indexOf(result)
                leftArray.splice(remove, 1)
                
                rightArray.push(result)
                let right = (rightArray.indexOf(result) * 10)
                result.style.left = right + 200 + "px"
                result.style.transition = "left 2s"
                
                
            }

        } else if (!leftArray.includes(result) &&
                    resultX < -5) {
            
            if (leftArray.length === 0) {

                result.style.zIndex++
                let remove = rightArray.indexOf(result)
                rightArray.splice(remove, 1)
                
                leftArray.push(result)
                result.style.left = leftArray.indexOf(result) * 10 + "px"
                result.style.transition = "left 2s"
                
            } else if (leftArray.length > 0){

                const previousElementLeft = leftArray[leftArray.length - 1]
                let resultTwo = previousElementLeft.style.zIndex
                result.style.zIndex = ++resultTwo 

                let remove = rightArray.indexOf(result)
                rightArray.splice(remove, 1)
                
                leftArray.push(result)
                result.style.left = leftArray.indexOf(result) * 10 + "px"
                result.style.transition = "left 2s"
        
            }
            
        }
        
    })

    item.addEventListener('click', function(e) {
        e.preventDefault()

        if (e.pointerType === "mouse") {
            getId = e.target.id
            result = document.getElementById(getId)
        } else {
            return
        }
        
        if (!rightArray.includes(result)) { 

            if (rightArray.length === 0) {

                result.style.zIndex++
                let remove = leftArray.indexOf(result)
                leftArray.splice(remove, 1)
                
                rightArray.push(result)
                let right = (rightArray.indexOf(result) * 10)
                result.style.left = right + 200 + "px"
                result.style.transition = "left 2s"
                
            } else if (rightArray.length > 0) {

                const previousElementRight = rightArray[rightArray.length - 1]    
                let resultTwo = previousElementRight.style.zIndex
                result.style.zIndex = ++resultTwo 
                    
                let remove = leftArray.indexOf(result)
                leftArray.splice(remove, 1)
                
                rightArray.push(result)
                let right = (rightArray.indexOf(result) * 10)
                result.style.left = right + 200 + "px"
                result.style.transition = "left 2s"
                
                
            }

        } else if (!leftArray.includes(result)) {
            
            if (leftArray.length === 0) {

                result.style.zIndex++
                let remove = rightArray.indexOf(result)
                rightArray.splice(remove, 1)
                
                leftArray.push(result)
                result.style.left = leftArray.indexOf(result) * 10 + "px"
                result.style.transition = "left 2s"
                
            } else if (leftArray.length > 0){

                const previousElementLeft = leftArray[leftArray.length - 1]
                let resultTwo = previousElementLeft.style.zIndex
                result.style.zIndex = ++resultTwo 

                let remove = rightArray.indexOf(result)
                rightArray.splice(remove, 1)
                
                leftArray.push(result)
                result.style.left = leftArray.indexOf(result) * 10 + "px"
                result.style.transition = "left 2s"
        
            }
            
        }  
    })

})