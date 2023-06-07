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
// var bluePeace = new Data("Blue peace", "/games/blue_peace.jpg", "2022",
// "BluePeace is a visual naovle" +
//  "visual novel");
 var bluePeace = {
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

var handleTheCrate = {
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

var fallenStar= {
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

var clockTower= {
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

var marryMe= {
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

var videoGames = {
    title: "Video games",
    id:"videogames",
    data: [bluePeace, handleTheCrate, fallenStar, clockTower, marryMe]
};

// BOOKS
var astraWorld = new Data("Astra world", "/books/astra_world.jpg", "2019");
var astraWorld= {
    title: "Astra World",
    img: setImgUrl("/books/astra_world.jpg",),
    year: "2019",
    genre: "dark fantasy",
    description:"Lorsque la mort frappe, les défunts gagnent l'Après-vie. "+
    "Un monde inhospitalier dominé par un astre éternel, où les âmes semblent condamnées à une errance sans fin."+
    "Quelle est le but de cette seconde existence ? Quels sombres secrets ce monde cache-t-il ?"+
    "Les réponses existent et l'Astre en est le gardien.",
    producturl:"https://www.kobo.com/fr/en/ebook/l-astre-monde"
}
var litius = new Data("The adventures of Litius Jurdal", "/books/litius.jpg", "2018");
var arcania2 = new Data("Arcania medallions: book II", "/books/arcania2.jpg", "2017");
var arcania1 = new Data("Arcania medallions: book I", "/books/arcania1.jpg", "2016");

var japan = new Data("The Land of the Rising Sun", "/books/japan.jpg", "2020");
var compostella = new Data("On the way of Compostella", "/books/compostella.jpg", "2018");

var books = {
    title: "Books",
    id:"books",
    data: [japan, astraWorld,compostella, litius, arcania2, arcania1]
};


export {videoGames, books}
