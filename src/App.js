import React from 'react'

// var clicking = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
//   var test = "It works"
//   return test
// }

class TodoList extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch(
"https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Please wait some time.... </h1> </div> ;
 
      return (
      <div className = "App">
          <h4> Items listed below </h4>  {
              items.map((item) => ( 
              <ol key = { item.id } >
                  User_Name: { item.userID }, 
                  Full_Name: { item.title }, 
                  User_Email: { item.completed } 
                  </ol>
              ))
          }
      </div>
  );
}
}

const clicking = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}


class App extends React.Component {
  // state you should have
    // todos
    // singleTodo
    // loading
    // loadingMessage = 'app is loading...' -> pass as props to loading component.
    constructor(props) {
      super(props);
      this.state = {change: true};

    }
  
  // Components
    // 1. Todos
    // 2. TodoItem
    // 3. SingleTodo (single highlighted todo)
    // 4. Loading Component
    // 5. Button component - FOR THE BACK BUTTON

  // Functionality
    // Ability to set a single todo (click event on a todo)
    // Back buttons should make single todo state null. 


  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/todos/
  // 2. The app should show all todos in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single todo when it is clicked on.
  // 5. Have a back button that changes the singleTodo state back to null.


  // When clicking on a single todo, should make API call to https://jsonplaceholder.typicode.com/todos/ID, 
  // get the id from the event object that is created. 

  
  // If loading, render loading component with loading message passed in as props.

  // Conditionaly render Todos -> TodoItem or singleTodo

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Initial app component</h1>  
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <button
          onClick={(event) => {
            this.setState({ change: !this.state.change });
          }}
        >
          Click Here!
        </button>
        {this.state.change ? (
          <div>
          <h1>To-Do List Overview</h1>
          <TodoList />
          </div>
        ) : (
          <div>
          <h1>Single Item Listed Below</h1>
          <h2>clicking</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
