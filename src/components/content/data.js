import React from "react";

const data_template = {
    key : Number,
    imgPath : String,
    title: String,
    year: String
}

var bigBlue = Object.assign({}, data_template);
bigBlue.key = 1;
bigBlue.imgPath = "/images/HandleTheCrate_title.png";
bigBlue.title = "Big Blue";
bigBlue.year = "2022";

var handleTheCrate = Object.assign({}, data_template);
handleTheCrate.key = 2;
handleTheCrate.imgPath = "/images/HandleTheCrate_title.png";
handleTheCrate.title = "Handle the Crate";
handleTheCrate.year = "2022";

var clockTower = Object.assign({}, data_template);
clockTower.key = 3;
clockTower.imgPath = "/images/HandleTheCrate_title.png";
clockTower.title = "Clock Tower";
clockTower.year = "2022";

var marryMe = Object.assign({}, data_template);
marryMe.key = 4;
marryMe.imgPath = "/images/HandleTheCrate_title.png";
marryMe.title = "Marry me";
marryMe.year = "2022";

var videoGames = [bigBlue, handleTheCrate, clockTower, marryMe];

export {videoGames}
