import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todolist, settodolist] = useState([]);

  const inputref = useRef();
  const add = () => {
    const inputtext = inputref.current.value;
    const newtodolist = {
      id: Date.Now(),
      text: inputref.current.value,
      iscomplete: false,
    }
    settodolist((prev) => [...prev, newtodolist]);
    inputref.current.value = "";
  }

  return (
    <div className='bg-white w-11/12 place-self-center max-w-md flex flex-col
     p-7 min-h-[550px] rounded-xl'>
      {/*-----title----- */}
      <div className='flex items-center gap-2 mt-7'>
        <img className='w-8' src={todo_icon} />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      {/*-------input------ */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputref} className='bg-transparent outline-none border-0 flex-1 h-14 pl-6
          pr-2 placeholder:text-slate-600' type="text" placeholder='Add your text'></input>
        <button onClick={add} className='border-none w-28 h-14 bg-orange-500 rounded-full
          text-white text-lg font-medium cursor-pointer'>ADD +</button>
      </div>

      {/*---------Todo-Items--------*/}

      <div>
        <TodoItems Text="React and Tailwind css project" />
        <TodoItems Text="make projects from greatstack" />
      </div>


    </div>
  )
}

export default Todo