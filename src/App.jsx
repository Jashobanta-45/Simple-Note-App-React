import React, { useState } from 'react'

const App = () => {
  const [titel, setTitel] = useState("");
  const [deteals, setDeteals] = useState("");
  const [task, setTask] = useState([])
  const submitHandel = (e) => {
    e.preventDefault()

    const copyTsk = [...task]
    copyTsk.push({ titel, deteals })
    setTask(copyTsk)

    setTitel(" ")
    setDeteals("")
  }
  const deletNote=(idx)=>{
const delettask = [...task];
delettask.splice(idx,1)
setTask(delettask)

  }
  return (
    <div className='bg-black h-full  lg:flex ' >
      <form onSubmit={(e) => {
        submitHandel(e)
      }} className='flex items-start flex-col lg:w-1/2 gap-4  p-10 text-white' >
        <h1 className='text-4xl mb-2 font-bold text-white'>ADD Notes</h1>
        {/* 1st input*/}
        <input type="text"
          placeholder='Enter Your topic'
          className='py-2 w-1/2 px-5 border-2 rounded text-white'
          value={titel}
          onChange={(e) => {
            setTitel(e.target.value)

          }}
        />
        {/* 2nd input*/}
        <textarea id=""
          placeholder='Write your notes'
          className='py-2 w-1/2 px-5 border-2 rounded text-white'
          value={deteals}
          onChange={(e) => {
            setDeteals(e.target.value)

          }}>
        </textarea>

        <button className='bg-amber-50 w-1/2  text-black px-5 py-2 rounded '>
          Add Note
        </button>
      </form>
      <div className=' lg:w1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes </h1>
        <div className='flex flex-wrap item-start justify-start gap-5 mt-5 overflow-auto h-full' >
          {task.map(function (elem, idx) {
            return <div
              key={idx}
              className='h-52 w-40 rounded-2xl bg-white p-5 flex flex-col justify-between text-black'
            >
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.titel}</h3>
                <p className='leading-tight mt-4 font-medium text-gray-500 break-words'>
      {elem.deteals}
    </p>
              </div>
              <button onClick={()=>{
                deletNote(idx)
              }}
              className='w-full bg-red-600 text-white py-1 rounded-md hover:bg-red-700 transition'>
                Delete Note
              </button>
            </div>


          })}
        </div>

      </div>
    </div>
  )
}

export default App