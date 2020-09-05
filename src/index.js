import React from 'react';
import ReactDOM from 'react-dom';
import Today from './App.js';
import Clock from './clock.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoBox from './ToDo.js';


function todoListRender() {
  var data = [
    { id: 1, name: 'React App For Learning Project', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 2, name: 'Another react app for learning', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 3, name: 'Another 2 ', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 4, name: 'Another 3', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 5, name: 'React App 4 For Learning Project', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 6, name: 'React Adsefpp 5 For Learning Project', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 7, name: 'React App6 For Learning Project', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'},
    { id: 8, name: 'React App For7 Learning Project', start: '09/05/2020', end:'09/10/2020', description:'Test react app to learn react.', comment:'Has no backend.'}
  ];
    return ( 
    <div className = "App">
        <Clock favcol="yellow"/>
        <ToDoBox data={data} />
    </div>
    );
}

ReactDOM.render(todoListRender(), document.getElementById('root'));

