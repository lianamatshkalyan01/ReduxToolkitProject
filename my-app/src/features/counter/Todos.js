import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectTodos, addTodo, editTodo, removeTodo} from './todoSlice';
import { AiFillEdit, AiFillDelete, AiOutlineFileAdd, AiFillSave } from "react-icons/ai";
import {ImCancelCircle} from "react-icons/im"
import './todo.css'

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  return (
    <div className='main'>
      <p className='list'>ToDo-List</p> <br />
      <input className='list-input'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(addTodo({ value: newTodo }));
            setNewTodo('');
          }
        }}
      />
      <AiOutlineFileAdd className='button-add'
        onClick={() => {
          dispatch(addTodo({ value: newTodo }));
          setNewTodo('');
        }}
      />
      {todos.map((item, index) => {
        return (
          <div key={index}>
            {editingIndex === index ? (
              <>
                <input className='edit'
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <AiFillSave className='button-save'
                  onClick={() => {
                    dispatch(editTodo({ index: editingIndex, value: editValue }));
                    setEditingIndex(null);
                    setEditValue('');
                  }}
                />
                <ImCancelCircle className='button-cancel'
                  onClick={() => {
                    setEditingIndex(null);
                    setEditValue('');
                  }}
                />
              </>
            ) : (
              <>
              <div className='todo'>
                <div className='item'>
                <span >{item.value} </span>
                </div>
                <AiFillDelete className='button-delete'
                  onClick={() => {
                    dispatch(removeTodo(index));
                  }}
                />
                <AiFillEdit className='button-edit'
                  onClick={() => {
                    setEditingIndex(index);
                    setEditValue(item.value);
                  }}
                />
               
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}