import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';
import YourDetails from './MoreComments';


const Step: React.FC<{title:String}> = ({title}) => {
  
  return (
    <div className='step'>
        <div>
          <h1 className='step-title'>{title}</h1>
        </div>
    </div>
  );
};

export default Step;