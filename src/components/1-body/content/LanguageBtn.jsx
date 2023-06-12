import AbsoluteBtn from "./AbsoluteBtn";


export default function LanguageBtn()
{
    let iconToDisplayUrl = "";
    function switchLanguage(event)
    {
        console.log(event)
    }


    return<AbsoluteBtn callback={switchLanguage} imgurl={iconToDisplayUrl} position={"downleft"}/>
}