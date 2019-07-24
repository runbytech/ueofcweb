import React, { useState, useEffect } from 'react'

const Footer = ({}) => {


  useEffect(()=>{
    let cpBtn = document.querySelector(".cp-btn");
    let email = document.querySelector('.em-ipt');
    cpBtn.addEventListener('click', () => {
       email.focus();
       email.select();
       try {
         let successful = document.execCommand('copy');
         let msg = successful ? 'successful' : 'unsuccessful';
         console.log('Copying text command was ' + msg);
       } catch (err) {
         console.log('Oops, unable to copy');
       }
       cpBtn.innerHTML = "Copied!";
    })
  })

  return (<>
    <footer className="bg-li py-5">
      <div className="container py-xl-5 py-lg-3">
        <div className="subscribe mx-auto">
          <div className="icon-effect-w3">
            <span className="fa fa-envelope"></span>
          </div>
          <h2 className="tittle text-center font-weight-bold">Stay Connected!</h2>
          <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Feel free to send email to me, I&#39;ll reply to you even the tinyest questions!</p>
          <form action="#" method="post" className="subscribe-wthree pt-2">
            <div className="d-flex subscribe-wthree-field">
              <input className="form-control em-ipt" type="email" defaultValue="lwz7512@gmail.com" 
                name="email" required="" />
              <button className="btn form-control w-50 cp-btn" type="button">Copy</button>
            </div>
          </form>
        </div>
      </div>
    </footer>

    <div className="copy-bottom bg-li py-4 border-top">
      <div className="container-fluid">
        <div className="d-md-flex px-md-3 position-relative text-center">
          
          <div className="social-icons-footer mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#"><span className="fab fa-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span className="fab fa-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span className="fab fa-google-plus"></span></a>
              </li>
              <li>
                <a href="#"><span className="fab fa-instagram"></span></a>
              </li>
            </ul>
          </div>
          
          <div className="copy_right mx-md-auto mb-md-0 mb-3">
            <p className="text-bl let">© 2019 Runbytech. All rights reserved | Design by
              <a href="http://w3layouts.com/" target="_blank">W3layouts</a>
            </p>
          </div>
          
        
          <a href="#home" className="move-top text-center">
            <i className="fa fa-level-up-alt" aria-hidden="true"></i>
          </a>
          
        </div>
      </div>
    </div>
  </>)
}

export default Footer