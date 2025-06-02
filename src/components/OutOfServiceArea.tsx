import React from 'react';
import { useFormStore } from '../store/formStore';
import { Button } from './ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';

const OutOfServiceArea: React.FC = () => {
  const { setStep } = useFormStore();
  
  const handleBack = () => {
    setStep(1); // Go back to address collection
  };
  
  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <MapPin className="w-8 h-8 text-amber-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Outside Service Area</h2>
      
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        We apologize, but your location is outside our regular service area for maintenance services. 
        We currently provide maintenance services in select areas to ensure the highest quality of service.
      </p>
      
      <div className="space-y-4">
        <p className="font-medium">You have a few options:</p>
        <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
          <li>• Consider our project-based services, which may be available in your area</li>
          <li>• Try a different address within our service area</li>
          <li>• Contact us directly to discuss special arrangements</li>
        </ul>
      </div>
      
      <div className="pt-6">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Try a Different Address
        </Button>
      </div>
    </div>
  );
};

export default OutOfServiceArea;