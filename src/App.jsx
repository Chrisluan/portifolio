
import Header from './components/Header.jsx'

import About from './sections/About.jsx'
import Hello from './sections/Hello.jsx'
import Gallery from './sections/Gallery.jsx'
import './App.css'
import { LanguageProvider } from './miscellaneos/LanguageProvider.jsx'
function App() {
  return (
    <LanguageProvider>
      <Header/>
      <Hello/>
      <About/>
      <Gallery/>
    </LanguageProvider>
      
  );
}

export default App
