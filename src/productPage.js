import { Header } from './components/Header.js';
import { Slider } from './components/Slider.js';
import { Footer } from './components/Footer.js';
import { Product } from './components/Product.js';

$(() => {
    $.get('http://localhost:3000/api/categories', function(data){
        const header = new Header(data, $('.content-background'), '../');

        header.createHeader();
    })
})

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const id = getUrlParameter('id');

$(() => {

    $.get(`http://localhost:3000/api/product/${id}`, function(data){
        let firstProduct = new Product(data,$('.page'),'../');
        firstProduct.createProductBox();

        $.get('http://localhost:3000/api/products/date/7', function(data){
        let sliderNews = new Slider('Novinky', data, $('.page'), '../');
        sliderNews.createProductSlider();

        $.get('../src/animation/slider.js', function(script) {
            if(script != null){
                eval(script);
            }
        });
    })
    })
})

let footer = new Footer($('.page'));
footer.createFooter();
