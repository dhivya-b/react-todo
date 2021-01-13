import React from 'react';
import PropTypes from 'prop-types';

 class TodoItem extends React.Component{

    getStyle =() => {
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px dotted #ccc',
            textDecoration : this.props.todo.isCompleted  ? 'line-through'  : 'none'
        }
    }

   

     


    render(){
        const{id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)} />{ ' '}
                   {title}
                   <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                   </p>
            </div>
        );
    }

    }


    const btnStyle={
        backgroundColor:'#ff0000',
        color:'#ffffff',
        borderRadius:'50%',
        padding:'5px 8px',
        border:'none',
        float:'right'
    }

//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

export default TodoItem;

