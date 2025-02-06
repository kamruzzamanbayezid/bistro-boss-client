import PropTypes from 'prop-types';
import profile from '../../assets/others/profile.png';

const UserProfile = ({ user, handleLogout }) => {
      return (
            <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                              <img
                                    src={user?.photoURL || profile}
                                    alt="User Avatar"
                              />
                        </div>
                  </label>
                  <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                        <li>
                              <span>{user?.displayName || "Profile"}</span>
                        </li>
                        <li>
                              <button onClick={handleLogout}>Logout</button>
                        </li>
                  </ul>
            </div>
      );
};

UserProfile.propTypes = {
      user: PropTypes.object,
      handleLogout: PropTypes.func,
}

export default UserProfile;