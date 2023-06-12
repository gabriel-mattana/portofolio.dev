import { FindLocalImg } from "../../../utils";

export default function AbsoluteBtn({callback, imgurl, position})
{
    return(
        <button className={"round fixed absBtn " + position} onClick={callback}>
            <img src={FindLocalImg(imgurl)}></img>
        </button>
    );
}