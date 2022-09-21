import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"; // Home icon
import { FaRegUserCircle } from "react-icons/fa"; // User Icon
import { BsBookmark } from "react-icons/bs"; // Bookmark icon
import { BsInfoCircle } from "react-icons/bs"; // Info Icon
import { BsCalendarCheck } from "react-icons/bs"; // Calendar Icon

const Navigation = ( { isSelected, navigationHandler } ) => {
  return (
    <nav className={`navigation ${ isSelected ? 'inactive' : null }`}>
        <ul>
            <li>
                <Link to='/' onClick={ navigationHandler}><span className="home-svg"><AiFillHome /></span>Home</Link>
            </li>
            <li>
                <Link to='/authors' onClick={ navigationHandler}><span className="author-svg"><FaRegUserCircle /></span>Authors</Link>
            </li>
            <li>
                <Link to='/bookmarks' onClick={ navigationHandler}><span className="bookmark-svg"><BsBookmark /></span>Bookmarks</Link>
            </li>
            <li>
                <Link to='/today' onClick={ navigationHandler}><span className="today-svg"><BsCalendarCheck /></span>Today</Link>
            </li>
            <li>
                <Link to='/about' onClick={ navigationHandler}><span className="about-svg"><BsInfoCircle /></span>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation