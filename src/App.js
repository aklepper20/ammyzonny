import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
