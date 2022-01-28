import React from 'react';
import About from './components/about/About.jsx';
import WorkExperience from './components/experience/WorkExperience.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <WorkExperience />
    </>
  );
}

export default App;
