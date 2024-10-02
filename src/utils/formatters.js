export const formatPrice = (price) => {
  return `$${price.toLocaleString()}`;
};

export const formatDate = (date) => {
  // Garante que a data seja interpretada como UTC
  const utcDate = new Date(`${date}T00:00:00Z`);

  // Formata a data no fuso horário UTC
  return utcDate.toLocaleDateString('en-US', {
    timeZone: 'UTC', // Adiciona esta linha
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};


