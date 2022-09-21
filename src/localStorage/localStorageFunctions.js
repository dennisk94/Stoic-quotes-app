export const retrieveLocalStorage = async (setBookmarks) => {
    let retrieveLocalStorage = localStorage.getItem('bookmarks');
    let retrievedBookmarks = JSON.parse(retrieveLocalStorage);
    setBookmarks(retrievedBookmarks)
}