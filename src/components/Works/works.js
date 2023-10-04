import React from "react";
import "./works.css";
import Portfoloi1 from "../../assets/portfolio-1.png";
import Portfoloi2 from "../../assets/portfolio-2.png";
import Portfoloi3 from "../../assets/portfolio-3.png";
import Portfoloi4 from "../../assets/portfolio-4.png";
import Portfoloi5 from "../../assets/portfolio-5.png";
import Portfoloi6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        Hello! I am Mehmet Polat, and I am happy to share with you my passion
        for web design and development. You can find the projects I have created
        so far below and take a detailed look at each of them via the GitHub
        repo link. By browsing this section, you can have the opportunity to get
        to know my abouts and work more closely. If you would like to get in
        touch for more information about my projects or cooperation offers,
        please contact me. <br />{" "}
        <a
          className="github"
          href="https://github.com/mehmetpolat46?tab=repositories"
          target="_blank"
        >
          ~Github Repo~
        </a>
      </span>
      <div id="cards">
        <div className="card">
          <img src={Portfoloi1} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Burger Website</h2>
            <p>
              This stylishly designed burger restaurant website In addition to
              providing general information about the company, it also provides
              access to contact information. It also offers the opportunity to
              explore the restaurant's rich food options and prices via the menu
              page.
              <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/Burger-project"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Portfoloi2} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Expense Calculation </h2>
            <p>
              This work has a stylish and responsive design and features such as
              adding expenses, indicating payment status, viewing total expenses
              and using LocalStorage.. <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/Harcama-Hesaplama"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Portfoloi5} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Recipe Site Project</h2>
            <p>
              This work allows you to easily access many different food and
              dessert recipes. There is a large collection of recipes within the
              application, so you can discover and save all kinds of recipes, so
              you can easily find and try your favorite recipes later.
              <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/recipe-site-project"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Portfoloi4} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Shopping Cart</h2>
            <p>
              This project includes a web application that offers the ability to
              add products to cart by pulling them through a mock API. Users can
              add products to the cart, edit the quantity and view the cart
              contents.
              <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/Shopping-cart"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Portfoloi3} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Spotify Clone</h2>
            <p>
              This project aims to create a simple clone of the Spotify music
              streaming platform. In the project, music data was obtained via
              the Shazam API using RapidAPI, allowing users to discover popular
              songs and search for the songs they want. <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/Spotify_Clone"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Portfoloi6} alt="" classNameName="worksImg" />
          <div className="yazi">
            <h2>Destiny Site Project</h2>
            <p>
              This design provides a visually stunning experience on a website
              with impressive animations. It works seamlessly on all types of
              devices and allows users to interact with the content.
              <br />
              <br />
              <a
                className="card-btn"
                href="https://github.com/mehmetpolat46/destiny-site-project"
                target="_blank"
              >
                Source Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
