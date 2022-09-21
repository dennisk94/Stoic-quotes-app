import { useState } from 'react';
import Utils from './Utils';
import { handleThumbnail } from '../util/util';
import { handleBookmark } from '../localStorage/localStorageFunctions';

const QuoteCard = ( { quote } ) => {
  const { id, body, author, author_id } = quote;
  const [ isCopied, setIsCopied ] = useState(false); // state determining if quote was copied or not.
  const [ isBookmarked, setIsBookmarked ] = useState(false); // Check if a quote has been bookmarked

  // Copy to clipboard functionality
  // Select the quote by it's id 
  const handleCopyText = (id) => {
    const copyText = async () => { // Handle copying to clipboard functionality
      let copyText = document.querySelector(`.quote-${ id }`).textContent; // Get quote
      let copyAuthor = document.querySelector(`.author-${ id }`).textContent; // Get author
      // Use the Clipboard API to allow copy functionality
      await navigator.clipboard.writeText(`${ copyText } 
  
-${ copyAuthor }
      `);
      setIsCopied(true);
      setTimeout(() => { // Reset copy icon to unfilled after 1s
        setIsCopied(false);
      }, 1000);
    }
    navigator.permissions.query({ name: 'clipboard-read' }).then((result) => { // Check if permission has been granted for the Clipboard API. 
                                                                               // Permissions query: https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
                                                                               // List of query names for chromium: https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl
      if (result.state === 'granted') {
        copyText();
      } else if (result.state === 'prompt') {
        window.alert('Permission for Clipboard API not yet granted')
      }
    });
  }

  return (
      <div className="quote-card">
        <figure>
          <blockquote className={`quote quote-${ id }`}>
            { body }
          </blockquote>
          <figcaption className="attribution">
              { handleThumbnail( author_id ) }
              <p className={ `author author-${id}` }>
                { author }
              </p>
          </figcaption>
        </figure>
        <Utils handleCopyText={()=> handleCopyText(id)} isCopied={ isCopied } handleBookmark={ () => handleBookmark(id, setIsBookmarked) } isBookmarked={ isBookmarked } id={id}/>
      </div>
  )
}

export default QuoteCard