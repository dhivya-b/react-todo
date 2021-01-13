import React from 'react';
import PropTypes from 'prop-types';



class AddTodo extends React.Component{

    state={
        title:' '
    }

    submit =(e)  =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:' '});
    }

    change = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return(
            <form  onSubmit={this.submit} style={{ display:"flex"}}>
                <input 
                type="text" 
                name="title"  
                placeholder="Add Todo...."  
                style={{flex:'10'}}
                value={this.state.title}
                onChange={this.change} />

                <input 
                className="btn" 
                type ="submit"  
                value="Submit" 
                style={{flex:'1'}} />
            </form>
        );

    }


}

//PropTypes
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}


export default AddTodo;