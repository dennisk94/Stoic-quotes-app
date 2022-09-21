import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import AuthorsPage from "../pages/AuthorsPage";
import BookmarksPage from "../pages/BookmarksPage";
import HomePage from "../pages/HomePage";
import SingleAuthorPage from "../pages/SingleAuthorPage";
import TodayPage from "../pages/TodayPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={ <HomePage /> }/>
        <Route path="/author" element={ <AuthorsPage /> } />
        <Route path="/bookmarks" element={ <BookmarksPage /> } />
        <Route path="/author/:slug" element={ <SingleAuthorPage /> } />
        <Route path="/today" element={ <TodayPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </div>
  );
}

export default App;
