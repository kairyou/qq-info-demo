import React from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
import { title } from 'config';
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <Header title={title} />
      <Body>
        todo
      </Body>
    </div>
  );
}

export default App;
