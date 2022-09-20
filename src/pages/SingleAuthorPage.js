import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import SingleAuthorQuotes from '../components/SingleAuthorQuotes';

const SingleAuthorPage = () => {
    const [ singleAuthorQuotes, setSingleAuthorQuotes ] = useState(null);
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        const fetchAuthorQuotes = async () => {
            const res = await fetch(`https://stoicquotesapi.com/v1/api/quotes/${ slug }`);
            let data = await res.json();
            setSingleAuthorQuotes(data.data);
        }
        fetchAuthorQuotes();
    }, [slug]);
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
    console.log(singleAuthorQuotes);
return (
    <div className="single-author-page">
        <Carousel {...settings}>
            { singleAuthorQuotes !== null ? singleAuthorQuotes.map( ( quote, i ) => { return (
                        <SingleAuthorQuotes quote={quote} key={i}/>
            )} ) 
            : <h1>No quotes found...</h1>}
        </Carousel>
    </div>
)
}

export default SingleAuthorPage