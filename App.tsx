import React from 'react';
import Header from './components/Header';
import CourseCurriculum from './components/CourseCurriculum';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import ApplicationAndFooter from './components/ApplicationAndFooter';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="bg-slate-900">
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <main>
        <AnimatedSection>
          <CourseCurriculum />
        </AnimatedSection>
        <AnimatedSection>
          <Benefits />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <ApplicationAndFooter />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;