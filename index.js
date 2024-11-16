let closeBtn = document.querySelector('.bx-x')
let showBtn = document.querySelector('.bx-menu')
let menu = document.querySelector('.header ul')

showBtn.addEventListener('click',()=>{
    menu.classList.add('show')
})
closeBtn.addEventListener('click',()=>{
    menu.classList.remove('show')
})