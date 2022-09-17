import { useState, useEffect } from "react"
import QuoteCard from "../components/QuoteCard"

const HomePage = () => {
  const [ quote, setQuote ] = useState(null);
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/random');
      // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/Zeno');
      let data = await res.json();
      setQuote(data);
      // setQuote(data.data[0]);
    }
    fetchRandomQuote();
  }, []);
  console.log(quote);
  return (
    <div className="home-page">
      {
        quote !== null && <QuoteCard quote={ quote }/>
      }
    </div>
  )
}

export default HomePage