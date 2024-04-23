import React from 'react'
import Header from './Header'
 

export default function Offer() {
  return (
    <> 
 <Header/>
    <section  className="offer_section layout_padding">
      <div  className="container">
        <div  className="box">
          <div  className="detail-box">
            <h2>
              Offers on chocolates
            </h2>
            <h3>
              Get 5% Offer <br/>
              any Chocolate items
            </h3>
            <a href="">
              Buy Now
            </a>
          </div>
          <div  className="img-box">
            <img src="assets/images/offer-img.png" alt=""/>
          </div>
        </div>
        <div  className="btn-box">
          <a href="">
            <div>
            <img src="assets/images/client-chocolate.png" alt=""/>
       
            </div>
            <span>
              See More
            </span>
            <img src="assets/images/color-arrow.png" alt=""/>
          </a>
        </div>
      </div>
    </section>
    
    </>
  )
}
