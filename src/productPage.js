import { Header } from './components/Header.js';
import { Slider } from './components/Slider.js';
import { Footer } from './components/Footer.js';

let category = [
    {
        id: 1,
        name: 'psi',
        icon:  './img/category/dog.png',
        altTag: 'Pamlsky pro psi'
    },
    {
        id: 2,
        name: 'kočky',
        icon: './img/category/cat.png',
        altTag: 'Pamlsky pro kocky'
    },
    {
        id: 3,
        name: 'drobní savci',
        icon: './img/category/rat.png',
        altTag: 'Pamlsky pro drobne savce'
    }
]

const header = new Header(category, $('.content-background'), '../');
header.createHeader();

let footer = new Footer($('.page'));
footer.createFooter();


const url = new URL(window.location.href);

const product = url.searchParams.get('product');

console.log(product);