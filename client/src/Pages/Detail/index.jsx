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

          
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default Index