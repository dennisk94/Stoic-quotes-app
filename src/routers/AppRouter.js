import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={ <HomePage /> }/>
      </Routes>
    </div>
  );
}

export default App;
