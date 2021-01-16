const body = document.getElementsByTagName('body');
const toggleMenu = document.getElementsByClassName('menu-toggle');
const navLinks = document.getElementsByClassName('nav-links');
const modal = document.getElementsByClassName('modal');
const openModal = document.getElementsByClassName('open-modal');
const closeModal = document.getElementsByClassName('close-modal');


for(let i=0; i < toggleMenu.length; i++){
    toggleMenu[i].addEventListener('click', () => {
        navLinks[i].classList.toggle('active');
    })
}

for(let j=0; j<modal.length; j++){
 
        openModal[j].addEventListener('click', () => {
            modal[j].classList.add('modal-active');
            body[0].classList.add('scroll-disable');
            closeModal[j].addEventListener('click', () => {
                modal[j].classList.remove('modal-active');
                if(!modal[j].classList.contains('modal-active')){
                    body[0].classList.remove('scroll-disable');
                }
            })
        })

}

