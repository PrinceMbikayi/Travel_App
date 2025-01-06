import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

function App() {
  return (
    <ModelProvider>
      <NavProvider>
        <Router>
          <Toggle />
          <Nav />
          <HelmetProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HelmetProvider>
        </Router>
      </NavProvider>
    </ModelProvider>
  );
}

export default App;
