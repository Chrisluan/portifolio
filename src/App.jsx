
import Header from './components/Header.jsx'

import About from './sections/About.jsx'
import Hello from './sections/Hello.jsx'
import Gallery from './sections/Gallery.jsx'
import './App.css'
import { LanguageProvider } from './miscellaneos/LanguageProvider.jsx'
import FloatingBackground from './components/FloatingBackground.jsx'
import AnimatedGrid from './components/AnimatedGrid.jsx'
function App() {
  return (
    <LanguageProvider>
      <AnimatedGrid></AnimatedGrid>
      <FloatingBackground></FloatingBackground>
      <Header/>
      <Hello/>
      <About/>
      <Gallery/>
    </LanguageProvider>
      
  );
}

export default App
