import React from 'react'
import Header from './Header'
 import { Component } from 'react'
export default class About extends Component {
  render(){
    return(
    <>  
   <Header/>
       <section className="about_section layout_padding ">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About Our Company
                </h2>
              </div>
              <p>
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their default model text, </p>
              <a href="#">
                <span>
                  Read More
                </span>
                <img src="assets/images/color-arrow.png" alt=""/>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="assets/images/about-img.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>

     
    </>
  )
}
}
