import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ListingFilter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Bedrooms"
          type="number"
          name="Bedrooms"
          value={filters.Bedrooms || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Bathrooms"
          type="number"
          name="Bathrooms"
          value={filters.Bathrooms || ''}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button variant="contained" color="primary" fullWidth>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default ListingFilter;
