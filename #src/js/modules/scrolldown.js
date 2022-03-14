export const scrolldown = () => {
    const btn = document.querySelector('.hero__content_scroll');

    if(btn) {
        const btnEl = btn.querySelector('img');

        btnEl.addEventListener('click', () => {
            document.documentElement.scrollTo(0, window.innerHeight);
        })
    }
}