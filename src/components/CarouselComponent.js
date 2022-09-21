import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import QuoteCard from './QuoteCard';
import { settings } from '../carousel/carouselSettings';

const CarouselComponent = ( { quotes } ) => {
  return (
    <>
      <Carousel {...settings} className='carousel-outer'>
        { quotes !== null && quotes.map( ( quote, i ) =><QuoteCard quote={ quote } key={ i } />) }      
      </Carousel>
    </>
    
  )
}

export default CarouselComponent