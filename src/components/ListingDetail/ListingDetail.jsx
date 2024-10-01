import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const ListingDetail = () => {
  const location = useLocation();
  const listing = location.state?.listing;
  const navigate = useNavigate();

  if (!listing) return <Typography variant="h6">Listing not found</Typography>;

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <Container>
      <Button variant="contained" onClick={handleGoBack} style={{ marginBottom: '20px', marginTop: '20px' }}>
        Back to Listings
      </Button>
      <Card>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="100%"
              image={listing.PictureURL}
              alt={listing.Title}
              style={{ objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {listing.Title}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {listing.Description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Location: {listing.Location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bedrooms: {listing.Bedrooms}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bathrooms: {listing.Bathrooms}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Parking: {listing.Parking}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year Built: {listing.YearBuilt}
              </Typography>
              <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Price: ${listing['Sale Price']}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ListingDetail;
