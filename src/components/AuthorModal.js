import { AiOutlineClose } from "react-icons/ai";
import { FcWikipedia } from "react-icons/fc";

const AuthorModal = ( { isOpen, setIsOpen, author } ) => {
    const { name,
            title,
            born,
            death,
            thumbnail,
            biography,
            externalResource 
        } = author;
  return (
    // Render or hide modal depending on state of isOpen
    <div className={`modal ${ isOpen ? 'modal-active' : 'modal-inactive'}`}> 
        <AiOutlineClose className={ `${isOpen ? 'close-modal' : 'inactive'}` } onClick={ () => setIsOpen(false) }/>
        <div className="content-wrapper">
            <div className="general-info-wrapper">
                <div className="stats">
                    <h2 className="modal-author-name">
                        { name }
                    </h2>
                    <p className="author-title">
                        { title }
                    </p>
                    <p className="author-date-range">
                        { `${ born } - ${ death }` }
                    </p>
                </div>
                <img src={ thumbnail } alt="thumbnail" className="author-image"/>
            </div>
            <div className="biography">
                <h2 className="biography-heading">
                    Biography
                </h2>
                <p className="biography-text">
                    { biography }
                </p>
            </div>
            {/* External link to wikipedia page about selected stoic */}
            <div className="external-resource">
                <a href={ externalResource } className="wikipedia-link" target="_blank" rel="noreferrer">
                    <FcWikipedia className="wikipedia-link-svg"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default AuthorModal