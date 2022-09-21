import { useState, useEffect } from "react"
import CarouselComponent from '../components/CarouselComponent';

const HomePage = () => {
  // Generate a random number between 1-6. Quotes come from Stoic Quotes API: https://stoicquotesapi.com/
  // Number range 1-6 comes from Stoic Quotes API's total number of pages. Look at last_page key: https://stoicquotesapi.com/v1/api/quotes
  const generateRandomPage = () => {                
    return Math.floor(( Math.random() * 6 ) + 1 );
  }
  const [ quotes, setQuotes ] = useState(null);                                                             // Quotes state

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes?page=${ generateRandomPage() }` ); // Get quotes based on random page number
      let data = await res.json();
      setQuotes(data.data);
    }
    fetchRandomQuotes();
  }, []);
  return (
    <div className="home-page">
      <div className="carousel-wrapper">
        {
          quotes !== null && <CarouselComponent  quotes={ quotes } />
        }
      </div>
    </div>
  )
}

export default HomePage