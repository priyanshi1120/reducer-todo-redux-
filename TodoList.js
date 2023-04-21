import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'

function TodoList() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    
    dispatch({
       type: 'ADD_TODO', 
       payload: inputValue 
      });
    
  };
  const selectTextFromState = (state) =>{
    return state;
  }
  const DisplayTodo = useSelector(selectTextFromState)
  const handleDeleteTodo = (index) => {
    
    dispatch({ type: 'REMOVE_TODO' });
  };

    const todos = useSelector(state => state.todos)
    console.log(todos)
 
    
  
    function handleToggle(index) {
      dispatch({type:'TOGGLE_TODO'});
    }

  return (
    <div>
      <h1 >Todo List</h1>
{
  DisplayTodo.map((todos) =>{
    console.log(todos)
  
        return (
          <>
          <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => handleToggle()}
            />
      <span>{todos}</span>
    <br/>
</>
   
  )}
  
    )

}
      <input value={inputValue} onChange={handleInputChange}  placeholder='add todo'></input><br/>
      <button onClick={handleAddTodo} >Add</button>
      <button onClick={handleDeleteTodo} >Delete Todos</button>
     

     
    </div>
  );
}

export default TodoList;
