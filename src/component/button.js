import React from 'react';

function Button({text}) {
  return (
    <button className='bg-blue-700 p-1 w-[100px] rounded-lg active:bg-blue-900 hover:bg-blue-800 h-10 my-auto '>{text}</button>
  )
}

export default Button