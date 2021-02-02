import React, { useEffect } from 'react';
import './App.css';
import {useDispatch ,useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Widgets from './Widgets';


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if(userAuth) {
      dispatch(login({
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      photoUrl:userAuth.photoURL,
      }))
    } else {
       dispatch(logout());
    }
  });
},[]);

  return (
    <div className="app">
  <Header/>

   {!user ?  (<Login />
   ):(
 <div class="app__body">
 <Sidebar/>
 <Feed/>
 <Widgets/>
 </div>

   )}
  </div>
  );
}

export default App;
