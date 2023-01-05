const _createContainer = Symbol();
const _dataInList = Symbol();
const _socialNetwork = Symbol();

export class Footer{

    constructor(location){
        this.containerHeaders = ['MŮJ ÚČET', 'VŠE O NÁKUPU', 'MŮJ ÚČET']
        this.containerHrefs = [['O nás', 'Kariéra', 'Kontakt', 'Zákaznická podpora'],['Obchodní podmínky','Ochrana osobních údajů', 'Reklamační podmínky', 'Dodací a platební podmínky'],['Moje nákupy', 'Moje údaje', 'Přihlášení', 'Registrace']];
        this.location = location;
    }

    [_createContainer](containerHeaders){
        const footerDiv = $('<div class="footer"></div>');

        for(let i=0; i < containerHeaders.length; i++){
            let containerDiv = $('<div class="container"></div>');
            let heading = $('<h3 class="footer-h3"></h3>').text(containerHeaders[i]);
            let list = $('<ul class="footer-list"></ul>');
            $(footerDiv).append($(containerDiv));
            $(containerDiv).append($(heading));
            $(containerDiv).append($(list));
        }
        return footerDiv;
    }

    [_dataInList](containerHrefs){
        let numb = 0;
        for (let index = 0; index < containerHrefs.length; index++) {
            for (let k = 0; k < containerHrefs[index].length; k++) {
                let li = $('<li>');
                let a = $('<a href="#"></a>').text(containerHrefs[index][k]);
                $(li).append($(a));
                $(`.footer-list:eq(${numb})`).append(li);
            }
            numb ++;
        }
    }

    [_socialNetwork](){
        let containerDiv = $('<div class="container"></div>');
        let heading = $('<h3 class="footer-h3"></h3>').text('NOVINKY NA VÁŠ E-MAIL');
        let newslatterDiv = $('<div class="newslatter-input"></div>');
        let input = $('<input type="text">');
        let button = $('<input type="button" value="Přihlásit k odběru">');
        let socialIconDiv = $('<div class="social-icon"></div>');

        for (let i = 0; i < 3; i++){
            $(socialIconDiv).append($('<a href="#"></a>'));
        }

        $(containerDiv).append($(heading));
        $(containerDiv).append($(newslatterDiv));
        $(newslatterDiv).append($(input));
        $(newslatterDiv).append($(button));
        $(containerDiv).append($(socialIconDiv));

        return containerDiv;
    }

    createFooter(){
        (this.location).after($('<footer>').append(this[_createContainer](this.containerHeaders)));
        this[_dataInList](this.containerHrefs);
        $('.footer').append(this[_socialNetwork]());
    }
}