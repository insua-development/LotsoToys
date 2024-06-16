import React, { useState, useEffect } from 'react'
import Product from "./Product.jsx"
import "./ProductsContainer.css"



let head = {
  method:     'GET',
  mode:       'cors',
  cache:      'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials:    'omit', // include, *same-origin, omit
  headers:        {
                  'Content-Type': 'application/json'

                  },
  redirect: 'manual', // manual, *follow, error
  referrerPolicy: 'strict-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

let ip = '127.0.0.1'



function getURLProducts() {
  let url = 'http://' + ip + ':8000/products_active'
  return url
}


async function loadApiProducts(){
  let url = getURLProducts()
  let response = await fetch(url, head)
  .then(res => res.json())
  .then((data) => {
      let productList = []
      for (let product in data) {
          let new_product = {
              name: data[product]['name'],
              imageURL: 'osoLotso.jpeg'
          }
          productList.push(new_product)
      }
      return productList
  }).catch(
      function errorApi(){
          return null
      }
  )
  return response;
}



export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadApiProducts().then(
        (data) => setProducts(data)
    )
  }, []);

  return (
    <section className='productsContainer'>
      {products.map(product => {
        return <Product key={product.name} name={product.name} img={product.imageURL} /> 
      })}
    </section>
  )
}
