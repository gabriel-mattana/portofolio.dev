import react from "react";

export default function ContactForm() {
  return (
    <div id="contact" className="content-container">
      <h1>Contact</h1>
      <div className="form-container">
        <form className="flex-col">
          <input type="text" placeholder="your email"></input>
          <input type="text" placeholder="your text"></input>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
