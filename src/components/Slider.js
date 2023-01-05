const _productBox = Symbol();
const _productRating = Symbol();
const _go = Symbol();

export class Slider {

    constructor(title, products, location) {
         this.title = title;
         this.products = products;
         this.location = location;
    }

    [_productRating](rating){
            let ratingDiv = $("<div>");
            switch(parseInt(rating)){
            case 1:
                $(ratingDiv).addClass('rating rating-1');
                break;
            case 2:
                $(ratingDiv).addClass('rating rating-2');
                break;
            case 3:
                $(ratingDiv).addClass('rating rating-3');
                break;
            case 4:
                $(ratingDiv).addClass('rating rating-4');
                break;
            case 5:
                $(ratingDiv).addClass('rating rating-5');
                break;
            default:
                $(ratingDiv).addClass('rating rating-5');
            }
            return ratingDiv;
    }


    [_productBox](products) {
        let sliderDiv = $('<div class="slider"</div>');
        $.map($(products), function(product) {
            let productBoxDiv = $('<div>').attr('class', 'product-box '+ product.id);
            $(sliderDiv).append(productBoxDiv);
            let img = $('<img class="product-img">')
            $(img).attr('src', product.image);
            $(img).attr('alt', product.name);
            $(productBoxDiv).append(img);

            let productRatingDiv = $('<div class="product-rating"></div>');
            let productNoRatingDiv = $('<div class="no-rating"></div>');
            $(productRatingDiv).append(this[_productRating](product.rating));
            $(productRatingDiv).append(productNoRatingDiv);
            $(productBoxDiv).append(productRatingDiv);

            let productTitleDiv = $('<div class="product-title"</div>');
            $(productTitleDiv).text(product.name);
            $(productBoxDiv).append(productTitleDiv);

            let productPriceDiv = $('<div class="product-price"</div>');
            $(productPriceDiv).text(product.price + ' Kč,-' );
            $(productBoxDiv).append(productPriceDiv);

        }.bind(this));

        return $(sliderDiv);
    }

    productPage(){
        const targetNode = document.querySelector(`.page`);
        
        const config = {
            childList: true,
            subtree: true,
        }

        const callback = (mutationList, observer) => {
            $('.product-box').on('click', function () {
                const className = $(this).attr('class');
                const gapIndex = className.indexOf(" ");
                console.log(className.substring(gapIndex, className.length));
              })
        }

        const observer = new MutationObserver(callback);

        observer.observe(targetNode, config);
    }

    createProductSlider(){
        let productSlider = $('<div>');
        $(productSlider).attr('class', 'product-slider ' + this.title)
        $(this.location).append($(productSlider));
        let titleDiv = $('<div class="title-products"></div>');
        let titleParagraph = $("<p>");
        $(titleParagraph).text(this.title);
        $(titleDiv).append($(titleParagraph));
        $(productSlider).append($(titleDiv));
        $(productSlider).append($(this[_productBox](this.products)));
        this.productPage(this.title);
    }
 }