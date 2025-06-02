import React from 'react';
import { useFormStore } from '../store/formStore';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const SiteChallenges: React.FC = () => {
  const { state, setSiteChallenges } = useFormStore();
  
  return (
    <div className="space-y-4">
      <Label htmlFor="site-challenges" className="text-base">
        List any specific site challenges:
      </Label>
      <Textarea
        id="site-challenges"
        placeholder="Dog, steep hill, muddy area, etc."
        value={state.siteChallenges || ''}
        onChange={(e) => setSiteChallenges(e.target.value)}
        className="min-h-[100px]"
      />
      <p className="text-sm text-gray-500">
        Let us know about any obstacles or unique aspects of your property that may affect service.
      </p>
    </div>
  );
};

export default SiteChallenges;