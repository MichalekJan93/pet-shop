const _createMenu = Symbol();
const _customer = Symbol();

export class Header {

    constructor(categories, location, link) {
        this.categories = categories;
        this.location = location;
        this.link = link;
    }

    [_createMenu](categories, link){
            let menuDiv = $("<div>");
            let $cross = $("<div class=close-menu></div>");
            menuDiv.append($cross);
            $(menuDiv).attr("class", "menu");
            $.map($(categories), function(category){
                let hyperlink = $("<a>");
                $(hyperlink).attr("href", "#");
                $(hyperlink).text(category.name);
                let image = $("<img>");
                $(image).attr("src", link + category.icon);
                $(image).attr("alt", category.altTag);
                $(hyperlink).prepend($(image));
                $(menuDiv).append($(hyperlink));
            })

            return $(menuDiv);
    }

    [_customer](link){
        let customerDiv = $("<div>");
        let imageLogin = $("<img>");
        let imageShoppingCar = $("<img>");
        let imageHamburgerMenu = $("<img>");

        $(customerDiv).attr("class", "customer");
        $(imageLogin).attr("src", link + "./img/web/user.png");
        $(imageLogin).attr("alt", "pet shop");
        $(imageLogin).attr("class", "login");
        $(imageShoppingCar).attr("src", link + "./img/web/shopping-cart.png");
        $(imageShoppingCar).attr("alt", "pet shop");
        $(imageShoppingCar).attr("class", "shopping-car");
        $(imageHamburgerMenu).attr("src", link + "./img/web/hamburger-menu.png");
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
            $(hyperlink).attr("href", this.link + "index.html");
            $(image).attr({
                "src": this.link + './img/web/logo.png',
                "alt": "pet shop",
                "class": "logo"
            });
            $(hyperlink).append($(image));
            $(headerDiv).append($(hyperlink));
            $(headerDiv).append(this[_createMenu](this.categories, this.link));
            $(headerDiv).append(this[_customer](this.link));
            this.location.prepend($(headerDiv));

            $.get('./src/animation/menu.js', function(script) {
            eval(script);
            });
        })
    }
}