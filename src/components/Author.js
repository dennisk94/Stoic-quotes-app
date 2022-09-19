
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
    <div className="author">
        <img src={ thumbnail } alt="thumbnail" className="thumbnail"/>
        <div className="name">
            <p>
                { name }
            </p>
        </div>
    </div>
  )
}

export default Author