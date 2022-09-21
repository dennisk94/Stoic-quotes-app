import { useEffect } from "react"
import { appTitle } from "../globals/globals";
import Author from "../components/Author"
import { authorsData } from '../data/authors';

const AuthorsPage = () => {
  useEffect(() => {
    document.title = `${appTitle} - Authors`;
  }, []);
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