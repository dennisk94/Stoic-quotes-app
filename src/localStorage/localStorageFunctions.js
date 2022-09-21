import { selectQuote } from "../util/util";
export const retrieveLocalStorage = () => {
    let retrieveLocalStorage = localStorage.getItem('bookmarks'); // Get local storage
    let retrievedBookmarks = JSON.parse(retrieveLocalStorage);
    return retrievedBookmarks;
}

export const setLocalStorage = (newBookmarks) => {
    let oUpdatedBookmarks = JSON.stringify(newBookmarks);
    localStorage.setItem('bookmarks', oUpdatedBookmarks); // Add updated bookmarks to local storage
}

export const handleBookmark = (id, setIsBookmarked) => {
    if ( retrieveLocalStorage() === null ) {                                          // check if local storage already exists
        setIsBookmarked(true);
        let newQuote = [                                                              // Create a new quote object
            {
            id,
            quote: selectQuote(id).copyText,
            author: selectQuote(id).copyAuthor
            }
        ];
        setLocalStorage(newQuote);                                                    // Add new quote to existing quotes
    } else {                                                                          // If local storage does not exist, create 
                                                                                      // one and add the selected quote
        ;
        // retrieveLocalStorage();
        let doesQuoteExist = retrieveLocalStorage().find( quote => quote.id === id);     // check if bookmarked quote already exists
        if ( !doesQuoteExist ) {
            setIsBookmarked(true);
            let newQuote = [
            ...retrieveLocalStorage(),
            {
                id,
                quote: selectQuote(id).copyText,
                author: selectQuote(id).copyAuthor
            }
            ]
            setLocalStorage(newQuote);
        } else {
            let filteredBookmarks = retrieveLocalStorage().filter( ( quote ) => quote.id !== id ); // remove quote if it already exists in local storage using array.filter();
            setLocalStorage(filteredBookmarks)
            // Add updated Quotes array to local storage
            setIsBookmarked(false);
            return;
        }
    }
  }