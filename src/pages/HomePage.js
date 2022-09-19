import { useState, useEffect } from "react"
import CarouselComponent from '../components/CarouselComponent';

const HomePage = () => {
  const generateRandomPage = () => {
    return Math.floor(( Math.random() * 6 ) + 1 );
    // setPage( randomPage );
    // console.log(randomPage);
  }
  const [ quotes, setQuotes ] = useState(null);
  // const [ page, setPage ] = useState(generateRandomPage());

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes?page=${ generateRandomPage() }` ); 
      // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes'); 
      // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/random');
      // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/Zeno');
      let data = await res.json();
      setQuotes(data.data);
      // generateRandomPage(data.last_page);
    }
    fetchRandomQuotes();
  }, []);
  // console.log(page);
  console.log(quotes);
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