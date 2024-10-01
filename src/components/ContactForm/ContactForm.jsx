import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone must contain only numbers';
    }
    if (!formData.comments) newErrors.comments = 'Comments are required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Message sent successfully!');
      // Reset form (optional)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        comments: ''
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h6">Contact Agent</Typography>
      {successMessage && (
        <Typography variant="body2" color="success.main" style={{ marginBottom: '10px' }}>
          {successMessage}
        </Typography>
      )}
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        error={!!errors.fullName}
        helperText={errors.fullName}
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />
      <TextField
        label="Comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        fullWidth
        error={!!errors.comments}
        helperText={errors.comments}
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" type="submit" fullWidth style={{ marginTop: '10px' }}>
        Contact Now
      </Button>
    </Box>
  );
};

export default ContactForm;
