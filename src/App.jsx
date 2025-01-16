import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage.js";
import StoryDetailPage from "../pages/StoryDetailPage.js";
import Header from "/..components/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/story/:id" element={<StoryDetailPage />} />
      </Routes>
    </Router>
  );

}

export default App;
