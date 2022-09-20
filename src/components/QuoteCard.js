import { useState } from 'react';

import Utils from './Utils';
import { handleThumbnail } from '../util/handleThumbnail';

const QuoteCard = ( { quote } ) => {
  const { id, body, author, author_id } = quote;
  const [ isCopied, setIsCopied ] = useState(false); // state determining if quote was copied or not.
  const [ isBookmarked, setIsBookmarked ] = useState(false);

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

  const handleBookmark = (id) => {
    // get local storage
    let doesStorageExist = localStorage.getItem('bookmarks');
    // check if local storage already exists
    if ( doesStorageExist === null ) {
      setIsBookmarked(true);
      let copyText = document.querySelector(`.quote-${ id }`).textContent;
      let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
      let newQuote = [
        {
          id,
          quote: copyText,
          author: copyAuthor
        }
      ];
      let addQuote = JSON.stringify(newQuote);
      // set new local storage item
      localStorage.setItem('bookmarks', addQuote );
    } else {
      let copyText = document.querySelector(`.quote-${ id }`).textContent;
      let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
      let existingStorage = localStorage.getItem('bookmarks');
      let oExistingStorage = JSON.parse(existingStorage);
      // check if bookmarked quote already exists
      let doesQuoteExist = oExistingStorage.find( quote => quote.id === id);
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
        // remove quote if it already exists in local storage using array.filter();
        // get local storage
        let bookmarksStorage = localStorage.getItem('bookmarks'); 
        let oBookmarks = JSON.parse(bookmarksStorage);
        let filteredBookmarks = oBookmarks.filter( ( quote ) => quote.id !== id );
        let oUpdatedQuotes = JSON.stringify(filteredBookmarks); 
        localStorage.setItem('bookmarks', oUpdatedQuotes);
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