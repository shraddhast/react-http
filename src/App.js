import React, {Component, component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Components.js/PostList';
import PostForm from './Components.js/PostForm';

class App extends Component {
  render(){
    return (
   <div className="App">
     <PostForm />
    {/* <PostList /> */} 

   </div>
       );
      }
  }

export default App;
