// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route  path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contact/>}/>
          <Route path="/skill" element={<Skill/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
