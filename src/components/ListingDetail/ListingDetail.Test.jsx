import { render, screen, act } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('renders Real Estate Listings heading', async () => {
  // Simula a resposta do axios.get
  axios.get.mockResolvedValue({
    data: [
      {
        Id: 1,
        Title: 'Test Listing',
        Location: 'Test Location',
        Bedrooms: 3,
        Bathrooms: 2,
        'Sale Price': 100000,
        PictureURL: 'test-url.jpg',
        DateListed: '2023-01-01',
      },
    ],
  });

  // Renderiza o componente
  await act(async () => {
    render(<App />);
  });

  // Aguarda que o título "Real Estate Listings" apareça na tela
  const headingElement = await screen.findByText(/Real Estate Listings/i);
  expect(headingElement).toBeInTheDocument();
});
