import PropTypes from 'prop-types';
import { FaGoogle, FaFacebookF,FaGithub } from "react-icons/fa";

const SocialLogin = props => {
      return (
            <div className='flex items-center justify-center gap-10'>
                  <button className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'><FaGoogle size={30} /></button>
                  <button className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'><FaFacebookF size={30} /></button>
                  <button className='text-[#444444] border border-[#444444] rounded-full w-fit p-4'><FaGithub size={30} /></button>
            </div>
      );
};

SocialLogin.propTypes = {

};

export default SocialLogin;