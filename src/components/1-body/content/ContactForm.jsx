import { useForm } from "@formspree/react";
import SectionTemplate from "./SectionTemplate";
import { useState } from "react";

const MUST_BE_FULFILLED = "This field must be fulfilled";

export default function ContactForm() {
  const api = "https://formspree.io/f/xoqzorwz";
  let [httpResponseState, updateHttpPostRequest] = useForm("xoqzorwz");
  
  const [errorsState, updateErrors] = useState("")

  function DisplayHttpResponse() {
    let result = {}
    if (httpResponseState.errors.length > 0) {
      console.log(httpResponseState.errors);

      httpResponseState.errors.forEach((error) => {
        switch (error.code) {
          case "FORM_NOT_FOUND":
            result = "Error, message has not been sent. Please retry.";
            break;

          default:
            result = "An error occured. Please retry";
        }
        return <p className="error">{result}</p>
      });
    }
    else if(httpResponseState.succeeded)
    {
      return <p className="errorCorrected">Message sent</p>
    }
  }

  function handleSubmit(event)
  {
    event.preventDefault()
    let nameField = document.getElementById("form_name");
    let emailField = document.getElementById("form_email");
    let messageField = document.getElementById("form_message");

    function updateCss(element, condition)
    {
      let css = element.classList;
      if(condition)
      {
        css.add("invalidInput")
      }
      else
      {
        css.remove("invalidInput")
      }
    }

    var newErrors = {}
    newErrors.name = nameField.value =="" ? MUST_BE_FULFILLED : undefined
    newErrors.email = emailField.value =="" ? MUST_BE_FULFILLED : undefined
    newErrors.message = messageField.value =="" ? MUST_BE_FULFILLED : undefined
    updateCss(nameField, newErrors.name)
    updateCss(emailField, newErrors.email)
    updateCss(messageField, newErrors.message)

    updateErrors(newErrors)

    if(!newErrors.name && !newErrors.email && !newErrors.message ){
     updateHttpPostRequest(event)
    }
  }

  function resetBtnSubmit()
  {
    var btn = document.getElementById("btnSubmit")
    btn.disabled = false;
  }

  const content = (
    <form className="flex-col" onSubmit={handleSubmit}>
      <label htmlFor="name">Your name / company</label>
      <input
        id="form_name"
        type="name"
        name="form_name"
      />
      <p className="error">{errorsState.name}</p>
      <br />
      <label htmlFor="email"> E-mail</label>
      <input
        id="form_email"
        type="email"
        name="form_email"
      />
      <p className="error">{errorsState.email}</p>
      <br />
      <label htmlFor="message"> Message</label>
      <textarea
        id="form_message"
        rows="15"
        name="form_message"
      />
      <p className="error">{errorsState.message}</p>
      <br />
      <div>
        <input type="reset" className="btnsubmit" onClick={resetBtnSubmit}/>
        <input id="btnSubmit" type="submit" className="btnsubmit" disabled={httpResponseState.succeeded}/>
      </div>
      {DisplayHttpResponse()}
    </form>
  );
  return <SectionTemplate id="contact" title="Contact" content={content} />;
}
