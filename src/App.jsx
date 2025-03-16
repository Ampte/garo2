import { useState } from 'react'
import './App.css'
import Home from './components/home';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  );
};

export default App
