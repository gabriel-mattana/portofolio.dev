import React from "react";

class Data{
    constructor(title, img, year)
    {
        this.title = title;
        this.img = img;
        this.year = year;
    }
}


var bluePeace = new Data("Blue peace", "/games/blue_peace.jpg", "2022");
var fallenStar = new Data("Fallen Star", "/games/fallen_star.jpg", "2022");
var handleTheCrate = new Data("HandleTheCrate", "/games/handle_the_crate.jpg", "2022");
var clockTower = new Data("Clock Tower", "/games/clock_tower.jpg", "2022");
var marryMe = new Data("MarryMe", "/games/marry_me.jpg", "2021");


var videoGames = [bluePeace, fallenStar, handleTheCrate, clockTower, marryMe];





// var videoGames ={
//     title: "Video Games",
//     text: "Hereby all my games",
//     data:[]
// }














const data_template = {
    key : Number,
    img : String,
    title: String,
    year: String
}


export {videoGames}
