import { useForm } from "@formspree/react";
import SectionTemplate from "./SectionTemplate";
import { useState } from "react";
import InputField from "../components/form/ContactForm_InputField";

const MUST_BE_FULFILLED = "*Mandatory";

export default function ContactForm() {
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
        return <p  id="httpResponse" className="error">{result}</p>
      });
    }
    else if(httpResponseState.succeeded)
    {
      return <p id="httpResponse" className="errorCorrected">Message sent</p>
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

    var httpresponse = document.getElementById("httpResponse")
    if(httpresponse){
      httpresponse.remove();
    }   
  }

  const content = (
    <form className="flex-col" onSubmit={handleSubmit}>
      <InputField id="form_name" type="name" label={"Name / Company"} error={errorsState.name}/>
      <br />
      <InputField id="form_email" type="email" label={"E-mail"} error={errorsState.email}/>
      <br />
      <div className="flex spacedAway">
          <label htmlFor="message"> Message</label>
          <p className="error">{errorsState.message}</p>
      </div>
      <textarea
        id="form_message"
        rows="15"
        name="form_message"
      />
      <br />
      <div className="flex btncontainer">
        <input type="reset" className="productbtn returnbtn" onClick={resetBtnSubmit}/>
        <input id="btnSubmit" type="submit" className="productbtn okbtn" disabled={httpResponseState.succeeded}/>
      </div>
      {DisplayHttpResponse()}
    </form>
  );
  return <SectionTemplate id="contact" title="Contact" content={content} />;
}
