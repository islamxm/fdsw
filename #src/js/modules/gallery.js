import { Fancybox, Carousel } from '@fancyapps/ui';

export const gallery = () => {
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            Carousel: {
                fill: false,
                center: true
            }
        }
    })
    

}