export function ScrollToSection(id){
    var height = document.getElementById(id).offsetTop
    window.scrollTo({top: height,behavior:"smooth"});
}

export function PlaceProductInView(id){
    var height = document.getElementById(id).offsetTop;
    window.scrollTo({top: height,behavior:"smooth"});
}

export function FindLocalImg(imgurl){
    return process.env.PUBLIC_URL + "/images/" + imgurl;
}
