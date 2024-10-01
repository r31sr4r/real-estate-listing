import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingsPage from './components/Listings/ListingsPage';
import ListingDetail from './components/ListingDetail/ListingDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
