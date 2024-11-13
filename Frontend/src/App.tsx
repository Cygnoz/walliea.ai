import { useState } from 'react';
import './App.css';
import Header from './features/Header';
import ChatBot from './pages/ChatBot';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('isDarkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const handleToggle = () => {
    setIsDarkMode((prevMode:any) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const bgImageUrl = 'https://s3-alpha-sig.figma.com/img/7374/33ec/4883d6e2153d584e190e757878fc94e3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPppL12ONgIZJOpwVjDTr7FmpZ8-wCgxAo3Q4X59WndYkAYZDM5GdbZHlK0l1fYoF5al0l0v0IFsMX-p~b9SLboZCLsR0MYCp~RRX024Bdj~8H-3ODy25YaEbTERINwFyyRNJjIY1DhgEwSF~Jv9ddGa~xFI-ckmuLfPUGwHDIZknVYxtNoDxTyEgXpuCZu8PlwvUWvVQvPVrhrggLAwu7~zVy54Vxw87nD133XAdc0g2QTes~lPG2cp~MpcFV4pe9LVrTpAmNGw-6gO3acuvoP47Ujt15K4c8SwAD-j8S2FNcbolv1iKgwxOPNf2S995Y767hwXdovYp-3Xv~AEWQ__';

  const divStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundColor: isDarkMode ? '#181818' : 'transparent',
    backgroundBlendMode: isDarkMode ? 'overlay' : 'normal',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  };

  return (
    <div style={divStyle}>
      <Header isDarkMode={isDarkMode} onToggle={handleToggle} />
      <ChatBot isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
