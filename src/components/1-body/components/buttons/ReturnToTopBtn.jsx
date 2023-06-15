import { ScrollToSection } from "../../../../utils";
import IconBtn from "./IconBtn";

export default function ReturnToTopBtn()
{
    function scrollToTop()
    {
        ScrollToSection("navbar");
    }

    return(
        <IconBtn callback={scrollToTop} imgurl={"icons/arrow_upward.svg"} extraCss={"absbtn"}/>
    );
}