import React, { useState } from 'react'
import CardComponent from './CardComponent';
// import InputFild from './InputFild';

const App = () => {
    let [data,setData]=useState('');
    const [inputnum1,setinputnum1]=useState('');
    const [inputnum2,setinputnum2]=useState('');
    const [inputnum3,setinputnum3]=useState('');
    const [inputnum4,setinputnum4]=useState('');
    const [display,setDisplay]=useState(true);

    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);
        
        if (value.length >= maxLength) {
            if (fieldIntIndex < 5) {
                if(fieldIndex<2){
                    setinputnum1(e.target.value);
                }
                else if(fieldIndex<3){
                    setinputnum2(e.target.value);
                }
                else if(fieldIndex<4){
                    setinputnum3(e.target.value);
                }
                else if(fieldIndex<5){
                    setinputnum4(e.target.value);
                }
                // Get the next input field using it's name
                const nextfield = document.querySelector(
                `input[name=field-${fieldIntIndex + 1}]`
                );
                console.log(maxLength + ' ' + value + ' ' + ' ' + name + ' ' + fieldIntIndex + ' ');
                // If found, focus the next field
                if (nextfield !== null) {
                nextfield.focus();
                }
            }
        }
        else if (value.length === 0) {
            if(fieldIndex > 0){
                const prevfield = document.querySelector(
                    `input[name=field-${fieldIntIndex - 1}]`
                    );
                    
                    // If found, focus the next field
                    if (prevfield !== null) {
                    prevfield.focus();
                    }
            }
        }

    };
    
   const copiedData=(e)=>{
    let { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    if (value.length >= maxLength) {
        if (fieldIntIndex < 5) {
            value='';
        }
        }
   }
    
    const printdata=(e)=>{
        e.preventDefault();
        setDisplay(false)
        setData(data + inputnum1 + ' ' + inputnum2+ ' ' + inputnum3 + ' ' + inputnum4);
        console.log(data);
        
    }
    
    const deleteData=(e)=>{
        const {value}=e.target;
        console.log(value);
        setinputnum1('');
        setinputnum2('');
        setinputnum3('');
        setinputnum4('');
        setData('');
        setDisplay(true);
        for(var i=1;i<5;i++){
            var inpt=document.querySelector(
                `input[name=field-${i}]`).value='';
        }
    }
  return (
    <>
        <div>
            { 
            display ? 
              <div>
                   <h2>Card Number * </h2>
            <form action="">
                <CardComponent name="field-1" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;&nbsp;
                <CardComponent name="field-2" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;&nbsp;
                <CardComponent name="field-3" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;&nbsp;
                <CardComponent name="field-4" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;&nbsp;
                <br /><br />
                <button type="submit" onClick={printdata}>submit</button>
            </form>
              </div>  
              :
            <div>
                 <div>
               
                <h3>{data}</h3>
                <button onClick={deleteData} >Delete</button>
                </div>
            </div>
}
        </div>
    </>
  )
}


export default App