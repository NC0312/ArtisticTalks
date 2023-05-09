import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import MainForm from './component/MainForm';
import ChatRoom from './component/ChatRoom';

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center " style={{height: "100vh"}}>
      <Router>
        <Routes>
          <Route path="/" element={<MainForm/>}></Route>
          <Route path="/chat/:roomName" element={<ChatRoom/>}></Route>
          <Route path='*' element={<h1>404!! Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
