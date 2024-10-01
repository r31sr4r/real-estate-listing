import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListingItem = ({ listing }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/listing/${listing.Id}`, { state: { listing } });
  };

  return (
    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={listing.ThumbnailURL}
        alt={listing.Title}
        style={{ objectFit: 'cover' }}
      />
      <CardContent style={{ flexGrow: 1 }}>        
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
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
        
        <Box mt={2}>
          <Typography variant="h6" color="primary" style={{ fontWeight: 'bold' }}>
            Price: ${listing['Sale Price']}
          </Typography>
        </Box>
      </CardContent>

      <Box p={2}>
        <Button variant="contained" fullWidth onClick={handleViewDetails}>
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default ListingItem;
