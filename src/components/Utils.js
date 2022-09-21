import { AiOutlineCopy } from "react-icons/ai";   // Unfilled Copy Icon
import { AiFillCopy } from "react-icons/ai";      // Unfilled Copy Icon
import { BsBookmark } from "react-icons/bs";      // Unfilled Bookmark Icon
import { BsBookmarkFill } from "react-icons/bs";  // Filled Bookmark Icon

const Utils = ( { handleCopyText, isCopied, handleBookmark, isBookmarked, id } ) => {
  return (
    <div className="utils">
        {
            isCopied === false ? <AiOutlineCopy className="copy" onClick={handleCopyText} />
            :
            <AiFillCopy className="copy" />
        }
        {
            isBookmarked === false ? <BsBookmark className="bookmark" onClick={ () => handleBookmark(id)}/>
            :
            <BsBookmarkFill className="bookmark" onClick={ () => handleBookmark(id) }/>
        }
    </div>
  )
}

export default Utils