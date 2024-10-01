import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ListingFilter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if ((name === 'Bedrooms' || name === 'Bathrooms' || name === 'Parking') && value !== '' && value < 1) {
      return;
    }
    
    if ((name === 'MinPrice' || name === 'MaxPrice') && value < 0) {
      return;
    }

    onFilterChange({ ...filters, [name]: value });
  };

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
      <Grid item xs={12} sm={2}>
        <TextField
          label="Min Price"
          type="number"
          name="MinPrice"
          value={filters.MinPrice || ''}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Max Price"
          type="number"
          name="MaxPrice"
          value={filters.MaxPrice || ''}
          onChange={handleChange}
          fullWidth
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" color="primary" fullWidth onClick={() => console.log('Filters applied!')}>
          Apply Filters
        </Button>
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
