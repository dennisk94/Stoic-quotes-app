import Author from "../components/Author"
import { authorsData } from '../data/authors';

const AuthorsPage = () => {
  return (
    <div className="authors-page">
        <div className="authors-wrapper">
            {
                authorsData.map( ( author, i ) => <Author author={author} key={i} /> ) // Pass in author data
            }
        </div>
    </div>
  )
}

export default AuthorsPage