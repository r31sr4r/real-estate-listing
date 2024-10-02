import { validateForm } from './useFormValidation';

describe('validateForm', () => {
  it('should pass validation with valid data', async () => {
    const formData = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      comments: 'Some valid comment'
    };

    const result = await validateForm(formData);
    
    expect(result).toEqual({});
  });

  it('should return error when fullName is missing', async () => {
    const formData = {
      fullName: '',
      email: 'john.doe@example.com',
      phone: '1234567890',
      comments: 'Some valid comment'
    };

    const result = await validateForm(formData);

    expect(result).toHaveProperty('fullName', 'Full Name is required');
  });

  it('should return error when email format is invalid', async () => {
    const formData = {
      fullName: 'John Doe',
      email: 'john.doe',
      phone: '1234567890',
      comments: 'Some valid comment'
    };

    const result = await validateForm(formData);

    expect(result).toHaveProperty('email', 'Invalid email format');
  });

  it('should return error when phone contains non-numeric characters', async () => {
    const formData = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123abc4567',
      comments: 'Some valid comment'
    };

    const result = await validateForm(formData);

    expect(result).toHaveProperty('phone', 'Phone must contain only numbers');
  });

  it('should return multiple errors if multiple fields are invalid', async () => {
    const formData = {
      fullName: '',
      email: 'invalid-email',
      phone: 'abc',
      comments: ''
    };

    const result = await validateForm(formData);

    expect(result).toHaveProperty('fullName', 'Full Name is required');
    expect(result).toHaveProperty('email', 'Invalid email format');
    expect(result).toHaveProperty('phone', 'Phone must contain only numbers');
    expect(result).toHaveProperty('comments', 'Comments are required');
  });
});
