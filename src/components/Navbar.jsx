import { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Career from "./career/Career"
import App from "../App"
import { Helmet } from "react-helmet"
import './Nav.css'
import Dropdown from '../components/career/drpodown/Dropdown'
import '../components/career/drpodown/Style.css';

export default function Navbar({appLogo}) {
  const [isShow, setIsShow] = useState(false);
  
  function click(){
    setIsShow(!isShow)
  }

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
        {/* <a href="#career"
          className="font-light uppercase">
            Career
        </a> */}
        {/* <select value={selectedOption} onChange={handleSelectChange}>
          {<option value=""></option>}
        </select> */}
        <Dropdown title="career">
          <a className="dropdown-item" href="#career">Internship | </a><br />
          <a className="dropdown-item" href="#career">Employee</a>            
        </Dropdown>
      </li>
    </>
  )

  function list(){
    setIsShow(!isShow)
    console.log('show')
  }

  // const option = [
  //   {value: 'option1', label: 'INTERNSHIIP'},
  //   {value: 'option2', label: 'EMPLOYEE'}
  // ];

  // const [selectedOption, setSelectedOption] = useState('');

  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

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
        
        {/* <div className="menu-toggle lg:hidden md:flex sm:flex px-0">
          <input type="checkbox"  />
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        
        <div className="mx-auto dropdown dropdown-end">
          <button tabIndex={0} className="lg:hidden btn btn-circle" onClick={list}>
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          </button>
          {isShow ?
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>:null
          }            
        </div>
      </div>
    </>
  )
}