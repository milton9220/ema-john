import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/manage" element={<Inventory />} />
                    <Route
                        path="/product/:productKey"
                        element={<ProductDetails />}
                    />
                    <Route path="*" element={<h1>404 Eror Page</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
