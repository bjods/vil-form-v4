import React from 'react';
import { useFormStore } from '../store/formStore';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const ProjectSuccessCriteria: React.FC = () => {
  const { state, setProjectSuccessCriteria } = useFormStore();
  
  return (
    <div className="space-y-4">
      <Label htmlFor="success-criteria" className="text-base">
        Describe what would make this project a success:
      </Label>
      <Textarea
        id="success-criteria"
        placeholder="What are your goals for this project? What would a successful outcome look like for you?"
        value={state.projectSuccessCriteria || ''}
        onChange={(e) => setProjectSuccessCriteria(e.target.value)}
        className="min-h-[120px]"
      />
      <p className="text-sm text-gray-500">
        This helps us understand your expectations and ensure we deliver the results you're looking for.
      </p>
    </div>
  );
};

export default ProjectSuccessCriteria;