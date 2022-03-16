import Swiper, {Scrollbar} from 'swiper';

export const newsSlider = () => {
    const el = document.querySelector('#newsList');
    const wrapper = document.querySelector('#newsListWr');
    const slide = document.querySelectorAll('.nwItem');


    if(el) {
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 1200) {
                el.classList.add('swiper');
                wrapper.classList.add('swiper-wrapper');
                slide.forEach(sl => {
                    sl.classList.add('swiper-slide')
                })
        
                const slider = new Swiper(el, {
                    modules: [Scrollbar],
                    slidesPerView: 1,
                    spaceBetween: 30,
                    scrollbar: {
                        el: '.news__scrollbar',
                        draggable: true
                    },
                    breakpoints: {
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        }
                    }
                    
                })
            } else {
                el.classList.remove('swiper');
                wrapper.classList.remove('swiper-wrapper');
                slide.forEach(sl => {
                    sl.classList.remove('swiper-slide');
                    sl.style = '';
                });
                wrapper.style = '';
            }
        })
        if(window.innerWidth <= 1200) {
            el.classList.add('swiper');
            wrapper.classList.add('swiper-wrapper');
            slide.forEach(sl => {
                sl.classList.add('swiper-slide')
            })
    
            const slider = new Swiper(el, {
                modules: [Scrollbar],
                slidesPerView: 1,
                spaceBetween: 30,
                scrollbar: {
                    el: '.news__scrollbar',
                    draggable: true
                },
                breakpoints: {
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }
                
            })
        } else {
            el.classList.remove('swiper');
            wrapper.classList.remove('swiper-wrapper');
            slide.forEach(sl => {
                sl.classList.remove('swiper-slide');
                sl.style = '';
            });
            wrapper.style = '';
            
        }
    }

    
    
}