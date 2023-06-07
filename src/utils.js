export function ScrollTo(id){
    var height = document.getElementById(id).offsetTop
    window.scrollTo({top: height,behavior:"smooth"});
}