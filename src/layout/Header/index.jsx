import React, { useContext, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../Context/BasketProvider";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistProvider";

function Header() {
  const { basket } = useContext(BasketContext);
  const [toggle, setToggle] = useState(true);
const [toggleSearch, setToggleSearch] = useState(true)
  const { wishlist} = useContext(WishlistContext);

  function ToggleWishlist() {
    setToggle(!toggle);
  }

  function ToggleSearch() {
    setToggleSearch(!toggleSearch);
  }

  console.log(wishlist);

  return (
    <header id="Header">
      <div className="uppperHeader">
        <div className="upperLeft">
          <div className="upperLeftPhone">
            <p>PHONE: +01 256 25 235</p>
          </div>
          <div className="upperLeftEmail">EMAIL: INFO@EISER.COM</div>
        </div>
        <div className="upperRight">
          <div className="upperGift">
            <p>GIFT CARD</p>
          </div>
          <div className="upperTrackOrder">
            <p>TRACK ORDER</p>
          </div>
          <div className="upperContactUs">
            <p>CONTACT US</p>
          </div>
        </div>
      </div>
      <div className="lowerHeader">
        <NavLink to={"/"}>
          <div className="lowerIcon">
            <img
              src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
              alt=""
              className={true ? "active" : "pending"}
            />
          </div>
        </NavLink>
        <nav>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>PAGES</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className="lowerFuncs">
        <div className={`closedSearch  ${!toggleSearch ? "openedSearch" : ""}`}>  
         <input type="text" placeholder=" Search items ... "/>
         </div>
          <i className="fa-solid fa-magnifying-glass" onClick={ToggleSearch}></i>
         
          <NavLink to={"/Basket"} className={true ? "activeH" : "pendingH"}>
            <i className="fa-solid fa-cart-shopping">
              {" "}
              <sup>{basket.length} </sup>{" "}
            </i>
          </NavLink>
          <i className="fa-solid fa-user"></i>
          <i onClick={ToggleWishlist} className="fa-regular fa-heart">
            {console.log(wishlist.length)}
            {wishlist.length    
            ?  <div
                className={`closedWishlist  ${!toggle ? "openWishlist" : ""}`}
              >
                <button onClick={ToggleWishlist}>X</button>
                <h1>Wishlist</h1>
                {wishlist.map((x) => (
                  <div className="cardWishlist">
                    <p>{x.title}</p>
                    <p>{x.price} $</p>
                  </div>
                ))}
              </div>    
            :  (<div
                className={`closedWishlist  ${!toggle ? "openWishlist" : ""}`}
              ><h1>NO ITEMS</h1></div>)
            }
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
