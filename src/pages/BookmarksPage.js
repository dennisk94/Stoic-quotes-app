import { useState, useEffect } from 'react';
import BookmarkCard from '../components/BookmarkCard';

const BookmarksPage = () => {
  const [ bookmarks, setBookmarks ] = useState(null);
  const [ changeBookmarks, setChangeBookmarks ] = useState(false);
  useEffect(() => {
    const retrieveLocalStorage = async () => {
      let retrieveLocalStorage = localStorage.getItem('bookmarks');
      let retrievedBookmarks = JSON.parse(retrieveLocalStorage);
      setBookmarks(retrievedBookmarks)
    }
    retrieveLocalStorage();
  }, [changeBookmarks]);
  console.log(bookmarks);
  const bookmarksComponent = () => {
    if ( bookmarks !== null && bookmarks.length !== 0 ) {
      return (
        bookmarks.map( (bookmark, i) => <BookmarkCard bookmark={bookmark} setChangeBookmarks={setChangeBookmarks} changeBookmarks={changeBookmarks} key={i}/>)
      )
    } else {
      return <h1 className='no-bookmarks'>There are no bookmarks...</h1>
    }
  }
  return (
    <div className="bookmarks-page">
      <div className="bookmarks-wrapper">
        {
          bookmarksComponent()
        }
      </div>
    </div>
  )
}

export default BookmarksPage