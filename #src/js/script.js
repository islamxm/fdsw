import { compSlider } from './modules/compSlider';
import {header} from './modules/header';
import { menu } from './modules/menu';
import { resSlider } from './modules/resSlider';
import { newsSlider } from './modules/newsSlider';
import { scrolldown } from './modules/scrolldown';
import { tabs } from './modules/tabs';
import { ytHero } from './modules/ytHero';
import { gallery } from './modules/gallery';


document.addEventListener('DOMContentLoaded', () => {

    // let tag = document.createElement('script');

    // tag.src = "https://www.youtube.com/iframe_api";
    // let firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window.YT.ready(function() {
        let pl;

        pl = new YT.Player('player', {
            events: {
                'onReady': 'sa',
                'onStateChange': console.log('change'),

            }
        });


        
    
    
        let playBtn = document.querySelector('.hero__video_play');
    
        if(playBtn) {
            playBtn.addEventListener('click', () => {
                
                playBtn.previousElementSibling.style.cssText = 'opacity: 0; z-index: -1;';
                playBtn.style.cssText = 'opacity: 0; z-index: -1;';
                playBtn.nextElementSibling.style.cssText = 'z-index: 6';
            })
        }
    })
    
    header();
    menu();
    scrolldown();
    resSlider();
    compSlider();
    newsSlider();
    tabs();
    ytHero();
    gallery();
    
})





