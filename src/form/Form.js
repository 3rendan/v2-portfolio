import React from 'react'
// import Recaptcha from 'react-recaptcha'

const Form = () => {
  // let recaptchaInstance;
  //
  // // manually trigger reCAPTCHA execution
  // const executeCaptcha = function () {
  //   recaptchaInstance.execute();
  // };
  //
  // // executed once the captcha has been verified
  // // can be used to post forms, redirect, etc.
  // const verifyCallback = function (response) {
  //   console.log(response);
  //   document.getElementById("someForm").submit();
  // };
  return (
    <div>
      <form method="post" action="https://getform.io/f/dea8ba39-ea8c-497a-afb0-48ef1daf5acf">
        <div className="row uniform 50%">
          <div className="6u 12u$(xsmall)">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="12u">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
        </div>
        <ul className="actions" style={{ marginTop: 30 }}>
        <li>
          <input type="submit" value="Send Message" />
        </li>
        </ul>
      </form>
    </div>
  )
}

export default Form
