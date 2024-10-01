import axios from 'axios';

const API_URL = 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json';

export const fetchListings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
    throw error;
  }
};
