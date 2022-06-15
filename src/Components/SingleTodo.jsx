import React from 'react'



class SingleTodo extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
  componentDidMount() {
    fetch(
"https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
}
  // ComponentDidMount is used to
  // execute the code 
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Please wait some time.... </h1> </div> ;
 
      return (
      <div className = "SingleTodo"> 
      <h4> single div below</h4>{ 
      <ol key = { items.id } >
      User_Id: { items.userId }, 
      Title: { items.title }, 
      Completed: { String(items.completed) }
      </ol>
          }
      </div>
  );
}
}

export default SingleTodo;