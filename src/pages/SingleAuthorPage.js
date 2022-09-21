import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { appTitle } from "../globals/globals";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import SingleAuthorQuotes from '../components/SingleAuthorQuotes';
import { fetchAuthorQuotes } from '../fetchRequests/allFetchRequests';
import { settings } from '../carousel/carouselSettings';

const SingleAuthorPage = () => {
    const [ singleAuthorQuotes, setSingleAuthorQuotes ] = useState(null);                      // State for single stoic's quotes
    const { slug } = useParams();
    useEffect(() => {
        fetchAuthorQuotes( slug, setSingleAuthorQuotes );
        document.title = `${appTitle} - ${ slug }`;
    }, [slug]);
    
return (
    <div className="single-author-page">
        <Carousel {...settings}>
            { singleAuthorQuotes !== null ? singleAuthorQuotes.map( ( quote, i ) => { return ( // Pass in single author's quotes if the value is not null
                        <SingleAuthorQuotes quote={quote} key={i}/>
            )} ) 
            : <h1>The capacity for patience was given to us for a reason</h1>}
        </Carousel>
    </div>
)
}

export default SingleAuthorPage