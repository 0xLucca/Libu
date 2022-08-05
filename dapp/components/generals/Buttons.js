import React from 'react'

const Buttons = ({ text }) => {
  return (
    <button
      className="
    bg-libuDarkPurple 
    py-2 px-3.5 
    mx-2
    rounded-md 
    text-libuGreen 
    duration-200
    hover:bg-libuPurple
    active:bg-libuGreen
    active:text-libuDarkPurple
    "
    >
      {text}
    </button>
  )
}

export default Buttons
