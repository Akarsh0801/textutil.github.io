import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


export default function First(props){
    return(
     <>
    <nav className={`flex flex-row item-center space-x-10 bg-${props.mode} p-2.5`}>
    <h1 className='text-2xl items-center text-violet-500 pl-3'>{props.name}</h1>
    <NavLink to="/" className="text-lg item-center  text-center pl-[45rem] text-violet-500">Home</NavLink>
    <NavLink to="/about" className='text-lg item-center text-center text-violet-500'>About</NavLink>
{/* <input className='absolute right-28' placeholder='Enter'></input>
<button className='absolute right-10 border-2 bg-slate-500'>Search</button> */}

<div className=" flex justify-center items-center pl-[50rem] space-x-2 form-check form-switch  ">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="mode"/>
  <label className="form-check-label text-violet-500" htmlFor="mode">Mode</label>
</div>
</nav>

</>

    );
}

First.propTypes={name:PropTypes.string}