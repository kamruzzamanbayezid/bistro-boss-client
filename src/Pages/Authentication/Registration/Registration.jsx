import bgImg from '../../../assets/others/authentication.png'
import authImg from '../../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../../../Components/SocialLogin/SocialLogin'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useState } from 'react'
import UseAuth from '../../../Hooks/UseAuth'
import { Helmet } from 'react-helmet-async'
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic'

const Registration = () => {
  const [image, setImage] = useState(null)
  const { user, setUser, createUser, updateUser } = UseAuth()
  const apiHandler = UseAxiosPublic()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Upload image with imagebb
  const handleImageUpload = async e => {
    const file = e.target.files[0]

    if (file) {
      const formData = new FormData()
      formData.append('image', file)

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=597d78aa1ab369b0aa1583848b74f0f9`,
          formData
        )
        setImage(response?.data?.data?.url)
      } catch (error) {
        toast.error(error?.message)
        console.error(error)
      }
    }
  }

  const onSubmit = data => {
    const { name, email, password } = data

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
        
        // Update user info
        updateUser(name, image)
          .then(() => {
            setUser({ ...result?.user, displayName: name, photoURL: image })

            const userInfo = {
              name,
              email,
              image
            }

            // added user info into database
            apiHandler
              .post('/users', userInfo)
              .then(res => {
                if (res?.data?.insertedId) {
                  toast.success('User Created Successfully!!')
                  navigate('/')
                }
              })
              .catch(error => {
                console.log(error)
                toast.error(error?.message)
              })
          })
          .catch(error => {
            toast.error(error?.message)
          })
      })
      .catch(error => {
        toast.error(error?.message)
      })
  }

  return (
    <div
      className='bg-cover bg-no-repeat md:px-10 lg:px-24 py-20'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Helmet>
        <title>Registration | Bistro Boss</title>
      </Helmet>
      <div
        style={{
          boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'
        }}
        className='max-width flex flex-col lg:flex-row-reverse justify-between items-center px-5 py-10 lg:p-20'
      >
        <div className='w-full lg:w-[45%] hidden lg:flex'>
          <img src={authImg} alt='Authentication' />
        </div>
        <div className='w-full lg:w-[45%]'>
          <h2 className='text-center text-4xl font-bold mb-5'>Register</h2>

          {/* form */}
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            {/* Name field */}
            <div className='space-y-4'>
              <label
                className='text-[#444] text-xl font-semibold'
                htmlFor='name'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name'
                className='placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email field */}
            <div className='space-y-4'>
              <label
                className='text-[#444] text-xl font-semibold'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                className='placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg'
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image field */}
            <div className='space-y-4'>
              <label
                className='text-[#444] text-xl font-semibold'
                htmlFor='image'
              >
                Upload Image
              </label>
              <input
                type='file'
                name='image'
                id='image'
                onChange={handleImageUpload}
                className='block w-full bg-white pl-5 rounded-lg py-3 text-[#A1A1A1] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#d1a054b3] file:text-white'
              />
            </div>

            {/* Password field */}
            <div className='space-y-4 mb-10'>
              <label
                className='text-[#444] text-xl font-semibold'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Enter your password'
                className='placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg'
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              style={{ marginTop: '40px' }}
              type='submit'
              className='text-white text-xl font-bold rounded-lg bg-[#d1a054b3] py-5 w-full'
            >
              Register
            </button>
          </form>

          <div className='mt-7'>
            <p className='text-[#D1A054] text-xl text-center font-medium mb-6'>
              Already registered?{' '}
              <Link to='/login'>
                <span className='font-bold hover:underline'>Go to log in</span>
              </Link>
            </p>

            <p className='text-[#444444] font-medium text-xl text-center mb-4'>
              Or Sign In with
            </p>

            {/* Social login */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
