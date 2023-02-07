import React from "react"
import Card from "./Card"
import "./style.css"
import GalleryData from "./GalleryData"
import { Link, useLocation } from "react-router-dom"

// Gallery page start
const Index = () => {
    const location = useLocation();
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

      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Card imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
    </>
  )
}

export default Index