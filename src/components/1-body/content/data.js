class Data{
    constructor(title, img, year)
    {
        this.title = title;
        this.img = img;
        this.year = year;
    }
}

var bluePeace = new Data("Blue peace", "/games/blue_peace.jpg", "2022");
var fallenStar = new Data("Fallen star", "/games/fallen_star.jpg", "2022");
var handleTheCrate = new Data("Handle the crate", "/games/handle_the_crate.jpg", "2022");
var clockTower = new Data("Clock tower", "/games/clock_tower.jpg", "2022");
var marryMe = new Data("Marry me", "/games/marry_me.jpg", "2021");

var videoGames = {
    title: "Video games",
    id:"videogames",
    data: [bluePeace, fallenStar, handleTheCrate, clockTower, marryMe]
};


var astraWorld = new Data("Astra world", "/books/astra_world.jpg", "2019");
var litius = new Data("The adventures of Litius Jurdal", "/books/litius.jpg", "2018");
var arcania2 = new Data("Arcania medallions: book II", "/books/arcania2.jpg", "2017");
var arcania1 = new Data("Arcania medallions: book I", "/books/arcania1.jpg", "2016");

var japan = new Data("CrazyLongTrip: the Land of the Rising Sun", "/books/japan.jpg", "2020");
var compostella = new Data("CrazyLongTrip: on the way of Compostella", "/books/compostella.jpg", "2018");

var books = {
    title: "Books",
    id:"books",
    data: [japan, astraWorld,compostella, litius, arcania2, arcania1]
};


export {videoGames, books}
