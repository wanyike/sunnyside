import React from 'react'
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import pinterest from "../images/icon-pinterest.svg"
import twitter from "../images/icon-twitter.svg"
import FooterLogo from "../images/footer-logo.svg"

const Footer = () => {
  return (
    <>
          <footer className="footer p-4">
              <div className="">
                  <img src={FooterLogo} alt="sunnyside" className="block mx-auto" />
              </div>

              <ul className="flex items-center justify-center my-5">
                  <li className="mx-2"><button className="">About</button></li>
                  <li className="mx-2"><button className="">Services</button></li>
                  <li className="mx-2"><button>Projects</button></li>
              </ul>

        <ul className="flex items-center justify-center my-4">
          <li className="mx-2"><img src={facebook} alt="facebook"/> </li>
          <li className="mx-2"><img src={instagram} alt="instagram"/> </li>
          <li className="mx-2"><img src={twitter} alt="twitter"/> </li>
          <li className="mx-2"><img src={pinterest} alt="pinterest"/> </li>
      </ul>    
       </footer>
    </>
  )
}

export default Footer
