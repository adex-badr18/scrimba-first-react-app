import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
    const [lightMode, setLightMode] = useState(false);

    function toggleMode() {
        setLightMode(prevMode => !prevMode);
    }

  return (
    <div className='container'>
      <Navbar lightMode={lightMode} toggleMode={toggleMode} />
      <Main lightMode={lightMode} toggleMode={toggleMode} />
    </div>
  );
}

export default App
