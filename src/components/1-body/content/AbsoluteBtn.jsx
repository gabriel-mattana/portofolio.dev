import { FindLocalImg } from "../../../utils";

export default function AbsoluteBtn({callback, imgurl, extraCss})
{
    return(
        <button className={"round fixed absbtn " + extraCss} onClick={callback}>
            <img src={FindLocalImg(imgurl)}></img>
        </button>
    );
}