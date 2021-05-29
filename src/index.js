import React                        from 'react';
import ReactDOM                     from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom';

import firebase                     from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import dotenv from 'dotenv';
// dotenv.config();
require('dotenv').config();

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: "rootstorosestarot.firebaseapp.com",
  databaseURL: "https://rootstorosestarot-default-rtdb.firebaseio.com",
  projectId: "rootstorosestarot",
  storageBucket: "rootstorosestarot.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`,
  appId:  `${process.env.REACT_APP_FIREBASE_APPID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENTID}`
});
// const auth = firebase.auth();
const storage = firebase.storage();
export { storage, firebase as default }


ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();