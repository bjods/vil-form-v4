import React, { useState, useEffect } from 'react';
import { useFormStore } from './store/formStore';
import FormCard from './components/FormCard';
import StartPage from './components/StartPage';
import ServiceSelection from './components/ServiceSelection';
import AddressCollection from './components/AddressCollection';
import MaintenanceForm from './components/MaintenanceForm';
import ProjectsForm from './components/ProjectsForm';
import BothForm from './components/BothForm';
import OtherForm from './components/OtherForm';
import OutOfServiceArea from './components/OutOfServiceArea';
import { Button } from './components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { formSteps } from './data/formSteps';
import { getServiceSpecificTitle } from './components/BothForm';
import './index.css';

function App() {
  const { state, initializeSession, setStep, setSubStep } = useFormStore();
  const [isStarted, setIsStarted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    if (!state.sessionId) {
      initializeSession();
    }
  }, [state.sessionId, initializeSession]);
  
  const handleStart = () => {
    setIsStarted(true);
  };

  const handleBackToStart = () => {
    setIsStarted(false);
    setStep(0);
  };
  
  // Find the current step
  const currentStep = formSteps.find((_, index) => index === state.step);
  
  if (!isStarted) {
    return (
      <div className="flex items-center justify-center p-4">
        <StartPage onStart={handleStart} />
      </div>
    );
  }
  
  // Determine which component to render based on the current step
  let StepComponent;
  let currentSubSteps;
  
  if (state.step === 0) {
    StepComponent = ServiceSelection;
  } else if (state.step === 1) {
    StepComponent = AddressCollection;
  } else if (state.step === 3 && !state.insideServiceArea) {
    StepComponent = OutOfServiceArea;
  } else {
    switch (state.formPath) {
      case 'maintenance':
        StepComponent = MaintenanceForm;
        currentSubSteps = MaintenanceForm.subSteps;
        break;
      case 'projects':
        StepComponent = ProjectsForm;
        currentSubSteps = ProjectsForm.subSteps;
        break;
      case 'both':
        StepComponent = BothForm;
        currentSubSteps = BothForm.subSteps;
        break;
      case 'other':
        StepComponent = OtherForm;
        currentSubSteps = OtherForm.subSteps;
        break;
      default:
        StepComponent = null;
    }
  }
  
  if (!currentStep || !StepComponent) {
    return null;
  }

  const validateCurrentStep = () => {
    const newErrors = currentStep.validate(state);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isStepValid = () => {
    if (!currentStep) return false;
    
    switch (state.step) {
      case 0: // Service Selection
        return state.services.length > 0;
      case 1: // Address Collection
        return state.address && state.postalCode;
      // Add cases for other steps as needed
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (state.step === 2 && currentSubSteps) {
      if (state.currentSubStep < currentSubSteps.length - 1) {
        setSubStep(state.currentSubStep + 1);
      }
    } else {
      setStep(state.step + 1);
    }
  };

  const handleBack = () => {
    if (state.step === 2 && state.currentSubStep > 0) {
      setSubStep(state.currentSubStep - 1);
    } else if (state.step === 0) {
      handleBackToStart();
    } else {
      setStep(state.step - 1);
    }
  };

  const renderNavigation = () => {
    if (state.step === 2 && currentSubSteps && state.currentSubStep === currentSubSteps.length - 1) {
      return null;
    }

    return (
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button 
          onClick={handleNext}
          disabled={!isStepValid()}
        >
          Continue
        </Button>
      </div>
    );
  };
  
  // Get the current title and description
  let title = currentStep.title;
  let description = currentStep.description;

  if (state.step === 2 && currentSubSteps) {
    const currentSubStep = currentSubSteps[state.currentSubStep];
    if (currentSubStep) {
      if (state.formPath === 'both') {
        title = getServiceSpecificTitle(
          currentSubStep.title,
          state.services,
          currentSubStep.type || null
        );
      } else {
        title = currentSubStep.title;
      }
      description = currentSubStep.description;
    }
  }
  
  return (
    <div className="flex items-center justify-center p-4">
      <FormCard 
        title={title}
        description={description}
        footerContent={renderNavigation()}
      >
        <StepComponent />
      </FormCard>
    </div>
  );
}

export default App;