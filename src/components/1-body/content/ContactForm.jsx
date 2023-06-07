import react from "react";
import SectionTemplate from "./SectionTemplate";

export default function ContactForm() {
  const content = (
    <react.Fragment>
          <div className="form-container">
            <form className="flex-col">
              <label>Your name / company</label>
              <input type="text" required={true} />
              <br />
              <label> E-mail</label>
              <input type="email" required={true}></input>
              <br />
              <label> Message</label>
              <textarea rows="15"></textarea>
              <br />
              <input type="submit" className="btnsubmit" />
            </form>
          </div>
      </react.Fragment>
    
  );
  return <SectionTemplate id="contact" title="Contact" content={content} />;
}
