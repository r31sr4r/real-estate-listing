import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingsPage from './components/Listings/ListingsPage';
import ListingDetail from './components/ListingDetail/ListingDetail';
import { SavedPropertiesProvider } from './contexts/SavedPropertiesContext';

function App() {
  return (
    <SavedPropertiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListingsPage />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
        </Routes>
      </Router>
    </SavedPropertiesProvider>
  );
}

export default App;
