import Swiper, {Scrollbar} from 'swiper';


export const resSlider = () => {
    const el = document.querySelector('.res__body');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Scrollbar],
            slidesPerView: 1,
            spaceBetween: 20,
            scrollbar: {
                el: '.res__body_scrollbar',
                draggable: true,
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        })
    }
} 