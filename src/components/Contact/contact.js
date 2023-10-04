import React, { useRef } from "react";
import "./contact.css";
import İcon1 from "../../assets/icon-1.png";
import İcon2 from "../../assets/icon-2.png";
import İcon3 from "../../assets/icon-3.png";
import İcon4 from "../../assets/icon-4.png";
import İcon5 from "../../assets/icon-5.png";
import İcon6 from "../../assets/icon-6.png";
import İcon7 from "../../assets/icon-7.png";
import İcon8 from "../../assets/icon-8.png";
import İcon9 from "../../assets/icon-9.png";
import İcon10 from "../../assets/icon-10.png";

import FacebookIcon from "../../assets/facebook-icon.png";
import GithubIcon from "../../assets/github.png";
import LinkedlnIcon from "../../assets/linkeln.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "emailjs-com";
import { Service, Template, Puplic } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notifySuccess = () =>
    toast.success("Message Sent!", { autoClose: 2000 });
  const notifyError = (message) => toast.error(message);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.from_name.value ||
      !form.current.from_email.value ||
      !form.current.message.value
    ) {
      notifyError("Please fill out the form completely.");
      return;
    }

    emailjs.sendForm(Service, Template, form.current, Puplic).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        notifySuccess();
      },
      (error) => {
        console.log(error.text);
        notifyError("Error sending email. Please try again later.");
      }
    );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Project Development Tools</h1>
        <p className="clienentDesc">
          I develop my projects and works using the software tools and
          technologies listed below. These tools provide a strong foundation for
          building creative projects, web development, and advancing in the
          software world. Here are some basic tools I use: Programming language
          : <span className="clienetDescSpan"> JavaScript, </span>
          Development Tools :{" "}
          <span className="clienetDescSpan"> Visual Studio Code, </span>
          Sublime Text UI/UX Design Tools :{" "}
          <span className="clienetDescSpan"> Figma, </span>
          Frontend and Backend Technologies :{" "}
          <span className="clienetDescSpan"> React, Node.js </span>
          Version Control Systems :{" "}
          <span className="clienetDescSpan"> Git, GitHub </span>
          Project Management Tools:{" "}
          <span className="clienetDescSpan"> Jira, Trello, </span>
          These tools enable me to produce various technological solutions and
          constantly develop new skills by using them in my projects. Each of my
          projects is supported by these software tools and prepared based on
          the latest technologies. When you examine my projects, you will see my
          passion for bringing my creative ideas to life using these tools.
        </p>
      </div>
      <div id="cclientImgs">
        <img src={İcon1} alt="client" className="clientImg" />
        <img src={İcon2} alt="client" className="clientImg" />
        <img src={İcon3} alt="client" className="clientImg" />
        <img src={İcon4} alt="client" className="clientImg" />
        <img src={İcon5} alt="client" className="clientImg" />
        <img src={İcon6} alt="client" className="clientImg" />
        <img src={İcon7} alt="client" className="clientImg" />
        <img src={İcon8} alt="client" className="clientImg" />
        <img src={İcon9} alt="client" className="clientImg" />
        <img src={İcon10} alt="client" className="clientImg" />
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          You can contact me using the contact form. I'm here to talk about any
          questions, suggestions or collaboration opportunities. You I look
          forward to listening and helping you. Thanks!{" "}
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            id="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            id="from_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            id="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button id="button" value="Send Email" className="submitBtn">
            Submit
          </button>
          <ToastContainer />

          <div className="links">
            <a
              href="https://www.facebook.com/profile.php?id=100013151082567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>

            <a
              href="https://github.com/mehmetpolat46"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://github.com/mehmetpolat46"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="Github" className="link" />
              </a>
            </a>
            <a
              href="https://www.linkedin.com/in/mehmetpolat46/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedlnIcon} alt="LinkedIn" className="link" />
            </a>

            <a
              href="https://www.instagram.com/polat460234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
