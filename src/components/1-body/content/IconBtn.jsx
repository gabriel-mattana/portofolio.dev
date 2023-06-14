import { FindLocalImg } from "../../../utils";

export default function IconBtn({callback, imgurl, extraCss, alt})
{
    return(
        <button className={"round " + extraCss} onClick={callback}>
            <img src={FindLocalImg(imgurl)} alt={alt}/>
        </button>
    );
}