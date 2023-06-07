import SectionTemplate from "./SectionTemplate";

export default function Introduction() {
  const content = (
      <div className="text">
        <p>
          I am a full stack programmer at work, and a game developper and writer
          at home.
        </p>
        <p>I used to be a jurist in insurance, and before a policeman. </p>
        <p>Those experiences gave me </p>
      </div>
  );
  return <SectionTemplate id="introduction" title="Introduction" content={content} />;
}
