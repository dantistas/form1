import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';

const YourDetails: React.FC<{ body:any, setBody:any, setNotification:any}> = ({ body, setBody, setNotification}) => {

     
  const send = ()=> {
    if(!body || !body.firstName || !body.surname || !body.email || !body.telephone || !body.gender || !body.dobDay || !body.dobMonth || !body.dobYear || !body.comments){
        setNotification('All the input fields are required!')
    }else {
        const request = axios.post('/submit', body)
        .then(function (response) {
        // console.log(response);
        setNotification(response.data)
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  }
  
  return (
    <div className='your-details-inputs'>
        <div className='inputs'>
            <div className='input-field'>
                <div>
                    <label>Comments</label>
                </div>
                <textarea onChange={(event:any)=>{setBody({...body,comments:event.target.value })}} placeholder='comments'></textarea>
            </div>
        </div>
        <button className='button-next' onClick={()=>{send()}}>next</button>
    </div>
  );
};

export default YourDetails;