import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(104)
  return (
    <div className="App">
      {num * 1.12}
    </div>
  );
}

export default App;

