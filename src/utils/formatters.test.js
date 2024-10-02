import { formatPrice, formatDate } from './formatters';

describe('formatPrice', () => {
  it('should format the price with commas and a dollar sign', () => {
    const price = 1000000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('$1,000,000');
  });
});

describe('formatDate', () => {
  it('should format the date in the format "MMM DD, YYYY"', () => {
    const date = '2023-09-30';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('Sep 30, 2023');
  });

  it('should format another date correctly', () => {
    const date = '2022-01-15';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('Jan 15, 2022');
  });

  it('should handle invalid date inputs gracefully', () => {
    const date = 'invalid-date';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('Invalid Date');
  });
});
