import { compSlider } from './modules/compSlider';
import {header} from './modules/header';
import { menu } from './modules/menu';
import { resSlider } from './modules/resSlider';
import { newsSlider } from './modules/newsSlider';
import { scrolldown } from './modules/scrolldown';


document.addEventListener('DOMContentLoaded', () => {

    header();
    menu();
    // scrolldown();
    resSlider();
    compSlider();
    newsSlider();
    
})





