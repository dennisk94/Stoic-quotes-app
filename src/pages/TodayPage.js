import { useState, useEffect } from "react"
import QuoteCard from "../components/QuoteCard"

const TodayPage = () => {
    const [ quote, setQuote ] = useState(null);                                           // State for single quote
    useEffect(() => {
        const fetchRandomQuote = async () => {
            const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes/random` ); // Fetch a random quote: https://stoicquotesapi.com/v1/api/quotes/random
            let data = await res.json();
            setQuote(data);
        }
        fetchRandomQuote();
    }, []);
    return (
        <div className="today-page">
            <div className="today-quote-wrapper">
                {
                    quote !== null && <QuoteCard quote={ quote }/>                        // Pass in single quote object if the state is not null
                }
            </div>
        </div>
    )
}

export default TodayPage