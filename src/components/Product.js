const _createProductMainContainer = Symbol();
const _createParametersContainer = Symbol();
const _productRating = Symbol();
const _createProductDataContainer = Symbol();

export class Product{

    constructor(product, location, link){
        this.product = product;
        this.location = location;
        this.link = link;

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

    [_createProductMainContainer](title, rating, image, description, amount, price){
        let productMainInformationDiv = $('<div class="product-main-information"></>');
        let paragraph = $(`<p class="product-title">${title}</p>`);

        productMainInformationDiv.append(paragraph);

        let productRatingDiv = $("<div class='product-rating'></div>");
        let noRatingDiv = $("<div class='no-rating'></div>");
        productRatingDiv.append(this[_productRating](rating));
        productRatingDiv.append(noRatingDiv);
        productMainInformationDiv.append(productRatingDiv);

        let imageProduct = $(`<div class="image-product"><img src=${this.link + image} alt=${title}></div>`)
        productMainInformationDiv.append(imageProduct);

        let productInformationDiv = $(`
        <div class="product-information">
            <p class="product-title">${title}</p>
            <div class="product-rating">
                <div class="rating rating-4"></div>
                <div class="no-rating"></div>
            </div>
            <p class="description">${description}</p>
            <div class="availability">Můžete mít ined | Skladem > ${amount}</div>
            <div class="add-product-to-cart">
                <p>${price} Kč,-</p>
                <div class="number-pieces">
                    <button class="add-count">-</button>
                    <span class="value">0</span>
                    <button class="remove-count">+</button>
                </div>
                <button class="addToCart">Vložit do košíku</button>
            </div>
        </div>
        `);

        productMainInformationDiv.append(productInformationDiv);

        return productMainInformationDiv;
    }

    [_createParametersContainer](parameters){
        let parameterDiv = $('<div class="parametrs"></div>');
        let paragraph = $('<p class="caption">Parametry a specifikace</p>');
        let parameterTableDiv = $('<div class="parametr-table"></div>');

        $(parameterDiv).append(paragraph);
        $(parameterDiv).append(parameterTableDiv);

        /* $.each(parameters, function (key, value) {
            let parameterDiv = $('<div class="parametr"></div>');
            let parameterNameDiv = $(`<div class="parametr-name">${key}</div>`);
            let parameterValueDiv = $(`<div class="parametr-value">${value}</div>`);
            $(parameterDiv).append(parameterNameDiv);
            $(parameterDiv).append(parameterValueDiv);
            $(parameterTableDiv).append(parameterDiv);
        }); */
        return parameterDiv;
    }

    [_createProductDataContainer](longDescription, parameters){
        let productDataDiv = $(`
        <div class="product-data"
            <div class="long-description">
                <p class="caption">Detalní popis</p>
                <p>${longDescription}</p>
            </div>
        </div>
        `);

        productDataDiv.append(this[_createParametersContainer]);

        return productDataDiv;
    }

    createProductBox(){
        let productContentDiv = $('<div class="product-content"></div>');
        productContentDiv.append(this[_createProductMainContainer](this.product.name, this.product.rating, this.product.image, this.product.description, this.product.amount, this.product.price));
        $('.product-information product-title').after(this[_productRating](this.product.rating));
        productContentDiv.append(this[_createProductDataContainer](this.product.longDescription, this.product.parameters));
        this.location.append(productContentDiv);
    }
}