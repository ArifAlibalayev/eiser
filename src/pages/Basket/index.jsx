import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketProvider'
import "./index.scss"

function BasketPage() {
    const {basket, DeleteItem} = useContext(BasketContext)
  return (
   <>
   <div className="cardWrapper">
          {basket.map((x) => (
            <div className="card" key={x.id}>
              <div className="cardImg">
                <img src={x.image} alt="Product" />
                
              </div>
              <div className="cardContent">
                <h3>Product Title: {x.title}</h3>
                <p> Price: {x.price} $</p>
              </div>
              <div className="deleteItem">
            <button onClick={()=>DeleteItem(x)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
   </>
    )
}

export default BasketPage