import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Ddata from "../Destinations/Ddata"
import NotFound from "../../Components/NotFound"
import { useParams } from "react-router-dom"

import "./style.css"

const Index = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const location = useLocation();

  useEffect(() => {
    let item = Ddata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
    <section className="image-heading">
    <div className="container">
      <h1>{location.pathname.split("/")[1]}</h1>

      <button>
        <Link to="/"> Home / </Link>
        <span>{location.pathname.split("/")[1]}</span>
      </button>
    </div>
  </section>

      {item ? (
        <section className='detail-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>Whta is the {item.title} City ?</h1>
                <p>{item.desc}</p>

                <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div>
                <p>{item.desc}</p>
              </div>
              

              
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>
             
            </article>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default Index