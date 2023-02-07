import React, { useState } from "react"
import Dcards from "./Dcards"
import "../Gallery"
import "../Destinations"
import Ddata from "./Ddata"

const AllItem = () => {
  const [items, setIems] = useState(Ddata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem