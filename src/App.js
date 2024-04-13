import React from 'react'
import TicTacToe from './components/Tic Tac Toe/TicTacToe';

const App = () => {
  return (
    <div className=" items-center justify-center h-screen p-10">
      <div className=' bg-gradient-to-bl from-[#42047e] to-[#07f49e] h-full w-4/4 rounded-2xl shadow-xl items-center justify-center text-center'>
        <h1 className='text-white font-extrabold items-center p-4 text-5xl font-font1'>Tic Tac Toe</h1>
        
        <TicTacToe />
        <p className='font-bold text-sm font- opacity-10 '>By-rbaskey</p>
      </div>
    </div>
  )
}

export default App