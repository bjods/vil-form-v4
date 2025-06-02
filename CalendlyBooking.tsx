import React, { useEffect, useRef } from 'react';
import { useFormStore } from '../store/formStore';
import { generateCalendlyUrl } from '../lib/utils';

const CalendlyBooking: React.FC = () => {
  const { state, setMeetingBooked, submitForm } = useFormStore();
  const { personalInfo, formSubmitted } = state;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Submit form data if not already submitted
  useEffect(() => {
    if (!formSubmitted) {
      submitForm();
    }
  }, [formSubmitted, submitForm]);
  
  // Generate Calendly URL with prefilled information
  const calendlyUrl = generateCalendlyUrl(personalInfo);
  
  // Listen for Calendly events
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        // Meeting was successfully booked
        setMeetingBooked(true);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setMeetingBooked]);
  
  return (
    <div className="space-y-4">
      <p className="text-base">
        Schedule a consultation with one of our landscape specialists:
      </p>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: '650px' }}>
        <iframe
          ref={iframeRef}
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Schedule Consultation"
        ></iframe>
      </div>
      
      {state.meetingBooked && (
        <div className="p-4 bg-green-50 rounded-md text-green-700 animate-fade-in">
          <p className="font-medium">Meeting Successfully Scheduled!</p>
          <p className="text-sm mt-1">
            We've sent a confirmation to your email. We look forward to discussing your project!
          </p>
        </div>
      )}
      
      <p className="text-sm text-gray-500">
        Can't find a suitable time? We'll follow up via your preferred contact method.
      </p>
    </div>
  );
};

export default CalendlyBooking;