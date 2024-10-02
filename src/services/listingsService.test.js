import axios from 'axios';
import { fetchListings } from './listingsService';

jest.mock('axios');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('fetchListings', () => {
  it('should fetch listings successfully', async () => {
    const mockData = [
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
    ];

    axios.get.mockResolvedValue({ data: mockData });

    const listings = await fetchListings();

    expect(axios.get).toHaveBeenCalledWith(
      'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json'
    );

    expect(listings).toEqual(mockData);
  });

  it('should handle response error', async () => {
    const mockError = {
      response: {
        status: 404,
        data: 'Not Found',
      },
    };

    axios.get.mockRejectedValue(mockError);

    await expect(fetchListings()).rejects.toMatchObject(mockError);

    expect(console.error).toHaveBeenCalledWith('Response error:', mockError.response);
  });

  it('should handle no response error', async () => {
    const mockError = { request: {} };
    axios.get.mockRejectedValue(mockError);

    await expect(fetchListings()).rejects.toMatchObject(mockError);
    expect(console.error).toHaveBeenCalledWith('No response received:', mockError.request);
  });

  it('should handle request setup error', async () => {
    const mockError = new Error('Request failed');
    axios.get.mockRejectedValue(mockError);

    await expect(fetchListings()).rejects.toThrow('Request failed');
    expect(console.error).toHaveBeenCalledWith('Request setup error:', mockError.message);
  });
});
