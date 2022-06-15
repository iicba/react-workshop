import React from 'react'


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
                <div>
              <ol key = { item.id }>
                  User_Name: { item.userID }, 
                  Full_Name: { item.title }, 
                  User_Email: { item.completed } 
                  </ol>
              <button onClick={(event) => {
                // this.setState({ change: !this.state.change });
                let id = item.id
                console.log(id)
                return id
                }}>Click Here!</button>
              </div>))
          }
      </div>
  );
}
}

export default TodoList;