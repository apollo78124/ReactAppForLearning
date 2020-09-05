import React from 'react';

class ToDoBox extends React.Component {
    render() {
        return (
            <div className="todobox">
                <h1>TO DO: </h1>
                <ToDoList data={this.props.data} />
            </div>
        );
    }
  }

class ToDoList extends React.Component {
    render() {
		var todolistnodes = this.props.data.map(function (toDoItem) {
			return (
				<ToDo key={toDoItem.id} name={toDoItem.name} start={toDoItem.start} end={toDoItem.end} description={toDoItem.description} comment={toDoItem.comment}/>
			);
		});
		return <div className="todolist">{todolistnodes}</div>;
	}
  }
  
  class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			name: this.props.name,
			start : this.props.start,
            end : this.props.end,
            description : this.props.description,
            comment : this.props.comment
		};
    }  
    render() {
		return (
			<div className="toDoItem">
				<h3 className="toDoName">{this.state.name}</h3>
				<p className="schedule"><b>Schedule: </b>{this.state.start} ~ {this.state.end}</p>
				
				<p className="description">{this.state.description}</p>
                <p>Comment: {this.state.comment}</p>
				<br /><br />
			</div>
		);
	}
  }
  export default ToDoBox;