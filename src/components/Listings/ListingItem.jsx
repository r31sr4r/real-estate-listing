import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListingItem = ({ listing }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/listing/${listing.Id}`, { state: { listing } }); // Passa o estado
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={listing.ThumbnailURL}
        alt={listing.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listing.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {listing.Location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bedrooms: {listing.Bedrooms}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bathrooms: {listing.Bathrooms}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${listing['Sale Price']}
        </Typography>
        <Button variant="contained" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingItem;
