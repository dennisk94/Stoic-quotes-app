import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingleAuthorPage = () => {
    const [ singleAuthorQuotes, setSingleAuthorQuotes ] = useState(null);
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        const fetchAuthorQuotes = async () => {
            // const res = await fetch( `https://stoicquotesapi.com/v1/api/quotes?page=${ generateRandomPage() }` ); 
            // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes'); 
            // const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/random');
            const res = await fetch(`https://stoicquotesapi.com/v1/api/quotes/${ slug }`);
            let data = await res.json();
            setSingleAuthorQuotes(data.data);
        }
        fetchAuthorQuotes();
    }, [slug]);
    console.log(singleAuthorQuotes);
  return (
    <div className="single-author-page">

    </div>
  )
}

export default SingleAuthorPage