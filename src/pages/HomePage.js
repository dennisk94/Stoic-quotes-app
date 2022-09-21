import { useState, useEffect } from "react"
import { appTitle } from "../globals/globals";
import CarouselComponent from '../components/CarouselComponent';
import { generateRandomPage } from '../util/util';
import { fetchRandomQuotes } from "../fetchRequests/allFetchRequests";

const HomePage = () => {
  const [ quotes, setQuotes ] = useState(null);                                                             // Quotes state
  generateRandomPage();                                                                                     // Generate random number between 1-6
  useEffect(() => {
    fetchRandomQuotes(generateRandomPage, setQuotes);
    document.title = `${appTitle} - Home`;
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