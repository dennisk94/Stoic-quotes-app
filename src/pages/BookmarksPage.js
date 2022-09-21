import { useState, useEffect } from 'react';
import BookmarkCard from '../components/BookmarkCard';
import { retrieveLocalStorage } from '../localStorage/localStorageFunctions';
import { handleClass } from '../util/util';

const BookmarksPage = () => {
  const [ bookmarks, setBookmarks ] = useState(null);               // Check if bookmarks exist
  const [ changeBookmarks, setChangeBookmarks ] = useState(false);  // Check if bookmarks has changed, dependency state that runs useEffect
  useEffect(() => {
    retrieveLocalStorage(setBookmarks);                             // Retrieve bookmarks from local storage
  }, [changeBookmarks]);
  const bookmarksComponent = () => {
    if ( bookmarks !== null && bookmarks.length !== 0 ) {           // Check if bookmarks exist and is not an empty array
      return (
        bookmarks.map( (bookmark, i) => <BookmarkCard bookmark={bookmark} setChangeBookmarks={setChangeBookmarks} changeBookmarks={changeBookmarks} key={i}/>)
      )
    } else {
      return <h1 className='no-bookmarks'>There are no bookmarks...</h1>
    }
  }                                                                         
  return (
    <div className="bookmarks-page">
      <div className={ handleClass(bookmarks) }>
        {
          bookmarksComponent()
        }
      </div>
    </div>
  )
}

export default BookmarksPage