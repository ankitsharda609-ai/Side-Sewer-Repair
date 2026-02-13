
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           </pattern>
           <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span>Available 24/7 in Bellevue, WA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Specialized <span className="text-blue-600">Side Sewer</span> <br />
          Repair & Public Connections
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          The Eastside's leading experts in Bellevue utility engineering standards. 
          From ADU connections to complex Right-of-Way excavations, we handle every detail.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all flex items-center justify-center">
            Emergency Dispatch: {PHONE_NUMBER}
          </a>
          <button className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
            Our Services
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center justify-center font-bold text-slate-400 text-sm italic">MyBuildingPermit.com Certified</div>
          <div className="flex items-center justify-center font-bold text-slate-400 text-sm italic">Licensed & Bonded</div>
          <div className="flex items-center justify-center font-bold text-slate-400 text-sm italic">5-Star Local Reviews</div>
          <div className="flex items-center justify-center font-bold text-slate-400 text-sm italic">Bellevue Standards Compliant</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
