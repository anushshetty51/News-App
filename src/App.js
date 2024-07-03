import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App=()=> {
 const pageSize=5;
 const apikey = process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(0);
 
   
  //life cycle method
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      
          <Navbar />
          <Routes>
          <Route exact path="/" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="home" country="in" category="general" />} />
        <Route exact path="/business" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business" />} />
        <Route exact  path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
        <Route exact path="/general" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="general"  country="in" category="general" />} />
        <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health" />} />
        <Route exact path="/science" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science" />} />
        <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports" />} />
        <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>

      </div>
    )
  
}

export default App;

