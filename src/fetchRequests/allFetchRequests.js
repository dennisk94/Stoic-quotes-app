export const fetchRandomQuotes = async ( generateRandomPage, setQuotes ) => { // Get quotes based on random page number
    const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes?page=${ generateRandomPage() }` ); 
    let data = await res.json();
    setQuotes(data.data);
}

export const fetchAuthorQuotes = async ( slug, setSingleAuthorQuotes ) => { // Fetch quotes by author name: https://stoicquotesapi.com/v1/api/quotes/Seneca 
    const res = await fetch(`https://stoicquotesapi.com/v1/api/quotes/${ slug }`);  
    let data = await res.json();
    setSingleAuthorQuotes(data.data);
}

export const fetchRandomQuote = async (setQuote) => { // Fetch a random quote: https://stoicquotesapi.com/v1/api/quotes/random
    const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes/random` ); 
    let data = await res.json();
    setQuote(data);
}