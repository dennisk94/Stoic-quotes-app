import { AiOutlineCopy } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const Utils = ( { handleCopyText, isCopied, handleBookmark, isBookmarked } ) => {
  return (
    <div className="utils">
        {
            isCopied === false ? <AiOutlineCopy className="copy" onClick={handleCopyText} />
            :
            <AiFillCopy className="copy" />
        }
        {
            isBookmarked === false ? <BsBookmark className="bookmark" onClick={handleBookmark}/>
            :
            <BsBookmarkFill className="bookmark"/>
        }
    </div>
  )
}

export default Utils