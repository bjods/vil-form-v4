import { FormState, ValidationResult } from '../types/form';

// Service Selection Validation
export const validateServices = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (state.services.length === 0) {
    errors.services = 'Please select at least one service';
  }
  
  return errors;
};

// Address Collection Validation
export const validateAddress = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (!state.address.trim()) {
    errors.address = 'Please enter your address';
  }
  if (!state.postalCode.trim()) {
    errors.postalCode = 'Please enter your postal code';
  }
  
  return errors;
};

// Budget Section Validation
export const validateBudget = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  state.services.forEach(serviceId => {
    if (!state.budgets[serviceId]) {
      errors[`budget_${serviceId}`] = 'Please enter a budget amount';
    }
  });
  
  return errors;
};

// Project Scope Validation
export const validateProjectScope = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (!state.projectScope.trim()) {
    errors.projectScope = 'Please describe your project scope';
  }
  
  return errors;
};

// Start/Deadline Validation
export const validateStartDeadline = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  state.services.forEach(serviceId => {
    const dates = state.startDeadlines[serviceId];
    if (!dates?.startDate) {
      errors[`startDate_${serviceId}`] = 'Please select a start date';
    }
  });
  
  return errors;
};

// Previous Provider Validation
export const validatePreviousProvider = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (state.previousProvider === undefined) {
    errors.previousProvider = 'Please provide information about your previous provider';
  }
  
  return errors;
};

// Previous Quotes Validation
export const validatePreviousQuotes = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (state.previousQuotes === undefined) {
    errors.previousQuotes = 'Please indicate if you have received other quotes';
  }
  
  return errors;
};

// Price vs Long Term Validation
export const validatePriceVsLongTerm = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (!state.priceVsLongTerm) {
    errors.priceVsLongTerm = 'Please select your service preference';
  }
  
  return errors;
};

// Site Challenges Validation
export const validateSiteChallenges = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (!state.siteChallenges?.trim()) {
    errors.siteChallenges = 'Please describe any site challenges';
  }
  
  return errors;
};

// Project Success Criteria Validation
export const validateProjectSuccessCriteria = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  
  if (!state.projectSuccessCriteria?.trim()) {
    errors.projectSuccessCriteria = 'Please describe what would make this project successful';
  }
  
  return errors;
};

// Personal Information Validation
export const validatePersonalInfo = (state: FormState): ValidationResult => {
  const errors: ValidationResult = {};
  const { personalInfo } = state;
  
  if (!personalInfo.firstName.trim()) {
    errors.firstName = 'Please enter your first name';
  }
  if (!personalInfo.lastName.trim()) {
    errors.lastName = 'Please enter your last name';
  }
  if (!personalInfo.email.trim()) {
    errors.email = 'Please enter your email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!personalInfo.phone.trim()) {
    errors.phone = 'Please enter your phone number';
  }
  
  return errors;
};