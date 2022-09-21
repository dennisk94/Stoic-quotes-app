import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import SingleAuthorQuotes from '../components/SingleAuthorQuotes';

const SingleAuthorPage = () => {
    const [ singleAuthorQuotes, setSingleAuthorQuotes ] = useState(null);                   // State for single stoic's quotes
    const { slug } = useParams();
    useEffect(() => {
        const fetchAuthorQuotes = async () => {
            const res = await fetch(`https://stoicquotesapi.com/v1/api/quotes/${ slug }`);  // Fetch quotes by author name: https://stoicquotesapi.com/v1/api/quotes/Seneca
            let data = await res.json();
            setSingleAuthorQuotes(data.data);
        }
        fetchAuthorQuotes();
    }, [slug]);
    const settings = {                                                                      // Settings for carousel
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
    <div className="single-author-page">
        <Carousel {...settings}>
            { singleAuthorQuotes !== null ? singleAuthorQuotes.map( ( quote, i ) => { return ( // Pass in single author's quotes if the value is not null
                        <SingleAuthorQuotes quote={quote} key={i}/>
            )} ) 
            : <h1>The capacity for patience was given us for a reason</h1>}
        </Carousel>
    </div>
)
}

export default SingleAuthorPage