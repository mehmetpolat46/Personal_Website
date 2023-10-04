import React from "react";
import "./abouts.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import Profil from "../../assets/about-profil.jpg";

const Abouts = () => {
  return (
    <section id="abouts">
      <span className="aboutTitle">What I do</span>
      <span className="aboutDesc">
        Hello! I am a Front-End Developer who is a React Technologies Expert and
        Develops Projects. I am someone who is open to learning and always
        approaches new information and technologies with curiosity. Specializing
        specifically in React reflects my passion for web development. While
        following technological developments, I also continue to improve my
        current abouts. As a good team player, I attach great importance to
        cooperation. It is a great pleasure for me to work with my teammates,
        generate new ideas and carry projects to success together. I am abouted
        at handling stress and generally maintain a positive and cheerful
        attitude. I see challenges not just as problems, but also as
        opportunities. Therefore, every new project or obstacle is a source of
        motivation for me to improve myself further and find innovative
        solutions. I aim to produce creative and effective projects by using
        these features in the field of software development. Additionally, I was
        not limited to React but also improved my abouts in mobile application
        development.
      </span>
      <div className="aboutBars">
        
        <div className="aboutt">
        <div className="aboutBar">
          <img src={UIDesign} alt="UIDesign" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>UI/UX Design</h2>
            <p>
              "Designing with Figma is a magical way for me to turn not only my
              thoughts but also <br /> my dreams into reality."
            </p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={WebDesign} alt="WebDesign" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Website Design</h2>
            <p>
              “Web design for me is a platform for art and collaboration while
              bringing the freedom of the digital <br /> world and limitless
              creativity in the palm of your hand.”
            </p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={AppDesign} alt="AppDesign" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>App Design</h2>
            <p>
              "Mobile design is like a work of art that brings the digital world
              into our pockets,
              <br /> and I see this art as a journey that comes to life with
              every touch."
            </p>
          </div>
        </div>
        </div>
        <img className="about-p" src={Profil} alt="" />
      </div>
      <br /> <br />
    </section>
  );
};

export default Abouts;
