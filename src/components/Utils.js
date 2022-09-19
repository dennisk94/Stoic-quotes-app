import { AiOutlineCopy } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";

const Utils = ( { handleCopyText, isCopied } ) => {
  return (
    <div className="utils">
        {
            isCopied === false ? <AiOutlineCopy className="copy" onClick={handleCopyText} />
            :
            <AiFillCopy className="copy" />
        }
    </div>
  )
}

export default Utils