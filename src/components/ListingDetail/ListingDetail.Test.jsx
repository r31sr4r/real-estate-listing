import { render, screen, act } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('renders Real Estate Listings heading', async () => {
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

  await act(async () => {
    render(<App />);
  });

  const headingElement = await screen.findByText(/Real Estate Listings/i);
  expect(headingElement).toBeInTheDocument();
});
