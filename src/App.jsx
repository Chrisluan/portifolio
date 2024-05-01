import { useState } from 'react'
import {Image, Box} from '@chakra-ui/react'
import Header from './components/Header.jsx'

import About from './sections/About.jsx'
import Hello from './sections/Hello.jsx'
import './App.css'
import { LanguageProvider } from './miscellaneos/LanguageProvider.jsx'
function App() {
  return (
    <LanguageProvider>
      <Header/>
      <Hello/>
      <About/>
    </LanguageProvider>
      
  );
}

export default App
