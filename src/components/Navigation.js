import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"; // Home icon
import { FaRegUserCircle } from "react-icons/fa"; // User Icon
import { BsBookmark } from "react-icons/bs"; // Bookmark icon
import { BsInfoCircle } from "react-icons/bs"; // Info Icon
import { BsCalendarCheck } from "react-icons/bs"; // Calendar Icon


const Navigation = ( { isSelected } ) => {
  return (
    <nav className={`navigation ${ isSelected ? 'inactive' : null }`}>
        <ul>
            <li>
                <NavLink><span className="home-svg"><AiFillHome /></span>Home</NavLink>
            </li>
            <li>
                <NavLink><span className="author-svg"><FaRegUserCircle /></span>Author</NavLink>
            </li>
            <li>
                <NavLink><span className="bookmark-svg"><BsBookmark /></span>Bookmark</NavLink>
            </li>
            <li>
                <NavLink><span className="about-svg"><BsInfoCircle /></span>About</NavLink>
            </li>
            <li>
                <NavLink><span className="today-svg"><BsCalendarCheck /></span>Today</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation