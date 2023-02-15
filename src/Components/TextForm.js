import React, {useState} from 'react'

export default function TextForm(props){

    const [text,setText]=useState('');

    const handleUpClick=()=>{
     let newtext=text.toUpperCase();
     setText(newtext)
    }

    const handleOnChange=(event)=>{
     setText(event.target.value)
    }

    const handleLowClick=()=>{
     let newtext=text.toLowerCase();
     setText(newtext)
    }

    const handleCopy=()=>{
     let text=document.getElementById('mybox');
     text.select()
     navigator.clipboard.writeText(text.value)
    }

    const handleSpaces=()=>{
     let newtext=text.split(/[ ]+/);
     setText(newtext.join(" "))
    }

    const handleDelete=()=>{
        setText(" ");
       }
    return(
<>
<div className='p-4 bg-violet-600  border-2 border-white rounded my-36 mx-auto w-1/2' >
   <div className='flex flex-col justify-start items-center gap-y-3 ' style={{color:props.mode==='dark'?'white':'black'}}>
    <label htmlFor="mybox" className='text-2xl pb-2 font-semibold'>{props.Textbox}</label>
    <textarea id='mybox' className='flex border-2 border-black h-28 w-full p-1' onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
    <div className='space-x-2'>
    <button className='border-2 border-white bg-emerald-400 p-1' onClick={handleUpClick} >Convert to Uppercase</button>
    <button className='border-2 border-white bg-emerald-400 p-1' onClick={handleLowClick} >Convert to LowerCase</button>
    <button className='border-2 border-white bg-emerald-400 p-1' onClick={handleCopy} >Copy</button>
    <button className='border-2 border-white bg-emerald-400 p-1' onClick={handleSpaces} >Handle Spaces</button>
    <button className='border-2 border-white bg-emerald-400 p-1' onClick={handleDelete} >Delete</button>
   </div>
   </div>

   <div className='flex flex-col justify-center items-center container gap-y-3 mt-4 w-auto h-auto' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='text-xl'>Second Container</h1>
    <p>{text.split(" ").length} word ,Text length is {text.length}</p>
    <p>{0.008 * text.split(" ").length} Minutes read {text.length}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text here to preview"}</p>
   </div>
   </div>
</>
    );
}