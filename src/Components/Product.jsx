import React from 'react'
import "./Product.css"

export default function Product(props)  {

  return (
    <section className='productContainer'>
      <img alt='Imagen del producto' src={props.img} ></img>
      <div className='productText'><p><strong>{props.name}</strong></p></div>
    </section>
  )
}
