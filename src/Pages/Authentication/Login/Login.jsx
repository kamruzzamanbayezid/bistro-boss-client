import bgImg from '../../../assets/others/authentication.png';
import authImg from '../../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {

      const [captchaValidate, setCaptchaValidate] = useState(false);
      const { logIn } = UseAuth();

      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();


      useEffect(() => {
            loadCaptchaEnginge(6, '#fff', '#000');
      }, []);

      const onSubmit = (data) => {
            if (!captchaValidate) {
                  return toast.error('Please complete the captcha correctly!!')
            }
            const { email, password } = data;
            
            // Log in user
            logIn(email, password)
                  .then(() => {
                        toast.success('Successfully logged in!!')
                  })
                  .catch(error => {
                        toast.error(error?.message)
                  })
      };

      // validate captcha
      const handleValidateCaptcha = () => {
            const user_captcha_value = document.getElementById('user_captcha').value;

            if (validateCaptcha(user_captcha_value) == true) {
                  setCaptchaValidate(true)
            } else {
                  setCaptchaValidate(false)
            }
      }

      // Reload Captcha
      const handleReloadCaptcha = () => {
            loadCaptchaEnginge(6, '#fff', '#000');
      }

      return (
            <div className='bg-cover bg-no-repeat md:px-10 lg:px-24 py-20' style={{ backgroundImage: `url(${bgImg})` }}>
                  <div
                        style={{
                              boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
                        }}
                        className="max-width flex flex-col lg:flex-row justify-between items-center px-5 py-10 lg:p-20">
                        <div className='w-full lg:w-[45%] hidden lg:flex'>
                              <img className='w-full' src={authImg} alt="Authentication" />
                        </div>
                        <div className='w-full lg:w-[45%]'>
                              <h2 className='text-center text-4xl font-bold mb-5'>Login</h2>

                              {/* form */}
                              <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                                    {/* Email field */}
                                    <div className='space-y-4'>
                                          <label className='text-[#444] text-xl font-semibold' htmlFor="email">Email</label>
                                          <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder='Enter your email'
                                                className='placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg'
                                                {...register("email", { required: "Email is required" })}
                                          />
                                          {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                          )}
                                    </div>

                                    {/* Password field */}
                                    <div className='space-y-4 mb-10'>
                                          <label className='text-[#444] text-xl font-semibold' htmlFor="password">Password</label>
                                          <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder='Enter your password'
                                                className='placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg'
                                                {...register("password", { required: "Password is required" })}
                                          />
                                          {errors.password && (
                                                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                                          )}
                                    </div>

                                    {/* Captcha section */}
                                    <div className='space-y-4'>
                                          <div>
                                                <div className='w-full bg-white rounded-lg py-3'>
                                                      <LoadCanvasTemplateNoReload />
                                                </div>
                                                <button
                                                      onClick={handleReloadCaptcha}
                                                      type="button"
                                                      className="text-xl font-semibold text-[#5D5FEF] hover:underline mt-1"
                                                >
                                                      Reload Captcha
                                                </button>
                                          </div>
                                          <input
                                                id='user_captcha'
                                                type="text"
                                                name="captcha"
                                                placeholder="Enter Captcha"
                                                className="placeholder:text-[#A1A1A1] block w-full h-14 pl-5 rounded-lg"
                                                onBlur={handleValidateCaptcha}
                                          />
                                          {/* check if the captcha is matched or not */}
                                          {!captchaValidate && (
                                                <p className="mt-1 text-base text-red-500">Captcha is invalid. Please try again.</p>
                                          )}

                                    </div>

                                    {/* Submit button */}
                                    <button
                                          style={{ marginTop: '40px' }}
                                          type='submit'
                                          className='text-white text-xl font-bold rounded-lg bg-[#d1a054b3] py-5 w-full'
                                    >
                                          Login
                                    </button>
                              </form>

                              <div className='mt-7'>
                                    <p className='text-[#D1A054] text-xl text-center font-medium mb-6'>
                                          New Here? <Link to='/registration'><span className='font-bold hover:underline'>Create a New Account</span></Link>
                                    </p>

                                    <p className='text-[#444444] font-medium text-xl text-center mb-4'>Or Sign In with</p>

                                    {/* Social login */}
                                    <SocialLogin />
                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default Login;
