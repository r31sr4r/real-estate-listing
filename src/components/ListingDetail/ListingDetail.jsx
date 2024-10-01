import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box, Card, CardMedia } from '@mui/material';
import { format } from 'date-fns'; // Para formatar a data

const ListingDetail = () => {
  const location = useLocation();
  const listing = location.state?.listing;
  const navigate = useNavigate();

  if (!listing) return <Typography variant="h6">Listing not found</Typography>;

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  // Formata a data para o formato "Feb 18, 2023"
  const formattedDate = format(new Date(listing.DateListed), 'MMM dd, yyyy');

  // Formatação do preço com separação de milhares
  const formattedPrice = listing['Sale Price'].toLocaleString();

  return (
    <Container>
      <Button variant="contained" onClick={handleGoBack} style={{ marginBottom: '20px' }}>
        Back to Listings
      </Button>
      
      {/* Título e informações principais */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">{listing.Title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {listing.Location}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
          <Typography variant="h5" style={{ fontWeight: 'bold', color: 'green' }}>
            Price: ${formattedPrice}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date Listed: {formattedDate}
          </Typography>
        </Grid>
      </Grid>

      {/* Imagem */}
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={listing.PictureURL}
          alt={listing.Title}
          style={{ objectFit: 'cover' }}
        />
      </Card>

      {/* Quadro de informações principais */}
      <Grid container spacing={2} style={{ marginTop: '20px', textAlign: 'center' }}>
        <Grid item xs={6} sm={2}>
          <Typography variant="h6">{listing.Bedrooms}</Typography>
          <Typography variant="body2" color="textSecondary">Bedrooms</Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="h6">{listing.Bathrooms}</Typography>
          <Typography variant="body2" color="textSecondary">Bathrooms</Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="h6">{listing.Parking}</Typography>
          <Typography variant="body2" color="textSecondary">Parking</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">{listing.Sqft}</Typography>
          <Typography variant="body2" color="textSecondary">Square Footage</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">{listing.YearBuilt}</Typography>
          <Typography variant="body2" color="textSecondary">Year Built</Typography>
        </Grid>
      </Grid>

      {/* Descrição */}
      <Box mt={4}>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {listing.Description}
        </Typography>
      </Box>
    </Container>
  );
};

export default ListingDetail;
