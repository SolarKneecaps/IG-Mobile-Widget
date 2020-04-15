const bottomDrawer = document.querySelector('.main__bottom-drawer');
const moreBtns = document.querySelectorAll('.main__container__header__morebtn');
const appContainer = document.querySelector('.main');
//const bottomDrawerbtns = document.get
let menuDelay = 750;





moreBtns.forEach(btn=>{
    function closeMenu(e){
        if(e.target.className =='main__bottom-drawer__menu__container__option'){return};
        appContainer.removeEventListener('click', closeMenu);
        bottomDrawer.classList.remove('main__bottom-drawer-visible');
        setTimeout(()=>{btn.addEventListener('click', openMenu)}, menuDelay);
    }
    
    function openMenu(){
        btn.removeEventListener('click', openMenu);
        setTimeout(()=>{appContainer.addEventListener('click', closeMenu)}, menuDelay )
        bottomDrawer.classList.add('main__bottom-drawer-visible');
    }

    btn.addEventListener('click', openMenu);
})

/* const bottomDrawer = document.querySelectorAll('.main__bottom-drawer');
const moreBtn = document.querySelectorAll('.main__container__header__morebtn');
const appContainer = document.querySelectorAll('.main__container');
let menuDelay = 750;



function closeMenu(){
    appContainer.removeEventListener('click', closeMenu);
    bottomDrawer.classList.remove('main__bottom-drawer-visible');
    setTimeout(()=>{moreBtn.addEventListener('click', openMenu)}, menuDelay);
}

function openMenu(){
    moreBtn.removeEventListener('click', openMenu);
    setTimeout(()=>{appContainer.addEventListener('click', closeMenu)}, menuDelay )
    bottomDrawer.classList.add('main__bottom-drawer-visible');
}

moreBtn.addEventListener('click', openMenu); */




const heartbtn = document.querySelectorAll('.main__container__icons__heart');
heartbtn.forEach(heart=>{
    heart.addEventListener('click', e=>{
        heart.classList.toggle('far');
        heart.classList.toggle('fas');
        if( heart.style.color === 'red'){
            heart.style.color = 'white';
        }
        else{
            heart.style.color = 'red';
        }
    });
})

const savebtn = document.querySelectorAll('.main__container__icons__save');
savebtn.forEach(save=>{
    save.addEventListener('click', e=>{
        save.classList.toggle('far');
        save.classList.toggle('fas');
    });
})