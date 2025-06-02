import React from 'react';

interface FormCardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  footerContent?: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ 
  children, 
  title, 
  description,
  footerContent
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 animate-fade-in flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-gray-100 flex-shrink-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {children}
        </div>
        
        {/* Footer */}
        {footerContent && (
          <div className="flex-shrink-0 p-6 sm:p-8 border-t border-gray-100">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormCard;