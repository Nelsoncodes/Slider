const progressDiv = document.querySelector('.progress')
const anim =document.querySelector('.anim')
const nextBtn =document.querySelector('#next')
const prevBtn =document.querySelector('#prev')
// console.log(prevBtn);
const one =document.querySelector('.one')
const two =document.querySelector('.two')
const three =document.querySelector('.three')
const four =document.querySelector('.four')



let n = 0
one.style.border = '1px solid #68b2e4'
// functions
function slideRight(){
    n += 35
    console.log(n);
    // if(n > 0){
    //     n < 105
    // }
    if(n > 105){
        n = 105
    }

    if (n == 0) {
        four.style.border = '1px solid #e0e0e0'
        three.style.border = '1px solid #e0e0e0'
        two.style.border = '1px solid #e0e0e0'
        one.style.border = '1px solid #68b2e4'   
    }


    if (n == 35) {
        one.style.border = '1px solid #68b2e4'
        two.style.border = '1px solid #68b2e4'
    }

    if (n == 70) {
        one.style.border = '1px solid #68b2e4'
        two.style.border = '1px solid #68b2e4'
        three.style.border = '1px solid #68b2e4'
    }

    if (n == 105) {
        one.style.border = '1px solid #68b2e4'
        two.style.border = '1px solid #68b2e4'
        three.style.border = '1px solid #68b2e4'
        four.style.border = '1px solid #68b2e4'
    }
        anim.style.width = `${n}%`
}


function slideLeft(){
    n -= 35
    // if(n < 105){
    //     n > 0
    // }

    if(n < 0){
        n = 0
    }

    if (n == 105) {
        four.style.border = '1px solid #68b2e4'
        three.style.border = '1px solid #68b2e4'
        two.style.border = '1px solid #68b2e4'
        one.style.border = '1px solid #68b2e4'
    }


    if (n == 0) {
        two.style.border = '1px solid #e0e0e0'
        one.style.border = '1px solid #68b2e4'
    }

    if (n == 35) {
        three.style.border = '1px solid #e0e0e0'
        two.style.border = '1px solid #68b2e4'
        one.style.border = '1px solid #68b2e4'
    }

    if (n == 70) {
        four.style.border = '1px solid #e0e0e0'
        three.style.border = '1px solid #68b2e4'
        two.style.border = '1px solid #68b2e4'
        one.style.border = '1px solid #68b2e4'
    }
        anim.style.width = `${n}%`
}
// console.log(n)

// eventListeners
nextBtn.addEventListener('click', slideRight)
prevBtn.addEventListener('click', slideLeft)