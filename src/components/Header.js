const _createMenu = Symbol();
const _customer = Symbol();

export class Header {

    constructor(categories, location) {
        this.categories = categories;
        this.location = location;
    }

    [_createMenu](categories){
            let menuDiv = $("<div>");
            $(menuDiv).attr("class", "menu");
            $.map($(categories), function(category, index){
                let hyperlink = $("<a>");
                $(hyperlink).attr("href", "#");
                $(hyperlink).text(category.name);
                let image = $("<img>");
                $(image).attr("src", category.icon);
                $(image).attr("alt", category.altTag);
                $(hyperlink).prepend($(image));
                $(menuDiv).append($(hyperlink));
            })
            return $(menuDiv);
    }

    [_customer](){
        let customerDiv = $("<div>");
        let imageLogin = $("<img>");
        let imageShoppingCar = $("<img>");
        let imageHamburgerMenu = $("<img>");

        $(customerDiv).attr("class", "customer");
        $(imageLogin).attr("src", "./img/web/user.png");
        $(imageLogin).attr("alt", "pet shop");
        $(imageLogin).attr("class", "login");
        $(imageShoppingCar).attr("src", "./img/web/shopping-cart.png");
        $(imageShoppingCar).attr("alt", "pet shop");
        $(imageShoppingCar).attr("class", "shopping-car");
        $(imageHamburgerMenu).attr("src", "./img/web/hamburger-menu.png");
        $(imageHamburgerMenu).attr("alt", "pet shop");
        $(imageHamburgerMenu).attr("class", "hamburger-menu");
        $(customerDiv).append($(imageLogin));
        $(customerDiv).append($(imageShoppingCar));
        $(customerDiv).append($(imageHamburgerMenu));

        return $(customerDiv);
    }

    createHeader(){
        $(()=>{
            let headerDiv = $("<header>");
            let image = $("<img>");
            let hyperlink = $("<a>");
            $(hyperlink).attr("href", "#");
            $(image).attr("src", './img/web/logo.png');
            $(image).attr("alt", "pet shop");
            $(image).attr("class", "logo");

            $(hyperlink).append($(image));
            $(headerDiv).append($(hyperlink));
            $(headerDiv).append(this[_createMenu](this.categories));
            $(headerDiv).append(this[_customer]);
            this.location.prepend($(headerDiv));
        })
    }
}