
const Author = ( { author } ) => {
    const { id, 
            name,
            slug,
            title,
            born,
            death,
            thumbnail,
            biography,
            externalResource
        } = author;
  return (
    <div className="author-card">
        <img src={ thumbnail } alt="thumbnail" className="thumbnail"/>
        <div className="stoic-name">
            <p>
                { name }
            </p>
        </div>
    </div>
  )
}

export default Author