import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";

function App() {

  const style = {
    backgroundImage: `url(https://images.unsplash.com/photo-1673517707316-a652db509da4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
  }

  return (
    <BrowserRouter basename="/weather">
      <main style={style}>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
        </Routes>

        <footer>
          <div className="content container">
            <p>&copy; Copyright reserved | Vikash Kumar</p>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
