import React from 'react';
import { useFormStore } from '../store/formStore';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const PreviousProvider: React.FC = () => {
  const { state, setPreviousProvider } = useFormStore();
  
  return (
    <div className="space-y-4">
      <Label htmlFor="previous-provider" className="text-base">
        Tell us about your previous maintenance service provider:
      </Label>
      <Textarea
        id="previous-provider"
        placeholder="Who provided your maintenance services before? What did you like or dislike about their service?"
        value={state.previousProvider || ''}
        onChange={(e) => setPreviousProvider(e.target.value)}
        className="min-h-[100px]"
      />
      <p className="text-sm text-gray-500">
        This helps us understand your expectations and how we can better serve you.
      </p>
    </div>
  );
};

export default PreviousProvider;