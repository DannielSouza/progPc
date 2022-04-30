/* Header animation */
window.addEventListener('scroll', function(){
    const header = this.document.querySelector('.header');
    if(this.window.innerWidth >= 1100){
    header.classList.toggle('sticky', this.window.scrollY > 0)}
  })










/* Top button appear */
window.addEventListener('scroll' , function(){
    const TopButton = this.document.getElementById("topButton")
    TopButton.classList.toggle('appear', this.window.scrollY > 150)



})



/* Card flip animation */

const cards1 = document.querySelectorAll("[data-card1]")

function cardflip1(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.65) 
    cards1.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add("flip")
        }
    })
}

window.addEventListener("scroll", function(){

    cardflip1()

})


/* CARD2 */
const cards2 = document.querySelectorAll("[data-card2]")

function cardflip2(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.65) 
    cards2.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add("flip")
        }
    })
}

window.addEventListener("scroll", function(){

    cardflip2()

})

/* CARD3 */
const cards3 = document.querySelectorAll("[data-card3]")

function cardflip3(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.65) 
    cards3.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add("flip")
        }
    })
}

window.addEventListener("scroll", function(){

    cardflip3()

})






const target = document.querySelectorAll("[data-animation]")
const animationClass = "animate"

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85) 
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }
    })
}

window.addEventListener("scroll", function(){

    animeScroll()

})



const target2 = document.querySelectorAll("[data-steps]")

function animeScroll2(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.70) 
    target2.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }
    })
}

window.addEventListener("scroll", function(){

    animeScroll2()

})




/* Mobile button */

const btnMobile = document.getElementById("btnMobile")

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefalt()
    const nav = document.getElementById("navId")
    nav.classList.toggle('active')
    

    headerHeigth();


}



btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)





let card1 = document.getElementById("card1")
let carModel2 = document.getElementById("card2")
let carModel3 = document.getElementById("card3")


function flip1(){

    card1.classList.toggle('flip')

}

/* function flip2(){

    card2.classList.toggle('flip')

}

function flip3(){

    card3.classList.toggle('flip')

} */