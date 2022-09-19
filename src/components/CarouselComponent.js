import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import QuoteCard from './QuoteCard';

const CarouselComponent = ( { quotes } ) => {
    const settings = {
        autoPlay:true,
        interval: 15000,
        transitionTime: 1350,
        infiniteLoop:true, 
        dynamicHeight:true, 
        showArrows:false, 
        showStatus:false, 
        showIndicators:false, 
        showThumbs:false,
        emulateTouch:true,
        useKeyboardArrows:true,
        ariaLabel:'carousel',
      }
  return (
    <Carousel {...settings} className='carousel-outer'>
        { quotes !== null && quotes.map( ( quote, i ) =><QuoteCard quote={ quote } key={ i }/>) }      
    </Carousel>
  )
}

export default CarouselComponent