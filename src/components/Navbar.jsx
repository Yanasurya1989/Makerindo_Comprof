import { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Career from "./career/Career"
import App from "../App"
import { Helmet } from "react-helmet"

export default function Navbar({appLogo}) {
  const [active, setActive] = useState("")

  const links = (
    <>
      <li>
        <a href="#about"
          className="font-light uppercase">
            About 
        </a>
      </li>
      <li>
        <a href="#gallery"
          className="font-light uppercase">
            Competency
        </a>
      </li>
      <li>
        <a href="#products"
          className="font-light uppercase">
            Catalog
        </a>
      </li>
      <li>
        <a href="#news"
          className="font-light uppercase">
            Blog
        </a>
      </li>
      <li>
        <a href="#contact"
          className="font-light uppercase">
            Contact
        </a>
      </li>
      <li>
        
        <Router>
          <a href="/career" className="font-light uppercase">Career</a>
          
        </Router>

        {/* <a href="#contact"
          className="font-light uppercase">
            Career
        </a> */}
      </li>
    </>
  )

  return (
    <>
      <div className="navbar bg-base-100 w-full px-12 sticky top-0 z-50 bg-opacity-70 h-[65px] z-[100]">
        <div className="navbar-start">
          <div className="dropdown">
            {/* <label tabIndex={0} className="lg:hidden">
              {appLogo}
            </label> */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="normal-case">{appLogo}</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </>
  )
}