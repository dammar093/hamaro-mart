import React, { useState } from 'react'
import Input from '../components/Input'
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom"
import avatar from "../assets/signin.gif"

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showEye, setShowEye] = useState(true)
  const [password, setPassword] = useState("")

  const handelPassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value);
  }
  return (
    <section className='w-full my-8'>
      <div className='w-full md:w-[500px] p-4 mx-auto bg-white rounded'>
        <form className=''
          onSubmit={handleSubmit((data) => {

          })}
        >
          <div className=' mx-auto mt-4 rounded-full h-[100px] w-[100px] border border-[#AE56EF] overflow-hidden flex items-end  relative'>
            <img className='absolute top-0 left-0 w-full h-full rounded-full object-cover' src={avatar} alt={"avatar"} />
          </div>
          <div className=' mt-4'>
            <div className='w-full h-10 rounded-md bg-slate-300 text-gray-600'>
              <Input
                type="email"
                className="w-full h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required !',
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: 'Email not valid',
                  },
                })}
              />
            </div>
            {
              errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )
            }
          </div>
          <div className='mt-4'>
            <div className='w-full h-10  rounded-md bg-slate-300 text-gray-600 flex justify-between items-center'>
              <Input
                type={showEye ? "password" : "text"}
                className="w-[85%] h-full bg-transparent text-gray-600 rounded outline-none px-2"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'PaSsword is required !',

                })}
                onChange={handelPassword}
              />
              {
                password && <div className='h-10 w-[15%] cursor-pointer flex items-center justify-center text-2xl '>
                  {
                    showEye ? <FaRegEyeSlash onClick={() => setShowEye(prev => !prev)} /> : <FaRegEye onClick={() => setShowEye(prev => !prev)} />
                  }
                </div>
              }
            </div>
            {
              errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )
            }
            <span className='float-right my-2 text-md text-blue-600 hover:underline'><Link to={"/forgot-password"}>Forgot Password</Link></span>
          </div>
          <div className='my-4 w-full'>
            <Button
              className="w-full h-10 rounded px-2 bg-[#AE56EF] hover:bg-[#8d48be] text-white font-semibold"
              type="submit"
            >
              Login
            </Button>
          </div>
          <p className='text-md text-gray-600 whitespace-nowrap'>Didn't have an account? <Link className='text-blue-600 hover:underline' to={"/signup"}>create account</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login