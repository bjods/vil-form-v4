import { FormStep } from '../types/form';
import ServiceSelection from '../components/ServiceSelection';
import AddressCollection from '../components/AddressCollection';
import MaintenanceForm from '../components/MaintenanceForm';
import ProjectsForm from '../components/ProjectsForm';
import BothForm from '../components/BothForm';
import OtherForm from '../components/OtherForm';
import { validateServices, validateAddress } from '../lib/validation';

export const formSteps: FormStep[] = [
  {
    id: 'service-selection',
    title: 'Service Selection',
    description: 'Select the services you\'re interested in',
    isComplete: (state) => state.services.length > 0,
    isAvailable: () => true,
    validate: validateServices,
    component: ServiceSelection
  },
  {
    id: 'address-collection',
    title: 'Address',
    description: 'Provide your location information',
    isComplete: (state) => !!state.address,
    isAvailable: (state) => state.services.length > 0,
    validate: validateAddress,
    component: AddressCollection
  },
  {
    id: 'maintenance-form',
    title: 'Maintenance Details',
    description: 'Tell us about your maintenance needs',
    isComplete: () => false,
    isAvailable: (state) => 
      state.formPath === 'maintenance' && 
      state.address.length > 0,
    validate: (state) => {
      const errors = {};
      const currentStep = MaintenanceForm.subSteps[state.currentSubStep];
      if (currentStep?.validate) {
        Object.assign(errors, currentStep.validate(state));
      }
      return errors;
    },
    component: MaintenanceForm
  },
  {
    id: 'projects-form',
    title: 'Project Details',
    description: 'Tell us about your project',
    isComplete: () => false,
    isAvailable: (state) => 
      state.formPath === 'projects' && 
      state.address.length > 0,
    validate: (state) => {
      const errors = {};
      const currentStep = ProjectsForm.subSteps[state.currentSubStep];
      if (currentStep?.validate) {
        Object.assign(errors, currentStep.validate(state));
      }
      return errors;
    },
    component: ProjectsForm
  },
  {
    id: 'both-form',
    title: 'Service Details',
    description: 'Tell us about your maintenance and project needs',
    isComplete: () => false,
    isAvailable: (state) => 
      state.formPath === 'both' && 
      state.address.length > 0,
    validate: (state) => {
      const errors = {};
      const currentStep = BothForm.subSteps[state.currentSubStep];
      if (currentStep?.validate) {
        Object.assign(errors, currentStep.validate(state));
      }
      return errors;
    },
    component: BothForm
  },
  {
    id: 'other-form',
    title: 'Other Service',
    description: 'Tell us about your needs',
    isComplete: () => false,
    isAvailable: (state) => 
      state.formPath === 'other' && 
      state.address.length > 0,
    validate: (state) => {
      const errors = {};
      const currentStep = OtherForm.subSteps[state.currentSubStep];
      if (currentStep?.validate) {
        Object.assign(errors, currentStep.validate(state));
      }
      return errors;
    },
    component: OtherForm
  }
];