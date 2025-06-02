import React from 'react';
import { useFormStore } from '../store/formStore';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { getServiceById } from '../data/services';
import { formatCurrency } from '../lib/utils';

const BudgetSection: React.FC = () => {
  const { state, setBudget } = useFormStore();
  const { services: selectedServices, budgets } = state;
  
  return (
    <div className="space-y-6">
      {selectedServices.map(serviceId => {
        const service = getServiceById(serviceId);
        if (!service) return null;
        
        const budget = budgets[serviceId] || 0;
        
        return (
          <div key={serviceId} className="p-4 border border-gray-200 rounded-md animate-fade-in">
            <h3 className="text-lg font-medium mb-3">{service.name} Budget</h3>
            
            <div>
              <Label htmlFor={`budget-${serviceId}`}>Estimated Budget</Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  id={`budget-${serviceId}`}
                  type="number"
                  placeholder="0"
                  value={budget || ''}
                  onChange={(e) => setBudget(serviceId, Number(e.target.value))}
                  className="pl-7"
                />
              </div>
              
              {budget > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Your budget for {service.name} is {formatCurrency(budget)}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetSection;