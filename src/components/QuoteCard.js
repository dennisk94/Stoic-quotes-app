import Marcus from '../images/thumbnail/marcus.jpg';
import Seneca from '../images/thumbnail/seneca.jpg';
import Epictetus from '../images/thumbnail/epictetus.jpg';
import Cato from '../images/thumbnail/cato.jpg';
import Zeno from '../images/thumbnail/zeno.jpg';

const QuoteCard = ( { quote } ) => {
 
  const { body, author, author_id } = quote;
  // console.log(quote);
  // Use author_id to programmatically display thumbnail
  const handleThumbnail = () => {
    switch (author_id) {
      case 1:
        return <img src={ Marcus } alt='thumbnail'/>;
      case 2:
        return <img src={ Seneca } alt='thumbnail'/>;
      case 3: 
        return <img src={ Epictetus } alt='thumbnail'/>;
      case 4:
        return <img src={ Cato } alt='thumbnail'/>;
      case 5:
        return <img src={ Zeno } alt='thumbnail'/>;
      default:
    }
  }
  return (
      <div className="quote-card">
        <figure>
          <blockquote className="quote">
            { body }
          </blockquote>
          <figcaption className="attribution">
              { handleThumbnail() }
              <p className="author">
                { author }
              </p>
          </figcaption>
        </figure>
      </div>
  )
}

export default QuoteCard