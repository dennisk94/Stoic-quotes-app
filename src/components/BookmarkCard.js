import { BsBookmarkFill } from "react-icons/bs";

const BookmarkCard = ({ bookmark, setChangeBookmarks, changeBookmarks }) => {
    const { id, author, quote } = bookmark;
    const handleBookmark = (id) => {
        // Retrieve local storage of bookmarks
        let retrieveLocalStorage = localStorage.getItem('bookmarks');
        let retrievedBookmarks = JSON.parse(retrieveLocalStorage);
        // Remove quote with passed in id from array 
        let newBookmarks = retrievedBookmarks.filter( ( bookmark ) => bookmark.id !== id);
        let oUpdatedBookmarks = JSON.stringify(newBookmarks);
        // Add updated bookmarks to local storage
        localStorage.setItem('bookmarks', oUpdatedBookmarks);
        // Re-render bookmarks by changing state of changeBookmarks( it is included in the dependency array of useEffect hook )
        setChangeBookmarks(!changeBookmarks);
    }
  return (
    <div className="bookmark-card">
        <div className="quote-wrapper">
            <p className="bookmark-quote">
                { quote }
            </p>
            <p className="bookmark-author">
                { author }
            </p>
        </div>
            <BsBookmarkFill className="bookmarks-bookmark" onClick={ () => handleBookmark(id) }/>
    </div>
  )
}

export default BookmarkCard