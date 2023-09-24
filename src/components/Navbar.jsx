import React from 'react'
import logo from "../assets/weather.png"
import {GithubIcon,Linkdn} from "../assets/Icons/index";
import ThemeChanger from './ThemeChanger';
import {useSelector} from "react-redux"


function Navbar() {
  const theme = useSelector((state) => state.weather.theme)
  return (
    <div className='Navbar'>
        <div className='logo'><a href=""> <img src={logo} alt="" /></a></div>
        <div className='link'>
            <ul className='navList'>
                <li><a href="https://github.com/ozgurokan" target="_blank"><GithubIcon fill={theme ? "white" :"black"}/> </a></li>
                <li><a href="https://www.linkedin.com/in/ozgur-okan-ozdal/" target="_blank"><Linkdn fill={theme ? "white" : "black"}/> </a></li>
                <li> <ThemeChanger/> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar