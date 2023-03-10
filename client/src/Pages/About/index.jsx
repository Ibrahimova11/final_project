import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Index = () => {
  const location = useLocation();
  return (
    <div>
      <section className="image-heading">
        <div className="container">
          <h1>{location.pathname.split("/")[1]}</h1>

          <button>
            <Link to="/"> Home / </Link>
            <span>{location.pathname.split("/")[1]}</span>
          </button>
        </div>
      </section>
      <section className="about top">
        <div className="container">
          <div className="aboutCard mtop flex_space">
            <div className="row row1">
              <h4>About Us</h4>
              <h1>
                We <span>provide Solution</span> to grow your buisness
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit amet
                consectetur piscing elit amet consectetur adipiscing elit sed et
                eletum nulla eu placerat felis etiam tincidunt orci lacus id
                varius dolor fermum sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit amet
                consectetur piscing elit amet consectetur adipiscing elit sed et
                eletum nulla eu placerat felis etiam tincidunt orci lacus id
                varius dolor fermum sit amet.
              </p>
              <button className="secondary-btn">
                Explore More <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="row image">
              <img
                src="https://rainbowdesign.in/themes/Stetho/img/about-us/about-video-img-1.jpg"
                alt=""
              />
              <div className="control-btn">
                <button className="prev">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet
              consectetur piscing elit amet consectetur adipiscing elit sed et
              eletum nulla eu placerat felis etiam tincidunt orci lacus id
              varius dolor fermum sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet
              consectetur piscing elit amet consectetur adipiscing elit sed et
              eletum nulla eu placerat felis etiam tincidunt orci lacus id
              varius dolor fermum sit amet.
            </p>
            <button className="secondary-btn">
              Explore More <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img
              src="https://rainbowdesign.in/themes/Stetho/img/about-us/feature-img-1.jpg"
              alt=""
            />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
