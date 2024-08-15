import React, { useState } from 'react'


const Form: React.FC = () => {

  const [form, setForm] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form);
    
  }
  return (
    <div className='m-4'>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="text" placeholder='Please enter your name' value={form} className='bg-slate-400 rounded-md p-2' />
        <button className='mx-4'>Submit</button>
      </form>
    </div>
  )
}

export default Form