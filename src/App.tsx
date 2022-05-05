import React from 'react';
import Header from 'components/Header';
import { title } from 'config';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header title={title} />
    </div>
  );
}

export default App;
