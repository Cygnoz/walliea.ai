import { useState } from 'react';
import './App.css';
import Header from './features/Header';
import ChatBot from './pages/ChatBot';
import bgimage from "./assets/images/bgimge.jpg"
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('isDarkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const handleToggle = () => {
    setIsDarkMode((prevMode: any) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const bgImageUrl = bgimage;

  const divStyle = {
    backgroundImage: isDarkMode ? "none" : `url(${bgImageUrl})`,
    backgroundColor: isDarkMode ? '#181818' : 'transparent',
    backgroundBlendMode: isDarkMode ? 'overlay' : 'normal',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
  };


  return (
    <div style={divStyle} className='md:h-[100vh] h-[92.5vh]'>
      <Header isDarkMode={isDarkMode} onToggle={handleToggle} />
      <ChatBot isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
