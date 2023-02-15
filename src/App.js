import './App.css'; 
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

    function App() {
      const [mode, setMode] = useState('light');

      const toggleMode=()=>{
        if(mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor="grey"
          // document.title="React Dark"
          // setInterval(()=>{
          //   document.title="React App";
          // },2000)
        }else{
          setMode('light')
          document.body.style.backgroundColor="white"
        }
      }
      return (
        <>
        <Navbar name="Akarsh" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <Routes>
         <Route path='/' exact element={<TextForm Textbox="Enter your content below" mode={mode}/>}>
          </Route> 
          <Route path="/about" element={<About/>}>
          </Route>
          </Routes>
        </div>

      </>
      );
    }
    
    export default App;
    