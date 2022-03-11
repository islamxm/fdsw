export const scrolldown = () => {
    const btn = document.querySelector('.hero__content_scroll').querySelector('img');

    if(btn) {
        btn.addEventListener('click', () => {
            document.documentElement.scrollTo(0, window.innerHeight);
        })
    }
}