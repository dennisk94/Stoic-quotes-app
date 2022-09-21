import Navigation from "./Navigation"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const [ isSelected, setIsSelected ] = useState(true); // Change display of header based on state

  const navigationHandler = () => {
    setIsSelected(!isSelected);
  }

  return (
    <header className="header">
        <div className="header-bgc">
          <Link to='/' className='app-heading'>
            <h1>The Stoic</h1>
          </Link>
        </div>
        <HiMenu className={`hamburger ${ isSelected ? 'active' : 'inactive' }`} onClick={ navigationHandler}/>
        <BiMenuAltLeft onClick={ navigationHandler} className={`hamburger ${ isSelected ? 'inactive': null }`}/>
        <Navigation isSelected={isSelected} navigationHandler={ navigationHandler}/>
    </header>
  )
}

export default Header