import React from "react";

export default function Page_Contact() {
  return (
    <React.Fragment>
      <h1>Contact section</h1>
      <form id="contact-form" method="POST">
        <input type="text" placeholder="Your name"></input>
        <input type="email" placeholder="Your email"></input>
        <input type="text" placeholder="Your text"></input>
        <input type="submit"></input>
      </form>
    </React.Fragment>
  );
}
