import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../Context/BasketProvider";

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

  const { AddToBasket } = useContext(BasketContext);
  return (
    <>
      <section id="Cards">
        <div className="cardWrapper">
          {api.map((x) => (
            <div className="card" key={x.id}>
              <div className="cardImg">
                <img src={x.image} alt="Product" />
                <div className="dropdownHover">
                  <i className="fa-regular fa-eye"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i
                    className="fa-solid fa-basket-shopping"
                    onClick={() =>AddToBasket(x)}
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
