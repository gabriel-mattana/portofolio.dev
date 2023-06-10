import { FindLocalImg } from "../../../utils";
import SectionTemplate from "./SectionTemplate";

export default function Introduction() {
  const content = (
    <div className="flex cg20 intro">
        <img className="meicon bd-bs1" src={FindLocalImg("icons/me_icon.jpg")} alt="my picture" />
      <div className="grid rg20">
        <div className="grid rg10 intro-txt">
          <p>
            Creative, curious, open minded, and eager to learn.
            Through several experiences abroad, I have developed great social skills,
            and adaptability to fit  in a multicultural team.
          </p>
          <p>
            I am a full stack programmer at work, and a game developper and writer
            at home.
          </p>
          <p>I used to be a jurist in insurance, and before a policeman. </p>
          <p>Those experiences gave me </p>
        </div>
        </div>
      </div>
  );
  return <SectionTemplate id="introduction" title="Full stack programmer / game developer" content={content} />;
}
