const buttons = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
function addClassShow(event) {
    if(event.target && event.target.matches('[data-modal]')) {
        addShow();
    }
}
function addShow() {
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    document.body.classList.add('hidden');
    clearTimeout(time);
}
const time = setTimeout(addShow, 30000);
function addClassHide(event) {
    if((event.target && event.target.matches('[data-close]')) || (event.target && event.target.matches
('.modal')) || (event.target && event.code === 'Escape' && modal.classList.contains('show'))) {
        modal.classList.remove('show');
        document.body.classList.remove('hidden');
        modal.classList.add('hide');
    }
}
buttons.forEach(btn => {
    btn.addEventListener('click', addClassShow);
});
modal.addEventListener('click', addClassHide);
document.addEventListener('keydown', addClassHide);
function openModalScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.
scrollHeight - 2) { //!    window.scrollY  do not support safari IOS...
        addShow();
        window.removeEventListener('scroll', openModalScroll);
    }
}
window.addEventListener('scroll', openModalScroll);