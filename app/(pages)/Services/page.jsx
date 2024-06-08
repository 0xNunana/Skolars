import React from 'react';
import { services } from '@/Data/ServiceList';

const ServicesPage = () => {
  return (
    <div className="min-h-screen  md:py-10">
      <div className="max-w-screen-2xl px-5 py-5 md:py-20 mx-auto">
     
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:gap-5 md:py-20 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}   rounded-lg overflow-hidden`}>
              <img src={service.imageUrl} alt={service.title} className="w-full md:w-1/2 h-60 object-cover" />
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 ">{service.title}</h2>
                <p className="text-sm md:text-2xl">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
