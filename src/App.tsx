import React from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
import QQInfo from 'components/Form/QQInfo';
import { title } from 'config';
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <Header title={title} />
      <Body>
        <QQInfo />
      </Body>
    </div>
  );
}

export default App;
