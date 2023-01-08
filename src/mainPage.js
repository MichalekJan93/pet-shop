import { Header } from './components/Header.js';
import { Slider } from './components/Slider.js';
import { Benefits } from './components/Benefits.js';
import { BlogPost } from './components/BlogPost.js';
import { Footer } from './components/Footer.js';

$(() => {
    $.get('http://localhost:3000/api/categories', function(data){
        const header = new Header(data, $('.content-background'), '');

        header.createHeader();
    })
})

$(() => {
    $.get('http://localhost:3000/api/benefits', function(data){
        let benefit = new Benefits(data, $('.page'));
        benefit.createBenefits();
    })

    $.get('http://localhost:3000/api/products/7', function(data){
        let sliderNews = new Slider('Novinky', data, $('.page'), '');
        sliderNews.createProductSlider();

        $.get('./src/animation/slider.js', function(script) {
            eval(script);
        });
    })

    $.get('http://localhost:3000/api/posts/1', function(data){
        let post = new BlogPost(data, $('.page'));
        post.createBlogPost();
    })

    $.get('http://localhost:3000/api/products/date/7', function(data){
        let sliderBestProducts = new Slider('Nejoblíbenější produkty', data, $('.page'), '');
        sliderBestProducts.createProductSlider();
    })
})



let footer = new Footer($('.page'));
footer.createFooter();


