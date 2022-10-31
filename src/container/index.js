import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import reportWebVitals from '../reportWebVitals';

// componentDidMount(){
//   return componentDidMount? console.log('component Did Mount') : console.log('component did not mount');
// }

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
