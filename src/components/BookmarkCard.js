import { BsBookmarkFill } from "react-icons/bs";
import { retrieveLocalStorage, setLocalStorage } from "../localStorage/localStorageFunctions";

const BookmarkCard = ({ bookmark, setChangeBookmarks, changeBookmarks }) => {
    const { id, author, quote } = bookmark;
    const handleBookmark = (id) => {
        // Retrieve local storage and remove quote with passed in id from array 
        let newBookmarks = retrieveLocalStorage().filter( ( bookmark ) => bookmark.id !== id);
        // Set new local storage based on updated bookmarks array
        setLocalStorage(newBookmarks);
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