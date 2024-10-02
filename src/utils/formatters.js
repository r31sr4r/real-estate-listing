export const formatPrice = (price) => {
  return `$${price.toLocaleString()}`;
};

export const formatDate = (date) => {
  const utcDate = new Date(`${date}T00:00:00Z`);

  return utcDate.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};


