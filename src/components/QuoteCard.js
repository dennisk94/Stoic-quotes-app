import { useState } from 'react';
import Utils from './Utils';
import { handleThumbnail } from '../util/util';

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

  const handleBookmark = (id) => {
    let doesStorageExist = localStorage.getItem('bookmarks');                   // get local storage
    if ( doesStorageExist === null ) {                                          // check if local storage already exists
      setIsBookmarked(true);
      let copyText = document.querySelector(`.quote-${ id }`).textContent;
      let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
      let newQuote = [                                                          // Create a new quote object
        {
          id,
          quote: copyText,
          author: copyAuthor
        }
      ];
      let addQuote = JSON.stringify(newQuote);
      localStorage.setItem('bookmarks', addQuote );                             // Add new quote to existing quotes
    } else {                                                                    // If local storage does not exist, create one and add the selected quote
      let copyText = document.querySelector(`.quote-${ id }`).textContent;
      let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
      let existingStorage = localStorage.getItem('bookmarks');
      let oExistingStorage = JSON.parse(existingStorage);
      let doesQuoteExist = oExistingStorage.find( quote => quote.id === id);     // check if bookmarked quote already exists
      if ( !doesQuoteExist ) {
        setIsBookmarked(true);
        let newQuote = [
          ...oExistingStorage,
          {
            id,
            quote: copyText,
            author: copyAuthor
          }
        ]
        let addQuote = JSON.stringify( newQuote );
        localStorage.setItem('bookmarks', addQuote);
      } else {
        let bookmarksStorage = localStorage.getItem('bookmarks'); 
        let oBookmarks = JSON.parse(bookmarksStorage);
        let filteredBookmarks = oBookmarks.filter( ( quote ) => quote.id !== id ); // remove quote if it already exists in local storage using array.filter();
        let oUpdatedQuotes = JSON.stringify(filteredBookmarks); 
        localStorage.setItem('bookmarks', oUpdatedQuotes);                         // Add updated Quotes array to local storage
        setIsBookmarked(false);
        return;
      }
    }
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
        <Utils handleCopyText={()=> handleCopyText(id)} isCopied={ isCopied } handleBookmark={ handleBookmark } isBookmarked={ isBookmarked } id={id}/>
      </div>
  )
}

export default QuoteCard