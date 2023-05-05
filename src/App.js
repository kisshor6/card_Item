import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import CardState from "./Context/CardState";

const App = () => {
    return (
        <>
            <CardState>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Card />} />
                        <Route exact path="/form" element={<Form />} />
                    </Routes>
                </Router>
            </CardState>
        </>
    )
}

export default App