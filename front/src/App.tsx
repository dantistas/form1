import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form/Form';
const App: React.FC = () => {


  return (
    <div className='App'>
      <Form/>
    </div>
  );
};

export default App;