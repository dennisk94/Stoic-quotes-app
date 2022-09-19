import { useState } from 'react';
import Marcus from '../images/thumbnail/marcus.jpg';
import Seneca from '../images/thumbnail/seneca.jpg';
import Epictetus from '../images/thumbnail/epictetus.jpg';
import Cato from '../images/thumbnail/cato.jpg';
import Zeno from '../images/thumbnail/zeno.jpg';
import Utils from './Utils';

const QuoteCard = ( { quote } ) => {
  const { id, body, author, author_id } = quote;
  const [ isCopied, setIsCopied ] = useState(false);
  // Copy to clipboard functionality
  // Select the quote by it's id 
  const handleCopyText = (id) => {
    let copyText = document.querySelector(`.quote-${ id }`).textContent;
    let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
    let textarea = document.createElement('textarea');
    textarea.textContent = `${ copyText } 

-${ copyAuthor }`;
          document.body.append(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  // Use author_id to programmatically display thumbnail
  const handleThumbnail = () => {
    switch (author_id) {
      case 1:
        return <img src={ Marcus } alt='thumbnail'/>;
      case 2:
        return <img src={ Seneca } alt='thumbnail'/>;
      case 3: 
        return <img src={ Epictetus } alt='thumbnail'/>;
      case 4:
        return <img src={ Cato } alt='thumbnail'/>;
      case 5:
        return <img src={ Zeno } alt='thumbnail'/>;
      default:
    }
  }
  return (
      <div className="quote-card">
        <figure>
          <blockquote className={`quote quote-${ id }`}>
            { body }
          </blockquote>
          <figcaption className="attribution">
              { handleThumbnail() }
              <p className={ `author author-${id}` }>
                { author }
              </p>
          </figcaption>
        </figure>
        <Utils handleCopyText={()=> handleCopyText(id)} isCopied={ isCopied }/>
      </div>
  )
}

export default QuoteCard