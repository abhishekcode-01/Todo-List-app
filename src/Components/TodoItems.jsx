import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({Text}) => {
  return (
    <div className='flex flex-1 items-center my-3 gap-2'>
       <div className='flex flex-1 items-center cursor-pointer'>
          <img src={tick} className='w-7'/>
          <p className='text-slate-700 ml-4 text-[17px]'>{Text}</p>
       </div> 
       <div>
          <img src={delete_icon} className='w-4 items-center cursor-pointer'/>
       </div>
    </div>
  )
}

export default TodoItems