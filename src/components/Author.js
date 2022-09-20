import { useState } from "react";
import AuthorModal from "./AuthorModal";
import { BsInfoCircle } from "react-icons/bs"; // Info Icon

const Author = ( { author } ) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { id, 
            name,
            slug,
            title,
            born,
            death,
            thumbnail,
            biography,
            externalResource
        } = author;
    const handleInfoClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <div className="author-card">
            <img src={ thumbnail } alt="thumbnail" className="thumbnail"/>
            <div className="stoic-name">
                <p>
                    { name }
                </p>
            </div>
            <BsInfoCircle className="info" onClick={ handleInfoClick }/>
            <AuthorModal isOpen={ isOpen } setIsOpen={ setIsOpen } author={ author }/>
        </div>
    </>
  )
}

export default Author