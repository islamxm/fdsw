export const header = () => {
    const el = document.querySelector('.header');
    if(el) {
        document.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop >= 10) {
                el.classList.add('active');
            }
            if(document.documentElement.scrollTop < 10) {
                el.classList.remove('active');
            }
        })
    }
}