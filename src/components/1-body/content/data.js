class Data{
    constructor(title, url, year, description)
    {
        this.title = title;
        this.img = process.env.PUBLIC_URL + "/images/" + url;
        this.year = year;
        this.description = description;
    }
}

function setImgUrl(url){
    return process.env.PUBLIC_URL + "/images/" + url;
}

// VIDEO GAMES
// let bluePeace = new Data("Blue peace", "/games/blue_peace.jpg", "2022",
// "BluePeace is a visual naovle" +
//  "visual novel");
 let bluePeace = {
    title: "Blue Peace",
    img: setImgUrl("/games/blue_peace.jpg"),
    year: "2022",
    engine: "Godot",
    genre: "narrative game",
    type: "visual novel",
    team: "1 audio, 2 artists, 2 programers",
    role: "gameplay programer, game designer, writer, UI programer",
    description:"Blue peace is a visual novel in which the player plays as a student" +
    "going to their grand parent's for summer break.",
    videosrc:"https://www.youtube.com/embed/1d7G5BOXv-U",
 }

let handleTheCrate = {
    title: "Handle the crate",
    img: setImgUrl("/games/handle_the_crate.jpg"),
    year: "2022",
    engine: "Godot",
    genre: "puzzle game",
    type: "sokoban",
    team: "1 artist 4 programers",
    role: "programer, level designer",
    tasks: "shaders, tutorial, highscores, levels",
    description:"Handle the crate is a puzzle which revisits the classic rules of sokoban:"+
    "instead of only pushing crates, you can also pull them thanks to magnetic handles."+
    "But beware! Once stuck, the handles can't be removed.",
    videosrc: "https://www.youtube.com/embed/T9KZ6P6gASs",
    producturl: "https://teamcannelle.itch.io/handle-the-crate",
 }

let fallenStar= {
    title: "Fallen Star",
    img: setImgUrl("/games/fallen_star.jpg"),
    year: "2022",
    engine: "Unity",
    genre: "narrative game",
    type: "card game",
    team: "solo development",
    role: "gameplay programer, game designer, UI programer",
    description:"A narrative cards game taking place in a Lovecraft world."+
    "You're the king and you must make decisions to protect your realm from ruin."+
    "Be careful, though. Your choice may affect the stability of the kingdom, and if it falls to zero, that's game over.",
    videosrc:"https://www.youtube.com/embed/Hu0iEJKOlLE",
    producturl:"https://krel113.itch.io/fallen-star",
}

let clockTower= {
    title: "Clock tower",
    img: setImgUrl("/games/clock_tower.jpg"),
    year: "2022",
    engine: "Adobe animate",
    genre: "action",
    type: "shoot them up",
    team: "1 audio artist, 1 programer",
    role: "gameplay programer, game designer, UI programer",
    description:"A shoot them'up with simple shapes to boost creativity." +
    "Fly through the level to grab upgrades, dodge traps, actionate mechanism and defeat the boos",
    videosrc:"https://www.youtube.com/embed/RcnigeDOSjs",
}

let marryMe= {
    title: "Marry me",
    img: setImgUrl("/games/marry_me.jpg"),
    year: "2021",
    engine: "Unity",
    genre: "action",
    type: "Topview shooter",
    team: "2 programmers",
    role: "gameplay programer, artist, game designer, UI programer",
    description:"Made in 48h for the GMTK Game Jam 2021, on the theme 'joined together'."+
    "The player have to dodge the bride and her henchmen through this topviewshooter, or they will get married.",
    videosrc:"https://www.youtube.com/embed/R2Jisf9-CPA",
    producturl:"https://krel113.itch.io/marry-me",
}

let videoGames = {
    title: "Video games",
    id:"videogames",
    data: [bluePeace, handleTheCrate, fallenStar, clockTower, marryMe]
};

// BOOKS
let astraWorld= {
    title: "Astra World",
    img: setImgUrl("/books/astra_world.jpg",),
    year: "2019",
    genre: "dark fantasy",
    language: "french",
    pseudonyme: "Gehaimme",
    description:"Lorsque la mort frappe, les défunts gagnent l'Après-vie. "+
    "Un monde inhospitalier dominé par un astre éternel, où les âmes semblent condamnées à une errance sans fin."+
    "Quelle est le but de cette seconde existence ? Quels sombres secrets ce monde cache-t-il ?"+
    "Les réponses existent et l'Astre en est le gardien.",
    producturl:"https://www.kobo.com/fr/en/ebook/l-astre-monde"
}

let litius= {
    title: "The enquiries of Litius Jurdal",
    img: setImgUrl("/books/litius.jpg"),
    year: "2018",
    genre: "steam-punk, thriller",
    language: "french",
    pseudonyme: "Gehaimme",
    description:"LEntrez dans le XIXème siècle d'un univers victorien où magie et révolution industrielle se côtoient à merveille."+
    "Litius Jurdal, mage et Enquêteur royal, se voit chargé par les plus hautes autorités de résoudre les affaires criminelles les plus importantes de son temps."+    
    "Un personnage haut en couleur, dont le caractère excentrique et lunatique sauront vous faire vibrer au rythme de ses enquêtes.",
    producturl:"https://www.kobo.com/fr/en/ebook/l-astre-monde"
}

let arcania2= {
    title: "Arcania medallions: book II",
    img: setImgUrl("/books/arcania2.jpg"),
    year: "2017",
    genre: "fantasy",
    language: "french",
    pseudonyme: "Gehaimme",
    description:"Exilée sur Veldona, l'île de métal, l'expédition alfarienne s'organise pour percer les mystères de la plus avancée des créations aréis,"+
    "tandis qu'à l'autre bout du monde, Krel et Iria se lancent à la poursuite de la confrérie des Lames Noires pour sauver leurs vies."+
    "Tous ignorent que, loin du tumulte de la scène internationale, un mystérieux personnage vient d'émerger du désert. Un homme à qui rien ne semble résister...",
    producturl:"https://www.kobo.com/fr/en/ebook/les-medaillons-d-arcania-1"
}

let arcania1= {
    title: "Arcania medallions: book I",
    img: setImgUrl("/books/arcania1.jpg"),
    year: "2016",
    genre: "journey diary",
    language: "french",
    pseudonyme: "Gehaimme",
    description:"Arcania est un monde brisé où les continents dérivent dans un ciel infini."+
    "Ses anciens maîtres, les Aréis, ont disparu depuis longtemps, laissant derrière eux de fabuleuses technologiques."+
    "Un héritage sans égal convoité par tous, car 'celui qui possède la puissance des Aréis, domine le monde'."+
    "Un proverbe que le roi Forhus II compte bien vérifier. Atteint d'une maladie incurable et proche de la fin,"+
    "il souhaite plus que tout au monde laisser sa trace dans l'Histoire. Une ambition démesurée, appuyée par la découverte d'un étrange médaillon,"+
    "qui plongera le monde dans une effroyable tourmente. De nombreux destins en seront affectés, dont deux en particulier :"+
    "celui d'un voleur intrépide et celui d'un soldat dévoué."+
    "Si l'un sera amené à faire face à son passé, l'autre devra choisir entre servir ou trahir.",
    producturl:"https://www.kobo.com/fr/en/ebook/les-medaillons-d-arcania"
}

let japan= {
    title: "The Land of the Rising Sun",
    img: setImgUrl("/books/japan.jpg"),
    year: "2020",
    genre: "journey diary",
    language: "french",
    pseudonyme: "Crazylongtrip",
    description:"Un voyage à l'autre bout du monde... La découverte d'une autre culture. Une expérience inoubliable au pays des ramens et des volcans.",
    producturl:"https://www.kobo.com/fr/en/ebook/crazylongtrip-au-pays-du-soleil-levant"
}

let compostella= {
    title: "On the way of Compostella",
    img: setImgUrl("/books/compostella.jpg"),
    year: "2018",
    genre: "journey diary",
    language: "french",
    pseudonyme: "Crazylongtrip",
    description:"Les pages que vous vous apprêtez à feuilleter vous transporterons dans l'incroyable aventure que j'ai pu vivre sur le Chemin de Compostelle."+
    "Un périple de longue haleine motivé par la recherche d'un futur épanouissant, bien loin des standards établis par notre société actuelle."+
    "Le Chemin a-t-il apporté les réponses que j'attendais ? Vous le saurez en vous plongeant au coeur de ce récit palpitant, profond, parfois philosophique, mais surtout plein de surprises et de rencontres inoubliables.",
    producturl:"https://www.kobo.com/fr/en/ebook/crazylongtrip-sur-le-chemin-de-compostelle "
}

let books = {
    title: "Books",
    id:"books",
    data: [japan, astraWorld,compostella, litius, arcania2, arcania1]
};


export {videoGames, books}
