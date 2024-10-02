import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Phone must contain only numbers').required('Phone is required'),
  comments: yup.string().required('Comments are required')
});

export const validateForm = async (formData) => {
  try {
    await schema.validate(formData, { abortEarly: false });
    return {};
  } catch (errors) {
    const formattedErrors = {};
    errors.inner.forEach((error) => {
      formattedErrors[error.path] = error.message;
    });
    return formattedErrors;
  }
};
