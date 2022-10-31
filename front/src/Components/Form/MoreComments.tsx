import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';

const YourDetails: React.FC<{toogleDivs:any, body:any, setBody:any}> = ({toogleDivs,body,setBody}) => {
  return (
    <div className='your-details-inputs'>
        <div className='inputs'>
            <div className='input-field'>
                <div>
                    <label >Telephone number</label>
                </div>
                <input placeholder='telephone number'onChange={(event:any)=>{setBody({...body,telephone:event.target.value })}}></input>
            </div>
            <div className='input-field'>
                <div>
                    <label>Gender</label>
                </div>
                <select name="gender" id="gender" onChange={(event:any)=>{setBody({...body,gender:event.target.value })}}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className='input-field'>
                <div>
                    <label>Date of birth</label>
                </div>
                <input placeholder='day'onChange={(event:any)=>{setBody({...body,dobDay:event.target.value })}}></input>
                <input placeholder='month'onChange={(event:any)=>{setBody({...body,dobMonth:event.target.value })}}></input>
                <input placeholder='year' onChange={(event:any)=>{setBody({...body,dobYear:event.target.value })}}></input>
            </div>
        </div>
        <button className='button-next' onClick={()=>{toogleDivs(false,false,true)}}>next</button>
    </div>
  );
};

export default YourDetails;