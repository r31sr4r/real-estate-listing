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

  // Função para carregar as listagens da API
  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings();
      setListings(data);
      setFilteredListings(data); // Inicialmente, mostra todas as listagens
    };
    loadListings();
  }, []);

  // Função que será chamada quando os filtros forem alterados
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters); // Atualiza os filtros no estado
    applyFilters(updatedFilters); // Aplica os filtros para atualizar a listagem
  };

  // Função que aplica os filtros às listagens
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

    setFilteredListings(updatedListings); // Atualiza as listagens filtradas
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
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
