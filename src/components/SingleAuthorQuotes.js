import { handleThumbnail } from "../util/handleThumbnail";

const SingleAuthorQuotes = ( { quote } ) => {
    const { id, author_id, author, body } = quote;
  return (
    <figure className="single-author-quote-card">
        { handleThumbnail( author_id ) }
        <blockquote className="single-author-quote">
            { body }
        </blockquote>
        <figcaption className="single-author-attribution">
            { author }
        </figcaption>
    </figure>
  )
}

export default SingleAuthorQuotes