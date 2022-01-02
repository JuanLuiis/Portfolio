/* Esto inicializara AOS library */

AOS.init();

let menu = document.getElementById('menu');

let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', () => menu.classList.toggle('menu-toggle'))


/*------------------------*/
/* BUTTON AUTO SCROLL UP */
/*----------------------*/

  const btn_scrolltop = document.getElementById("btn_scrolltop")
    btn_scrolltop.addEventListener('click', () => {
      window.scrollTo(0, 0)
    })

  window.onscroll = () => {
    add_btn_scrolltop()
  }

  const add_btn_scrolltop = () => {
    if (window.scrollY < 100) {
      btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
      btn_scrolltop.classList.add("btn-scrolltop-on")
    }
  }


/*----------------*/
/* SKILLS BUTTON */
/*--------------*/

function mostrar_ocultar(input) {
    var skillbox=document.getElementById("skillbox")

    if (input.value=="Close") {
        skillbox.style.visibility="hidden";
        input.value="Click Here!"
    }
    else {
        skillbox.style.visibility="visible";
        input.value="Close"
    }
}