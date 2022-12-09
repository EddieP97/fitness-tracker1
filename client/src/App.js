import React from 'react';
//import './App.css';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Login from './components/user/Login';
import BottomNav from './components/BottomNav';

function App() {
  return (
   <>
   
   <Loading></Loading>
   <Notification></Notification>
   <Login></Login> 
   <NavBar></NavBar>
   <BottomNav></BottomNav>
   </> 
  );
}

export default App;
