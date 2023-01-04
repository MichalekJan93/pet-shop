import { Header } from './components/Header.js';
import { Slider } from './components/Slider.js';
import { Benefits } from './components/Benefits.js';

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

$(() => {
    $('.hamburger-menu').on('click', function () {
        $('.menu').css('width', '200px');
    });
})

let benefits = [{
        id: 1,
        title: 'Doprava zdarma',
        image: './img/web/delivery-truck.png'
    },
    {
        id: 2,
        title: '99% spokojených zákazníků',
        image: './img/web/positive-vote.png'
    },
    {
        id: 3,
        title: 'Dárek zdarma',
        image: './img/web/gift-box.png'
    },
    {
        id: 4,
        title: '60 dnů na vrácení zboží',
        image: './img/web/product-return.png'
    }
]

let benefit = new Benefits(benefits, $('.page'));
benefit.createBenefits();

let products = [{
        id: 1,
        name: 'Přetahovadlo DOG FANTASY',
        image: './img/products/granuleBrit.jpg',
        description: 'Granule pro psy pro všechna seniorní plemena nízkou aktivitou.',
        longDescription: 'Granule pro psy pro všechna seniorní plemena nízkou aktivitou, lososová příchuť, živočišné bílkoviny 40%, tuky (kuřecí) 12%, s kloubní výživou, bez obilovin, dietní, Přepočet - 139 Kč/1 kg',
        price: '139',
        amount: '28',
        rating: '4',
        parametrs: {
            Hmotnost: '1 kg',
            Krmivo: 'Granule',
            Konzistence: 'Suché'
        },
        category: ['Psi', 'Krmivo'],
        mainCategory: 'Krmivo'
    },
    {
        id: 2,
        name: 'N&D PRIME cat neutered chicken&pomegranate',
        image: './img/products/granulePrime.jpg',
        description: 'Granule pro kočky pro všechna kastrovaná plemena nízkou aktivitou.',
        longDescription: 'Granule pro kočky pro všechna kastrovaná plemena nízkou aktivitou, kuřecí příchuť, čerstvé maso v sušině 30%, živočišné bílkoviny 96%, tuky (kuřecí) 11%, s kloubní výživou, bez obilovin, s antioxidanty a bez GMO, Přepočet - 379,33 Kč/1 kg',
        price: '569',
        amount: '24',
        rating: '5',
        parametrs: {
            Hmotnost: '1,5 kg',
            Krmivo: 'Granule',
            Konzistence: 'Suché'
        },
        category: ['Kočky', 'Krmivo'],
        mainCategory: 'Krmivo'
    },
    {
        id: 3,
        name: 'Royal Canin Mini Light Weight Care 3 kg',
        image: './img/products/royalCanin.jpg',
        description: 'Granule pro psy pro malá plemena s nízkou a normální aktivitou, kuřecí příchuť, tuky (živočišný a rybí ) 11%, s antioxidanty a dietní, Přepočet - 191,33 Kč/1 kg.',
        longDescription: 'Toto chutné krmivo je bohaté na vysoce stravitelné bílkoviny, které zajišťují, že si váš pes udrží svalovou hmotu při sníženém příjmu tuků a kalorií. Dietní granule pro psy jsou vyrobeny s velmi nízkým obsahem tuků, aby si váš mazlíček udržel ideální váhu a vyvaroval se zdravotních komplikací, které jsou spojené s nadváhou. Díky optimální kombinaci rozpustné a nerozpustné vlákniny bude mít váš pes pocit sytosti. Tato receptura zajišťuje také pravidelný a zdravý průchod střevy a lepší trávení. Mezi vlastnosti mastných kyselin, jako je omega 3, patří i protizánětlivý účinek. Dále jsou granule je bohaté na cenné omega 3 mastné kyseliny s dlouhým řetězcem EPA a DHA, které podporují klouby vašeho psa. Program výživy Light Weight Care je dostupný jako křupavé granule a chutné paštiky v kapsičce. Obě jsou nutričně kompletní a dokonale se doplňují. Proč nevyzkoušet paštiku jako doplněk granulí? Krmivo ROYAL CANIN® Light Weight Care Mini bylo vědecky testováno v chovných stanicích Royal Canin a je prokázáno, že obsahuje o 31 % méně tuků než běžné krmivo pro dospělé psy. To znamená, že výsledky krmiva jsou prokázaným úspěchem.',
        price: '574',
        amount: '24',
        rating: '5',
        parametrs: {
            Hmotnost: '3 kg',
            Krmivo: 'Granule',
            Konzistence: 'Suché'
        },
        category: ['Psi', 'Krmivo'],
        mainCategory: 'Krmivo'
    },
    {
        id: 4,
        name: 'EXPLORER DOG Obojek Hory',
        image: './img/products/explorerDog.jpg',
        description: 'Obojek pro psy - pro střední plemena, klasický, nastavitelný a pratelný, materiál polyester, obvod krku od 24 do 36 cm, šířka pásku 1,5 cm, modrá barva',
        longDescription: 'Obojek pro psy Explorer Dog nemůže na procházce s pejsek chybět. Materiálem obojku Explorer Dog je polyester. Modrá barva vyzdvihuje design obojku. Tento obojek lze jednoduše prát. Bavíme-li se o velikosti mazlíčka, obojek je vhodný pro střední plemena. Obvod krku by měl být nejméně 24 cm a maximální pak 36 cm.',
        price: '149',
        amount: '89',
        rating: '2',
        parametrs: {
            'Délka vodítka': '50 cm',
            'Barva': 'Modrá',
            'Materiál': 'Polyester',
        },
        category: ['Psi'],
        mainCategory: 'Psi'
    },
    {
        id: 5,
        name: 'Nature Land Living Tunel s kvítky',
        image: './img/products/natureLand.jpg',
        description: 'Dopřejte vašemu mazlíčkovi tu nejlepší péči s doplňkem stravy pro hlodavce Nature Land. Tato výtečná pochoutka neposkytne jen dobrou chuť, ale také živiny',        longDescription: 'Dopřejte vašemu mazlíčkovi tu nejlepší péči s doplňkem stravy pro hlodavce Nature Land. Tato výtečná pochoutka neposkytne jen dobrou chuť, ale také živiny, které tělo zvířátka nezbytně potřebuje pravidelně doplňovat. Doplněk stravy pro ježka, činčilu, králíka, křečka, morče, myš, potkana, osmáka, pískomila, zakrslého králíka a fretku se chlubí mnoha benefity. Doplněk stravy nabízí speciální složení, které hlodavcům dodá vše, co potřebují, bez ohledu na jejich věk..',
        price: '129',
        amount: '31',
        rating: '3',
        parametrs: {
            'Typ krmiva': 'Pamlsek',
            'Typ hračky': 'Tunel',
            'Materiál': 'Bylinky',
        },
        category: ['Drobní savci, Krmivo,Hračky'],
        mainCategory: 'Drobní savci'
    },
    {
        id: 6,
        name: 'Zolux poloviční kokosový ořech plněný lojem',
        image: './img/products/ZoluxKrmitko.jpg',
        description: 'Lojová koule - hmotnost 0,25 kg',
        longDescription: 'Zolux poloviční kokosový ořech plněný lojem se slunečnicovými semínky 250 g.',
        price: '98',
        amount: '22',
        rating: '2',
        parametrs: {
            'Typ krmiva': 'Lojová koule',
            'Hmotnost': '0,25 kg',
            'Druh ptáka': 'Venkovní ptactvo',
        },
        category: ['Ptáci, Krmivo,Hračky'],
        mainCategory: 'Krmivo'
    },
    {
        id: 7,
        name: 'Karlie Ptačí houpačka s dřevěnými korálky',
        image: './img/products/karlieHoupacka.jpg',
        description: 'Hračka pro ptáky - houpačka, závěsná, materiál dřevo',
        longDescription: 'Karlie Ptačí houpačka s dřevěnými korálky.',
        price: '179',
        amount: '2',
        rating: '5',
        parametrs: {
            'Typ hračky': 'Houpačka',
            'Hmotnost': '2 kg',
            'Druh ptáka': 'Všechny druhy',
        },
        category: ['Ptáci,Hračky'],
        mainCategory: 'Ptáci'
    }
]

let slider = new Slider('Novinky', products, $('.page'));
slider.createProductSlider();
