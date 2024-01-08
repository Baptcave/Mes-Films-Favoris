import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import MyFilms from "./pages/MyFilms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-films" element={<MyFilms />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
