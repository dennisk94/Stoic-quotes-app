import Navigation from "./Navigation"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
  const [ isSelected, setIsSelected ] = useState(true);
  const navigationHandler = (msg) => {
    console.log(msg);
    setIsSelected(!isSelected);
  }
  console.log(isSelected);
  return (
    <header className="header">
        <HiMenu className={`hamburger ${ isSelected ? 'active' : 'inactive' }`} onClick={ () => navigationHandler('closed menu')}/>
        <BiMenuAltLeft onClick={ () => navigationHandler('opened menu')} className={`hamburger ${ isSelected ? 'inactive': null }`}/>
        <Navigation isSelected={isSelected}/>
    </header>
  )
}

export default Header