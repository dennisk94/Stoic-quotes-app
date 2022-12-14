import { useState } from "react";
import AuthorModal from "./AuthorModal";
import { BsInfoCircle } from "react-icons/bs";      // Info Icon
import { Link } from "react-router-dom";

const Author = ( { author } ) => {
    const [ isOpen, setIsOpen ] = useState(false); // State checking if modal on authors page is opened
    const { name,
            slug,
            thumbnail,
        } = author;
    const handleInfoClick = () => {
        setIsOpen(!isOpen);                        // switch between true and false depending on click event
    }
  return (
    <>
        <div to={`/author/${ slug }` } className="author-card">
            <Link to={ `/author/${ slug }` }>
                <img src={ thumbnail } alt="thumbnail" className="thumbnail"/>
            </Link>
            <div className="stoic-name">
                <Link to={ `/author/${ slug }`}>
                    { name }
                </Link>
            </div>
            <BsInfoCircle className="info" onClick={ handleInfoClick }/>
            <AuthorModal isOpen={ isOpen } setIsOpen={ setIsOpen } author={ author }/> 
        </div>
    </>
  )
}

export default Author