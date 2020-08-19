import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'classes.js';

function App() {
    todo1 = new ToDo("React project", "August 19th", "August 31st", "Reactproject for learning", "for fun")
    return ( 
    <div className = "App">
        <h1> Heelo dsfesefworld </h1> 
        <p>todo1.show()</p>
    </div>
    );
}

export default App;