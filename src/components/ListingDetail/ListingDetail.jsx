import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const listing = location.state?.listing; // Acessa a listagem passada via state

  if (!listing) return <p>Listing not found</p>;

  return (
    <div>
      <h1>{listing.Title}</h1>
      <img src={listing.PictureURL} alt={listing.Title} />
      <p>Location: {listing.Location}</p>
      <p>Bedrooms: {listing.Bedrooms}</p>
      <p>Bathrooms: {listing.Bathrooms}</p>
      <p>Price: ${listing['Sale Price']}</p>
      {/* Adicione outros detalhes, como descrição, data de construção, etc. */}
    </div>
  );
};

export default ListingDetail;
