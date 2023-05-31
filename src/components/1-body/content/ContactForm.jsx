import react from "react";

export default function ContactForm() {
  return (
    <div id="contact" className="content-container">
      <h1>Contact</h1>
      <div className="form-container">
        <form className="flex-col">
          <label>Your name / company</label>
          <input type="text" required={true}/>
          <br/>
          <label> E-mail</label>
          <input type="email" required={true}></input>
          <br/>
          <label> Message</label>
          <textarea rows="15"></textarea>
          <br/>
          <input type="submit" className="btnsubmit"/>
        </form>
      </div>
    </div>
  );
}
