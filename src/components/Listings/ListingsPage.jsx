import React, { useState, useEffect } from 'react';
import { fetchListings } from '../../services/listingsService';
import { Container, Grid, Typography } from '@mui/material';
import ListingItem from './ListingItem';
import ListingFilter from './ListingFilter';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState({
    Bedrooms: '',
    Bathrooms: '',
    Parking: '',
    MinPrice: '',
    MaxPrice: ''
  });

  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings();
      setListings(data);
      setFilteredListings(data);
    };
    loadListings();
  }, []);
  
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filters) => {
    let updatedListings = listings;

    if (filters.Bedrooms) {
      updatedListings = updatedListings.filter(
        (listing) => listing.Bedrooms === parseInt(filters.Bedrooms)
      );
    }

    if (filters.Bathrooms) {
      updatedListings = updatedListings.filter(
        (listing) => listing.Bathrooms === parseInt(filters.Bathrooms)
      );
    }

    if (filters.Parking) {
      updatedListings = updatedListings.filter(
        (listing) => listing.Parking === parseInt(filters.Parking)
      );
    }

    if (filters.MinPrice) {
      updatedListings = updatedListings.filter(
        (listing) => listing['Sale Price'] >= parseInt(filters.MinPrice)
      );
    }

    if (filters.MaxPrice) {
      updatedListings = updatedListings.filter(
        (listing) => listing['Sale Price'] <= parseInt(filters.MaxPrice)
      );
    }

    setFilteredListings(updatedListings);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        Real Estate Listings
      </Typography>
      <ListingFilter filters={filters} onFilterChange={handleFilterChange} />
      <Grid container spacing={2}>
        {filteredListings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.Id}>
            <ListingItem listing={listing} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListingsPage;
