import { useState } from 'react'

function App() {
  const [color, setColor] = useState("pink")

  const colorChanger = (newColor)=> {
    setColor(newColor);
  };

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed bottom-15 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-6 py-3 flex gap-4 justify-between'>
          <button type="button" className='cursor-pointer bg-blue-400 rounded-full px-4 py-2' onClick={() => {colorChanger("#42a5f5")}}>Blue</button>
          <button type="button" className='cursor-pointer bg-green-400 rounded-full px-4 py-2' onClick={() => {colorChanger("#66bb6a")}}>Green</button>
          <button type="button" className='cursor-pointer bg-pink-300 rounded-full px-4 py-2' onClick={() => {colorChanger("#f48fb1")}}>Pink</button>
          <button type="button" className='cursor-pointer bg-yellow-300 rounded-full px-4 py-2' onClick={() => {colorChanger("#fff176")}}>Yellow</button>
          <button type="button" className='cursor-pointer bg-red-400 rounded-full px-4 py-2' onClick={() => {colorChanger("#ef5350")}}>Red</button>
          <button type="button" className='cursor-pointer bg-orange-300 rounded-full px-4 py-2' onClick={() => {colorChanger("#ffb74d")}}>Orange</button>
      </div>
    </div>
  )
}

export default App
