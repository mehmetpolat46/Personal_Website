import React from "react";
import './intro.css'; 
import bg from "../../assets/image.png";
import arkaplan from "../../assets/arkaplan.png";
import { Link } from "react-scroll";
import Typical from 'react-typical';


const TypingAnimation = React.memo(() => {
  
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "Front End Developer",
          2000,
          "Software Developer",
          2000,
          "Figma Expert",
          2000,
        ]}
        className="typing-text"
      />
    );  
});




const Intro = () => {
  // CV indirme işlevi
  function openResume() {
    const resumeUrl =
      "https://media.licdn.com/dms/document/media/D4D2DAQG1he2xlDoffw/profile-treasury-document-pdf-analyzed/0/1684768353872?e=1695859200&v=beta&t=ZOAc4-9bFKYNvjB3LTf3I06W1Gzk4oeX4unAJF6BM3U";
    window.open(resumeUrl, "_blank");
  }

  return (


    <section id="intro">
      <img src={arkaplan} alt="Profile" className="arkaplan" />

      
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Mehmet POLAT</span> <br />
          <TypingAnimation/>
        </span>
        <p className="introPara">
          "I'm a passionate React and Frontend Developer with a knack for 
          software development. I specialize in creating engaging web  
          experiences and bring designs to life using Figma. Welcome to my world 
          of coding and design!"
        </p>

        <div>
          <button className="btn" onClick={openResume}>
            Download CV
          </button>
        </div>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
