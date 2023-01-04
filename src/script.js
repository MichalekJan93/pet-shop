import { Header } from './components/Header.js';

$(() => {
    $('.hamburger-menu').on('click', function () {
        $('.menu').css('width', '200px');
    });
})

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

const header = new Header(category, $('.content-background'));

header.createHeader();