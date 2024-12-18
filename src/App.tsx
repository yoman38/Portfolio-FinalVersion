import React, { useState } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Portfolio from './components/portfolio/Portfolio';
import CV from './components/cv/CV';
import Articles from './components/articles/Articles';
import { sliderContent } from './data/content';

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [currentSection, setCurrentSection] = useState<'home' | 'portfolio' | 'cv' | 'articles'>('home');

  const renderContent = () => {
    switch (currentSection) {
      case 'portfolio':
        return <Portfolio />;
      case 'cv':
        return <CV />;
      case 'articles':
        return <Articles />;
      default:
        return (
          <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
              <div className="max-w-2xl w-full">
                <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-wide text-center transition-opacity duration-300">
                  {sliderContent[sliderValue - 1]}
                </p>
              </div>
            </main>
            
            <div className="fixed bottom-0 left-0 right-0 pb-8 pt-4 bg-black bg-opacity-90 backdrop-blur-sm">
              <Slider value={sliderValue} onChange={setSliderValue} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header onNavigate={(section) => setCurrentSection(section)} />
      {renderContent()}
    </div>
  );
};

export default App;