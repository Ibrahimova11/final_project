import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import AllItem from './AllItem';
import "./style.css"
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
      <AllItem/>
    </div>
  )
}

export default Index