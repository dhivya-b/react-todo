import React from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import {v4 as uuid } from 'uuid';
import axios from 'axios';
import './App.css';

class  App  extends React.Component  {
state={
  todos :[
   // {
   //   id:uuid(),
   //   title:'Go for shopping',
   //   isCompleted:false
   // },
    
   // {
   //   id:uuid(),
   //   title:'Child Admission',
   //   isCompleted:false
   // },
   // {
   //  id:uuid(),
   //   title:'Movie outing',
   //   isCompleted:false
   // }         

  ]  //instead of hardcoding the data as above we are getting data from a database and store it in todos array
}


componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then(res => this.setState({todos: res.data}))
}


//Toggle Complete
markComplete = (id) =>{
 this.setState({todos:this.state.todos.map(todo=>{
   if(todo.id===id){
     todo.isCompleted = !todo.isCompleted
   }
   return todo;
 })   
 })

}

addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      isCompleted:false
    })
    .then(res=>  this.setState({todos:[...this.state.todos,res.data]}))
 
}

delTodo = (id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)]
    }))
   
}


  render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path='/'render = {props => (
        <React.Fragment>
           <AddTodo  addTodo={this.addTodo} />
           <Todos  todos={this.state.todos} markComplete={this.markComplete} 
           delTodo={this.delTodo}/>
   </React.Fragment>
   
      )} />

      <Route path='/about'  component={About} />
     
    </div>
    </div>
    </Router>
  );
}
}

export default App;
