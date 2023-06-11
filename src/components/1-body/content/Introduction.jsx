import { FindLocalImg } from "../../../utils";
import SectionTemplate from "./SectionTemplate";

export default function Introduction() {
  const content = (
    <div className="grid intro">
      <div className="grid">
        <img
          className="meicon bd-bs1"
          src={FindLocalImg("icons/me_icon.jpg")}
          alt="my picture"
        />
      </div>
      <div className="grid rg20">
        <div className="grid rg20 intro-txt-container intro-font">
          <p>
            Full stack programmer at work, game developer and designer at home,
            I used to be a writer, a policeman and a jurist.
          </p>
          <p>
            Through those experiences and several journeys abroad I finaly found my path:
            being creative, solving problems, and architecturing systems.
          </p>
          <p>
           <i>"Unknown is scary, but it pushes us beyond our limits"</i> 
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <SectionTemplate
      id="introduction"
      title="Full stack programmer / game developer"
      content={content}
    />
  );
}
