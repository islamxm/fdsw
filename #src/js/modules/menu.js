export const menu = () => {
    const btn = document.querySelector('.menubar__btn');
    const mobbtn = document.querySelector('.header__mob');
    const menuItem = document.querySelector('.menu');

    if(btn) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menuItem.classList.toggle('active');
        })
    }

    if(mobbtn) {
        mobbtn.addEventListener('click', () => {
            mobbtn.classList.toggle('active');
            menuItem.classList.toggle('active');
        })
    }

    
}