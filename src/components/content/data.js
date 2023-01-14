import React from "react";

const data_template = {
    key : Number,
    img : String,
    title: String,
    year: String
}

var BluePeace = Object.assign({}, data_template);
BluePeace.key = 1;
BluePeace.img = "/images/BluePeace.png";
BluePeace.title = "Blue Peace";
BluePeace.year = "2022";

var FallenStar = Object.assign({}, data_template);
FallenStar.key = 2;
FallenStar.img = "/images/FallenStar.png";
FallenStar.title = "Fallen star";
FallenStar.year = "2022";

var handleTheCrate = Object.assign({}, data_template);
handleTheCrate.key = 3;
handleTheCrate.img = "/images/HandleTheCrate.png";
handleTheCrate.title = "Handle the Crate";
handleTheCrate.year = "2022";

var clockTower = Object.assign({}, data_template);
clockTower.key = 4;
clockTower.img = "/images/ClockTower.png";
clockTower.title = "Clock Tower";
clockTower.year = "2022";

var marryMe = Object.assign({}, data_template);
marryMe.key = 5;
marryMe.img = "/images/MarryMe.png";
marryMe.title = "Marry me";
marryMe.year = "2021";

var videoGames = [BluePeace, FallenStar, handleTheCrate, clockTower, marryMe];

export {videoGames}
