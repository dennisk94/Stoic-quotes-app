import { AiOutlineCopy } from "react-icons/ai";

const Utils = ( { handleCopyText } ) => {
  return (
    <div className="utils">
        <AiOutlineCopy className="copy" onClick={handleCopyText}/>
    </div>
  )
}

export default Utils