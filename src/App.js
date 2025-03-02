import React from 'react';
import Header from './components/Header';
import FloatingContact from './components/FloatingContact';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Summary from './components/Summary';
import SocialPreview from './components/SocialPreview';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <SocialPreview />
      <FloatingContact />
      <Summary />
    </div>
  );
}

export default App;
