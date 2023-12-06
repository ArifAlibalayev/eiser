import React, { useEffect, useState } from "react";
import "./index.scss";

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

 

  console.log(api);

  return (
    <>
      <section id="Cards">
        <div className="cardWrapper">
          {api.map((x) => (
            <div className="card" key={x.id}>
              <div className="cardImg">
                <img src={x.image} />
                <div className="dropdownHover">
                  <i class="fa-regular fa-eye"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-basket-shopping"></i>
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
