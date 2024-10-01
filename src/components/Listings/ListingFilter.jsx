import React from 'react';
import { TextField, Button, Grid, Slider, Typography } from '@mui/material';

const ListingFilter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === 'Bedrooms' || name === 'Bathrooms' || name === 'Parking') && value !== '' && value < 1) {
      return;
    }

    onFilterChange({ ...filters, [name]: value });
  };

  const handlePriceChange = (e, newValue) => {
    onFilterChange({ ...filters, MinPrice: newValue[0], MaxPrice: newValue[1] });
  };

  const formatPrice = (value) => `$${value}`;

  const handleClearFilters = () => {
    onFilterChange({
      Bedrooms: '',
      Bathrooms: '',
      Parking: '',
      MinPrice: '',
      MaxPrice: ''
    });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Bedrooms"
          type="number"
          name="Bedrooms"
          value={filters.Bedrooms || ''}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Bathrooms"
          type="number"
          name="Bathrooms"
          value={filters.Bathrooms || ''}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Parking"
          type="number"
          name="Parking"
          value={filters.Parking || ''}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={[filters.MinPrice || 0, filters.MaxPrice || 1000000]} // Valores iniciais de Min e Max
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000000}
          valueLabelFormat={formatPrice}
        />        
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
          Selected Price Range: ${filters.MinPrice || 0} - ${filters.MaxPrice || 1000000}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default ListingFilter;
