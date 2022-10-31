import axios from 'axios';
import { send } from 'process';
import React, {useState, useEffect} from 'react';
import Step from './Step';
import MoreComments from './MoreComments';
import YourDetails from './YourDetails';
import FinalComments from './FinalComments'

interface body{
  firstName:String|null,
  surname: String|null,
  email:String|null,
  telephone:String|null,
  gender:String|null,
  dobDay:String|null,
  dobMonth:String|null,
  dobYear:String|null,
  comments:String|null
}

const Form: React.FC = () => {
  const [step1, setStep1] = useState<boolean>(true)
  const styleStep1 = {display: step1 ? 'block' : 'none'}
  const [step2, setStep2] = useState<boolean>(false)
  const styleStep2 = {display: step2 ? 'block' : 'none'}
  const [step3, setStep3] = useState<boolean>(false)
  const styleStep3 = {display: step3 ? 'block' : 'none'}

  const [body, setBody] = useState<body|null>(null)
  const [notification, setNotification] = useState<String|null>(null)


  const toogleDivs = (step1:boolean, step2:boolean,step3:boolean) => {
    setStep1(step1);
    setStep2(step2);
    setStep3(step3);
  }


  return (
    <div>
      {notification ? <p>{notification}</p> : null}
    <div className='formContainer'>
      <div className='your-details'>
        <div  onClick={() => {toogleDivs(true,false,false)}}>
          <Step title={'Step 1: Your details'}/>
        </div>
        <div style={styleStep1}>
          <YourDetails toogleDivs={toogleDivs} body={body} setBody={setBody}/>
        </div>
      </div>
      <div className='More-comments'>
        <div onClick={() => {toogleDivs(false,true,false)}}>
          <Step title={'Step 2: More comments'}/>
        </div>
        <div style={styleStep2}>
          <MoreComments toogleDivs={toogleDivs} body={body} setBody={setBody}/>
        </div>
      </div>
      <div className='final-comments' >
        <div onClick={() => {toogleDivs(false,false,true)}}>
          <Step title={'Step 3: Final comments'}/>
        </div>
        <div style={styleStep3}>
          <FinalComments body={body} setBody={setBody} setNotification={setNotification}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;