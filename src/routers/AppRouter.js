import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AuthorsPage from "../pages/AuthorsPage";
import BookmarksPage from "../pages/BookmarksPage";
import HomePage from "../pages/HomePage";
import SingleAuthorPage from "../pages/SingleAuthorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={ <HomePage /> }/>
        <Route path="/author" element={ <AuthorsPage /> } />
        <Route path="/bookmarks" element={ <BookmarksPage /> } />
        <Route path="/author/:slug" element={ <SingleAuthorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
