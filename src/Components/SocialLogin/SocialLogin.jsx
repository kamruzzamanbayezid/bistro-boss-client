import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa'
import UseAuth from '../../Hooks/UseAuth'
import toast from 'react-hot-toast'
import UseAxiosPublic from '../../Hooks/UseAxiosPublic'
import { useNavigate } from 'react-router-dom'

const SocialLogin = () => {
  const { googleLogIn, githubLogIn, setUser } = UseAuth()
  const apiHandler = UseAxiosPublic()
  const navigate = useNavigate()

  const handleSocialLogin = async loginMethod => {
    try {
      const result = await loginMethod()
      setUser(result)
      const userInfo = {
        name: result?.displayName,
        email: result?.email,
        image: result?.photoURL
      }

      // added user info into database
      apiHandler
        .post('/users', userInfo)
        .then(res => {
          if (res?.data?.insertedId) {
            console.log(res);
            
            toast.success('User Created Successfully!!')
            navigate('/')
          } else {
            toast.success('Successfully logged In!!')
            navigate('/')
          }
        })
        .catch(error => {
          console.log(error)
          toast.error(error?.message)
        })
      toast.success('Successfully logged in!')
    } catch (error) {
      toast.error(error?.message || 'Failed to save user data')
    }
  }

  return (
    <div className='flex items-center justify-center gap-10'>
      <button
        onClick={() => handleSocialLogin(googleLogIn)}
        className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'
      >
        <FaGoogle size={30} />
      </button>
      <button className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'>
        <FaFacebookF size={30} />
      </button>
      <button
        onClick={() => handleSocialLogin(githubLogIn)}
        className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'
      >
        <FaGithub size={30} />
      </button>
    </div>
  )
}

export default SocialLogin
