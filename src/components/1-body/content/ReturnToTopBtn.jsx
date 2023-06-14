import { ScrollToSection } from "../../../utils";
import AbsoluteBtn from "./AbsoluteBtn";

export default function ReturnToTopBtn()
{
    function scrollToTop()
    {
        ScrollToSection("navbar");
    }

    return(
        <AbsoluteBtn callback={scrollToTop} imgurl={"icons/arrow_upward.svg"} extraCss={"downright"}/>
    );
}