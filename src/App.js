import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Subject from './Subject'
import Keyword from './Keyword'
import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/keyword" element={<Keyword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
