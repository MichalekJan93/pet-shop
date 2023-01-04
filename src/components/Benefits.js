
export class Benefits{

    constructor(benefits, location){
        this.benefits = benefits;
        this.location = location;
    }


    createBenefits(){
        let benefitsDiv = $('<div class="benefits"></div>');
        $.map(this.benefits, function (benefit) {
            let benefitDiv = $('<div class="benefit"></div>');
            let img = $('<img>').attr('src',benefit.image).attr('alt', benefit.title + ' pet shop.cz');
            let paragraph = $('<p>').text(benefit.title);
            benefitDiv.append(img);
            benefitDiv.append(paragraph);
            benefitsDiv.append(benefitDiv);
        });
        $(this.location).append(benefitsDiv);
    }
}