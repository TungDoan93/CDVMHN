import React, { useState } from 'react';
import { CONTENT } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { Programs } from './components/Programs';
import { Facilities } from './components/Facilities';
import { Footer } from './components/Footer';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');

  const toggleLang = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  const content = CONTENT[lang];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Header lang={lang} toggleLang={toggleLang} content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <Stats stats={content.stats} />
        <Philosophy content={content.philosophy} />
        <Programs content={content.majors} />
        <Facilities content={content.facilities} locations={content.locations} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default App;