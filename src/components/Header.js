import Navigation from "./Navigation"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [ isSelected, setIsSelected ] = useState(true);
  const navigationHandler = () => {
    setIsSelected(!isSelected);
  }
  console.log(isSelected);
  return (
    <header className="header">
        <div className="header-bgc">
          <NavLink to='/' className='app-heading'>
            <h1>The Stoic App</h1>
          </NavLink>
        </div>
        <HiMenu className={`hamburger ${ isSelected ? 'active' : 'inactive' }`} onClick={ navigationHandler}/>
        <BiMenuAltLeft onClick={ navigationHandler} className={`hamburger ${ isSelected ? 'inactive': null }`}/>
        <Navigation isSelected={isSelected}/>
    </header>
  )
}

export default Header