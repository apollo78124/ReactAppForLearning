import React from 'react';
import ReactDOM from 'react-dom';
import Today from './App.js';

import './App.css';
class Items {
    constructor(name) {
      this.title = name;
    }
  
    present() {
      return 'Have to do ' + this.title;
    }
  }
  
  class ToDo extends Items {
    constructor(name, start, end, description, comment) {
      super(name);
      this.start = start;
      this.end = end;
      this.description = description;
      this.comment = comment;
    }  
    show() {
         return React.createElement('p', {}, this.present() + ' starting ' + this.start + ' until ' + this.end + " " + this.description + " comment: " + this.comment);
    }
  }
function todoListRender() {
    var todo1 = new ToDo("React project", "August 19th", "August 31st", "Reactproject for learning", "for fun");
    var renderString = todo1.show();
    return ( 
    <div className = "App">
        <Today />
        {renderString}
    </div>
    );
}

ReactDOM.render(todoListRender(), document.getElementById('root'));

