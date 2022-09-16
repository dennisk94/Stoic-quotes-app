import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"; // Home icon
import authorSvg from '../images/svg/author.svg';
import { BsBookmark } from "react-icons/bs"; // Bookmark icon
import aboutSvg from '../images/svg/about.svg';
import todaySvg from '../images/svg/check.svg';

const Navigation = () => {
  return (
    <nav className="navigation">
        <ul>
            <li>
                <NavLink><span className="home-svg"><AiFillHome /></span>Home</NavLink>
            </li>
            <li>
                <NavLink><span className="author-svg"><img src={authorSvg} alt="author" /></span>Author</NavLink>
            </li>
            <li>
                <NavLink><span className="bookmark-svg"><BsBookmark /></span>Bookmark</NavLink>
            </li>
            <li>
                <NavLink><span className="about-svg"><img src={aboutSvg} alt="about" /></span>About</NavLink>
            </li>
            <li>
                <NavLink><span className="today-svg"><img src={todaySvg} alt="today" /></span>Today</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation