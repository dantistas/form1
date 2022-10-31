import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';

const YourDetails: React.FC<{toogleDivs:any, body:any, setBody:any}> = ({toogleDivs,body,setBody}) => {

    
  return (
    <div className='your-details-inputs'>
        <div className='inputs'>
            <div className='input-field'>
                <div>
                    <label>Name</label>
                </div>
                <input placeholder='Name' onChange={(event:any)=>{setBody({...body,firstName:event.target.value })}}></input>
            </div>
            <div className='input-field'>
                <div>
                    <label>Surname</label>
                </div>
                <input placeholder='Surname' onChange={(event:any)=>{setBody({...body,surname:event.target.value })}}></input>
            </div>
            <div className='input-field'>
                <div>
                    <label>Email</label>
                </div>
                <input placeholder='Email' onChange={(event:any)=>{setBody({...body,email:event.target.value })}}></input>
            </div>
        </div>
        <button className='button-next' onClick={()=>{toogleDivs(false,true,false)}}>next</button>
    </div>
  );
};

export default YourDetails;