import React from 'react';
import { useFormStore } from '../store/formStore';
import { services } from '../data/services';
import { CheckCircle2, Circle } from 'lucide-react';

const ServiceSelection: React.FC = () => {
  const { state, setServices } = useFormStore();
  const { services: selectedServices, errors } = state;
  
  const handleToggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setServices([...selectedServices, serviceId]);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          
          return (
            <div
              key={service.id}
              onClick={() => handleToggleService(service.id)}
              className={`
                relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-yellow-400 bg-yellow-50' 
                  : 'border-gray-200 hover:border-yellow-200'}
              `}
            >
              <div className="absolute top-3 right-3">
                {isSelected ? (
                  <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      
      {errors.services && (
        <p className="text-red-500 text-sm mt-2">{errors.services}</p>
      )}
    </div>
  );
};

export default ServiceSelection;