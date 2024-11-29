import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Shared/Layout";
import Home from "./Home";
import Career from "./Career";
import About from "./About";
import Security from "./Security";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
