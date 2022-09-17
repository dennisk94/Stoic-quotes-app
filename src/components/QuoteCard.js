import placeholder from '../images/thumbnail/epictetus.jpg';

const QuoteCard = () => {
  return (
    <div className="quote-card">
        <p className="quote">
            "First say to yourself what you would be, and then do what you have to do."
        </p>
        <div className="attribution">
            <img src={ placeholder } alt="thumbnail" />
            <p className="author">
                Epictetus
            </p>
        </div>
    </div>
  )
}

export default QuoteCard