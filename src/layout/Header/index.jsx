import React from 'react'
import "./index.scss"


function Header() {
  return (
    <header id='Header'>
        <div className="uppperHeader">
            <div className="upperLeft">
                <div className="upperLeftPhone">
                    <p>PHONE: +01 256 25 235</p>
                </div>
                <div className="upperLeftEmail">
                    EMAIL: INFO@EISER.COM
                </div>
            </div>
            <div className="upperRight">
                <div className="upperGift"><p>GIFT CARD</p></div>
                <div className="upperTrackOrder"><p>TRACK ORDER</p></div>
                <div className="upperContactUs"><p>CONTACT US</p></div>
            </div>
        </div>
        <div className="lowerHeader">
            <div className="lowerIcon"><img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" /></div>
            <nav><ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT</li>
            </ul></nav>
            <div className="lowerFuncs">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-regular fa-heart"></i>
            </div>
        </div>
    </header>
  )
}

export default Header