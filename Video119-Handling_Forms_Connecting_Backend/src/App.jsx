import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(5)//network delay simulation
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data,"\n", res)
    if (data.username === "rohan") { setError("myForm", { message: "This name not supported" }) }
    if (data.username === "sohan") { setError("myForm", { message: "This name not supported" }) }
  }

  return (
    <>
      <Navbar />
      {isSubmitting && <div className='m-auto h-fit' >Submitting...</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-fit w-md m-auto'>
        <input placeholder='username' {...register("username", {
          required: {
            value: true,
            message: "Username is required"
          },
          minLength: {
            value: 3,
            message: "Minimum value should be 3"
          }
        })} type="text" />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <input placeholder='password' {...register("password", {
          required: {
            value: true,
            message: "Password is required"
          },
          minLength: {
            value: 7,
            message: "Minimum length should be 7"
          },
          maxLength: {
            value: 15,
            message: "Maximum length should be 15"
          }
        })} type="password" />
        {errors.password && <div className='red'>{errors.password.message}</div>}

        <input disabled={isSubmitting} type="submit" value="Submit" className='cursor-pointer' />
        {errors.myForm && <div className='red'>{errors.myForm.message}</div>}
      </form>
    </>
  )
}

export default App
