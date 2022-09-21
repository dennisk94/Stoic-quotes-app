import Marcus from '../images/thumbnail/marcus.jpg';       // Marcus Aurelius Thumbnail
import Seneca from '../images/thumbnail/seneca.jpg';       // Seneca Thumbnail
import Epictetus from '../images/thumbnail/epictetus.jpg'; // Epictetus Thumbnail
import Cato from '../images/thumbnail/cato.jpg';           // Zeno Thumbnail
import Zeno from '../images/thumbnail/zeno.jpg';           // Cato Thumbnail

// Use author_id to programmatically display thumbnail
export const handleThumbnail = ( author_id ) => {
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

// Generate a random number between 1-6. Quotes come from Stoic Quotes API: https://stoicquotesapi.com/
// Number range 1-6 comes from Stoic Quotes API's total number of pages. Look at last_page key: https://stoicquotesapi.com/v1/api/quotes
export const generateRandomPage = () => {                
    return Math.floor(( Math.random() * 6 ) + 1 );
}

// Output different className depending on bookmarks state
export const handleClass = (bookmarks) => {                                      
    if (  bookmarks !== null && bookmarks.length !== 0 ) {
        return 'bookmarks-wrapper'
    } else {
        return 'no-bookmarks-wrapper'
    }
}

// Retrieve selected quote from DOM
export const selectQuote = (id) => { 
    let copyText = document.querySelector(`.quote-${ id }`).textContent;
    let copyAuthor = document.querySelector(`.author-${ id }`).textContent;
    return { copyText, copyAuthor }
}