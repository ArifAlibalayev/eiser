import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../Context/BasketProvider";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistProvider";

function Cards() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setApi(data);
  }

  const { AddToBasket, ActiveBasket } = useContext(BasketContext);
  const { AddToWishlist } = useContext(WishlistContext)
  return (
    <>
      <section id="Cards">
        <div className="cardWrapper">
          {api.map((x) => (
            <div className="card" key={x.id}>
              <div className="cardImg">
                <img src={x.image} alt="Product" />
                <div className="dropdownHover">
                  <NavLink  to={`/Details/${x.id}`} className={true ? "active" : "pending"}>
                    <i className="fa-regular fa-eye" ></i>
                  </NavLink>
                  <i className="fa-regular fa-heart" onClick={()=>AddToWishlist(x)}></i>
                  <i
                    className={
                      ActiveBasket(x)
                        ? "fa-solid fa-basket-shopping added"
                        : "fa-solid fa-basket-shopping notAdded"
                    }
                    onClick={() => AddToBasket(x)}
                  ></i>
                </div>
              </div>
              <div className="cardContent">
                <h3>Product Title: {x.title}</h3>
                <p> Price: {x.price} $</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
