import { useState, useEffect } from "react"
import { appTitle } from "../globals/globals";
import QuoteCard from "../components/QuoteCard"
import { fetchRandomQuote } from "../fetchRequests/allFetchRequests";

const TodayPage = () => {
    const [ quote, setQuote ] = useState(null);                                           // State for single quote
    useEffect(() => {
        fetchRandomQuote(setQuote);
        document.title = `${appTitle} - Today`;
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