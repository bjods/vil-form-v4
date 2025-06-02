import React from 'react';
import { useFormStore } from '../store/formStore';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const referralSources = [
  'Direct Mail',
  'Facebook',
  'Organic Search',
  'Google Ads',
  'Home Show',
  'Instagram',
  'TikTok',
  'Truck Signage',
  'Linkedin',
  'Mercedes Benz Catalog',
  'Jobsite Sign',
  'Other'
];

const PersonalInformation: React.FC = () => {
  const { state, setPersonalInfo, requestUploadLink } = useFormStore();
  const { personalInfo } = state;
  
  const handleUploadLinkRequest = async () => {
    if (personalInfo.textUploadLink) {
      const uploadLink = await requestUploadLink();
      if (uploadLink) {
        alert(`Link for file uploads will be texted to ${personalInfo.phone}`);
      }
    }
  };
  
  // Check if the form is complete enough to enable continue
  const isComplete = 
    personalInfo.firstName.trim() !== '' &&
    personalInfo.lastName.trim() !== '' &&
    personalInfo.email.trim() !== '' &&
    personalInfo.phone.trim() !== '';
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            value={personalInfo.firstName}
            onChange={(e) => setPersonalInfo({ firstName: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            value={personalInfo.lastName}
            onChange={(e) => setPersonalInfo({ lastName: e.target.value })}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={personalInfo.email}
          onChange={(e) => setPersonalInfo({ email: e.target.value })}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={personalInfo.phone}
          onChange={(e) => setPersonalInfo({ phone: e.target.value })}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="referral-source">How did you find us?</Label>
        <Select
          value={personalInfo.referralSource || ''}
          onValueChange={(value) => setPersonalInfo({ referralSource: value })}
        >
          <SelectTrigger id="referral-source" className="mt-1">
            <SelectValue placeholder="Select how you found us" />
          </SelectTrigger>
          <SelectContent>
            {referralSources.map((source) => (
              <SelectItem key={source} value={source}>
                {source}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-start space-x-2 pt-2">
        <Checkbox
          id="text-upload-link"
          checked={personalInfo.textUploadLink}
          onCheckedChange={(checked) => {
            setPersonalInfo({ textUploadLink: !!checked });
          }}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="text-upload-link"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            Text me a link to upload photos/files
          </Label>
          <p className="text-sm text-gray-500">
            We'll send a text message with a link to upload photos or documents related to your project.
          </p>
        </div>
      </div>
      
      {personalInfo.textUploadLink && personalInfo.phone && !state.uploadLinkGenerated && (
        <Button 
          variant="outline" 
          onClick={handleUploadLinkRequest}
          className="w-full"
        >
          Generate Upload Link
        </Button>
      )}
      
      {state.uploadLinkGenerated && (
        <div className="p-3 bg-green-50 rounded-md text-green-700">
          Upload link will be sent to your phone number.
        </div>
      )}
      
      <p className="text-sm text-gray-500 pt-2">
        Your information will only be used to contact you regarding this inquiry.
      </p>
    </div>
  );
};

export default PersonalInformation;