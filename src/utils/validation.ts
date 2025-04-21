import type { FormData, FormErrors } from "../types";

export const validateStep = (step: number, formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  switch (step) {
    case 1:
      // Validate name
      if (!formData.name.trim()) {
        errors.name = "Name is required";
      }

      // Validate email
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      break;

    case 2:
      // Validate address
      if (!formData.address.trim()) {
        errors.address = "Address is required";
      }

      // Validate phone
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
      } else if (!isValidPhone(formData.phone)) {
        errors.phone = "Phone number should contain only numbers";
      }
      break;

    case 3:
      // Validate categories
      if (formData.categories.length === 0) {
        errors.categories = "Please select at least one category";
      }
      break;

    default:
      break;
  }

  return errors;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
};
