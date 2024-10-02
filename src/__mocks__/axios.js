const axios = {
    get: jest.fn(() => Promise.resolve({
      data: [
        { Id: 1, Title: "Test Listing", Location: "Test Location", Bedrooms: 3, Bathrooms: 2, Parking: 1, 'Sale Price': 500000 }
      ]
    })),
  };
  
  export default axios;