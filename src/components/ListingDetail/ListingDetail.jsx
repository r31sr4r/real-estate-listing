import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box, Card, CardMedia, IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { formatPrice, formatDate } from '../../utils/formatters';
import ContactForm from '../ContactForm/ContactForm';
import { useSavedProperties } from '../../contexts/SavedPropertiesContext';

const ListingDetail = () => {
  const location = useLocation();
  const listing = location.state?.listing;
  const navigate = useNavigate();
  const { savedProperties, toggleSaveProperty } = useSavedProperties();
  const [isModalOpen, setModalOpen] = useState(false);

  if (!listing) return <Typography variant="h6">Listing not found</Typography>;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSaveToggle = () => {
    const isAlreadySaved = savedProperties.some(prop => prop.Id === listing.Id);

    toggleSaveProperty(listing);

    if (!isAlreadySaved) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" onClick={handleGoBack} style={{ marginBottom: '20px', marginTop: '20px' }}>
        Back to Listings
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">{listing.Title}</Typography>
            <Tooltip title={savedProperties.some(prop => prop.Id === listing.Id) ? "Property Saved" : "Save Property"}>
              <IconButton color="secondary" onClick={handleSaveToggle}>
                {savedProperties.some(prop => prop.Id === listing.Id) ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="subtitle1" color="textSecondary">{listing.Location}</Typography>
          <Typography variant="h5" style={{ fontWeight: 'bold', color: 'green', marginTop: '10px' }}>
            Price: {formatPrice(listing['Sale Price'])}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date Listed: {formatDate(listing.DateListed)}
          </Typography>
          <Card style={{ marginTop: '20px' }}>
            <CardMedia component="img" height="400" image={listing.PictureURL} alt={listing.Title} style={{ objectFit: 'cover' }} />
          </Card>

          <Grid container spacing={2} style={{ marginTop: '20px', textAlign: 'center' }}>
            <Grid item xs={6} sm={2}><Typography variant="h6">{listing.Bedrooms}</Typography><Typography variant="body2" color="textSecondary">Bedrooms</Typography></Grid>
            <Grid item xs={6} sm={2}><Typography variant="h6">{listing.Bathrooms}</Typography><Typography variant="body2" color="textSecondary">Bathrooms</Typography></Grid>
            <Grid item xs={6} sm={2}><Typography variant="h6">{listing.Parking}</Typography><Typography variant="body2" color="textSecondary">Parking</Typography></Grid>
            <Grid item xs={6} sm={3}><Typography variant="h6">{listing.Sqft}</Typography><Typography variant="body2" color="textSecondary">Square Footage</Typography></Grid>
            <Grid item xs={6} sm={3}><Typography variant="h6">{listing.YearBuilt}</Typography><Typography variant="body2" color="textSecondary">Year Built</Typography></Grid>
          </Grid>

          <Box mt={4}>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>{listing.Description}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid #ccc', padding: '20px', backgroundColor: '#f9f9f9' }}>
            <ContactForm />
          </Box>
        </Grid>
      </Grid>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Saved Properties</DialogTitle>
        <DialogContent>
          <List>
            {savedProperties.map((property, index) => (
              <ListItem key={index}><ListItemText primary={property.Title} secondary={`Price: ${formatPrice(property['Sale Price'])} - Location: ${property.Location}`} /></ListItem>
            ))}
          </List>
        </DialogContent>
        <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>Close</Button>
      </Dialog>
    </Container>
  );
};

export default ListingDetail;
