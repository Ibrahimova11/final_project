import React from 'react'
import DestinationHome from '../../Components/HomeSelection/DestinationHome/DestinationHome'
import Hotel from "../../Components/HomeSelection/Hotel"
const Index = () => {
  return (
    <div>
    
    <Hotel/>
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

      <DestinationHome/>
    </div>
  )
}

export default Index