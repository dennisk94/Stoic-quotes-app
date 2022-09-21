import { useState, useEffect } from "react"
import QuoteCard from "../components/QuoteCard"

const TodayPage = () => {
    const [ quote, setQuote ] = useState(null);
    useEffect(() => {
        const fetchRandomQuote = async () => {
            const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes/random` ); 
            let data = await res.json();
            setQuote(data);
        }
        fetchRandomQuote();
    }, []);
    console.log(quote);

    return (
        <div className="today-page">
            <div className="today-quote-wrapper">
                {
                    quote !== null && <QuoteCard quote={ quote }/>
                }
            </div>
        </div>
    )
}

export default TodayPage