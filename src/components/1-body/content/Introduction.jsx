import { FindLocalImg } from "../../../utils";
import SectionTemplate from "./SectionTemplate";

export default function Introduction() {
  const content = (
    <div className="flex spacedAway intro">
      <div>
        <img className="meicon bd-bs1" src={FindLocalImg("icons/me_icon.jpg")} alt="my picture" />
        <div name="flex cg10">
          <img className="icon" src={FindLocalImg("icons/french_icon.jpg")} alt="french_icon" />
          <img className="icon" src={FindLocalImg("icons/english_icon.jpg")} alt="english_icon" />
          <img className="icon" src={FindLocalImg("icons/italian_icon.jpg")} alt="italian_icon" />
          <img className="icon" src={FindLocalImg("icons/japanese_icon.jpg")} alt="japanese_icon" />
        </div>
      </div>
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
        <div name="game_engines">
          <div className="flex">Game engines:
            <img className="engine_icon" src={FindLocalImg("icons/unity_icon.svg")} alt="unity_icon" />
            <img className="engine_icon" src={FindLocalImg("icons/godot_icon.svg")} alt="godot_icon" />
          </div>
        </div>  
        <div name="programming_languages">
          <div className="flex">Programming languages:
            <div>
              <label>C#</label>
              <img className="engine_icon" src={FindLocalImg("icons/csharp_icon.png")} alt="csharp_icon" /> 
            </div>
            <div>
              <label>C++</label>
              <img className="engine_icon" src={FindLocalImg("icons/c++_icon.png")} alt="c++_icon" /> 
            </div>
            <div>
              <label>Javascript</label>
              <img className="engine_icon" src={FindLocalImg("icons/js_icon.png")} alt="js_icon" /> 
            </div>
            <div>
              <label>.Net</label>
              <img className="engine_icon" src={FindLocalImg("icons/dotnet_icon.png")} alt="dotnet_icon" /> 
            </div>
            <div>
              <label>Node.js</label>
              <img className="engine_icon" src={FindLocalImg("icons/node_icon.svg")} alt="node_icon" /> 
            </div>
            <div>
              <label>React</label>
              <img className="engine_icon" src={FindLocalImg("icons/react_icon.svg")} alt="react_icon" /> 
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  return <SectionTemplate id="introduction" title="Introduction" content={content} />;
}
