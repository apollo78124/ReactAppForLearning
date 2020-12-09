import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

class ToDoBox extends React.Component {
    render() {
        return (
            <div class="toDoBox">
                <div class="row">
                    <div class="col-md-4 offset-md-1">
                        <h3>TO DO: </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 offset-md-1">
                        <h4>Today</h4>
                        <ToDoList data={this.props.data} />
                    </div>
                </div>
            </div>
        );
    }
  }

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			items: Array.from({ length: 4 }),
            hasMore: true
		};
    }  

    fetchMoreData = () => {
        if (this.state.items.length >= 50) {
          this.setState({ hasMore: false });
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          this.setState({
            items: this.props.data.concat(Array.from({ length: 4 }))
          });
        }, 500);
    };
    render() {
		return (
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
                }
            >
                
                {this.state.items.map((toDoItem, index) => (
                <div key={index}>
                    <ToDo key={toDoItem.id} name={toDoItem.name} start={toDoItem.start} end={toDoItem.end} description={toDoItem.description} comment={toDoItem.comment}/>
                </div>
                ))}
          </InfiniteScroll>);
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
			<div class="border border-info">
				<h6 className="toDoName">{this.state.name}</h6>
				<p className="schedule"><b>Schedule: </b>{this.state.start} ~ {this.state.end}</p>
				
				<p className="description">   {this.state.description}</p>
                <p>   Comment: {this.state.comment}</p>
				<br /><br />
			</div>
		);
	}
  }
  export default ToDoBox;