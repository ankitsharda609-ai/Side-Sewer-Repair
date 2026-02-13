
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Faq from './components/Faq';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <div className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-white space-y-8 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 italic">Building ADUs?</h3>
                <p className="text-blue-100">We specialize in secondary public sewer connections that meet all Bellevue City Engineering standards.</p>
              </div>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-slate-100 transition-colors shadow-lg shadow-blue-800/30 whitespace-nowrap">
                Schedule Engineering Review
              </button>
            </div>
          </div>
        </div>

        <Services />
        
        {/* Localized content section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-right"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">Bellevue Engineering <br /><span className="text-blue-500">Excellence</span></h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Permit Coordination</h4>
                      <p className="text-slate-400">We navigate MyBuildingPermit.com so you don't have to. We manage UA (Side Sewer) and ROW permits end-to-end.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Material Integrity</h4>
                      <p className="text-slate-400">Utilization of approved PVC SDR 35 and precision-tightened Romac-style mechanical couplings for zero-leak connections.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">City Inspections</h4>
                      <p className="text-slate-400">Strict adherence to backfill requirements using 5/8" minus crushed rock and coordinated visual inspections before closure.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                   <div className="aspect-video bg-slate-700 rounded-xl mb-6 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/sewer/800/600" alt="Sewer Work" className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M8 5v14l11-7z" />
                            </svg>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-800" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Team Member" />
                        ))}
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-white">Join 500+ Bellevue Homeowners</p>
                        <p className="text-slate-400">Who trust us with their critical utilities</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>

      <Footer />
      
      {/* AI Chat Widget */}
      <GeminiChat />
    </div>
  );
};

export default App;
