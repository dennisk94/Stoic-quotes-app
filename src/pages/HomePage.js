import { useState, useEffect } from "react"
import CarouselComponent from '../components/CarouselComponent';

const HomePage = () => {
  const generateRandomPage = () => {
    return Math.floor(( Math.random() * 6 ) + 1 );
  }
  const [ quotes, setQuotes ] = useState(null);

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes?page=${ generateRandomPage() }` ); 
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