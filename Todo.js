import React from 'react'
import {useSelector, useSDispatch} from 'react-redux'

export default function Todo() {
    const todos = useSelector(state => state.todos)
  return (
    <h1>heloo</h1>
  );
}
