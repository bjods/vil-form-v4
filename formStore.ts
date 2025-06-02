import { create } from 'zustand';
import { FormState } from '../types/form';
import { determineFormPath } from '../lib/utils';
import { formSteps } from '../data/formSteps';
import { createFormSession } from '../lib/supabase';

interface FormStore {
  state: FormState;
  initializeSession: () => Promise<void>;
  validateCurrentStep: () => boolean;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  setServices: (services: string[]) => void;
  setAddress: (address: string, postalCode: string, insideServiceArea: boolean) => void;
}

const initialState: FormState = {
  sessionId: null,
  step: 0,
  currentSubStep: 0,
  services: [],
  formPath: null,
  address: '',
  postalCode: '',
  insideServiceArea: null,
  errors: {},
  touched: {}
};

export const useFormStore = create<FormStore>((set, get) => ({
  state: initialState,
  
  initializeSession: async () => {
    try {
      const session = await createFormSession();
      set(state => ({
        state: {
          ...state.state,
          sessionId: session.id
        }
      }));
    } catch (error) {
      console.error('Failed to initialize session:', error);
    }
  },
  
  validateCurrentStep: () => {
    const { state } = get();
    const currentStep = formSteps[state.step];
    if (!currentStep?.validate) return true;
    
    const errors = currentStep.validate(state);
    set(state => ({
      state: {
        ...state.state,
        errors
      }
    }));
    
    return Object.keys(errors).length === 0;
  },
  
  setStep: (step) => {
    const { validateCurrentStep } = get();
    if (validateCurrentStep()) {
      set(state => ({
        state: {
          ...state.state,
          step,
          errors: {}
        }
      }));
    }
  },

  setSubStep: (subStep) => {
    set(state => ({
      state: {
        ...state.state,
        currentSubStep: subStep,
        errors: {}
      }
    }));
  },

  setServices: (services) => {
    set(state => ({
      state: {
        ...state.state,
        services,
        formPath: determineFormPath(services),
        errors: {
          ...state.state.errors,
          services: undefined // Clear any service-related errors
        }
      }
    }));
  },

  setAddress: (address, postalCode, insideServiceArea) => {
    set(state => ({
      state: {
        ...state.state,
        address,
        postalCode,
        insideServiceArea,
        errors: {
          ...state.state.errors,
          address: undefined,
          postalCode: undefined
        }
      }
    }));
  }
}));