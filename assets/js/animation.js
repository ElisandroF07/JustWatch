"use client"

setTimeout(() => {
    const animationName = document.querySelectorAll('.animation')
    //const animationName = document.querySelectorAll('.animation');

const opcoes = {
    root:  null,
    rootMargin: '-150px 0px 0px 0px',
    threshold:  [0.1, 0.5 ,0.7, 0.9] 
}

const observer = new IntersectionObserver((elementos)=> {
    elementos.forEach((elemento) => {
        if(elemento.intersectionRatio > .3) {
          if (elemento.target.dataset.animation == "up")  {
                elemento.target.style.transform = 'translateY(0px)';
                elemento.target.style.opacity = '1';
                elemento.target.style.backgroundColor= '#006aff';
            }
          if (elemento.target.dataset.animation == "down") {
                elemento.target.style.transform = 'translateY(0px)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "downSVG") {
                elemento.target.querySelector('.svg').style.animation = "dash 2s forwards 1 ease-in"
            }
          if (elemento.target.dataset.animation == "left") {

                console.log('vi-te')
                elemento.target.style.transform = 'translateY(0px) translateX(0)';
          }
          if (elemento.target.dataset.animation == "right") {
                elemento.target.style.transform = 'translateX(0)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "scale-out") {
                elemento.target.style.transform = 'scale(1)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "scale-in") {
                elemento.target.style.transform = 'scale(1)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "rotate-left") {
                elemento.target.style.transform = 'rotate(0deg)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "rotate-right") {
                elemento.target.style.transform = 'rotate(0deg)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "down-left") {
                elemento.target.style.transform = 'translate(0px, 0px)';
                elemento.target.style.opacity = '1';
          }
          if (elemento.target.dataset.animation == "down-right") {
                elemento.target.style.transform = 'translate(0px, 0px)';
                elemento.target.style.opacity = '1';
          }
        }
        else {
            if (elemento.target.dataset.animation == "up")  {
                elemento.target.style.transform = 'translateY(50px)';
                elemento.target.style.opacity = '0';
            }
            if (elemento.target.dataset.animation == "down")  {
                elemento.target.style.transform = 'translateY(-50px)';
                elemento.target.style.opacity = '0';
            }
            if (elemento.target.dataset.animation == "downSVG")  {
                elemento.target.querySelector('.svg').style.animation = ""
            } 
            if (elemento.target.dataset.animation == "left")  {
                elemento.target.style.transform = 'translateX(100px)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "right")  {
                elemento.target.style.transform = 'translateX(-100px)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "scale-out")  {
                elemento.target.style.transform = 'scale(1.3)';
                elemento.target.style.opacity = '0';
            }
            if (elemento.target.dataset.animation == "scale-in")  {
                elemento.target.style.transform = 'scale(.7)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "rotate-left")  {
                elemento.target.style.transform = 'rotate(45deg)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "rotate-right")  {
                elemento.target.style.transform = 'rotate(-45deg)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "down-left")  {
                elemento.target.style.transform = 'translate(50px, -100px)';
                elemento.target.style.opacity = '0';
            } 
            if (elemento.target.dataset.animation == "down-right")  {
                elemento.target.style.transform = 'translate(-50px, -100px)';
                elemento.target.style.opacity = '0';
            } 
        }
    })
}, opcoes)

animationName.forEach((el) =>{
    observer.observe(el)
})
}, 200);