import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContent = createContext();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const auth = getAuth();

      // Create user function
      const createUser = async (email, password) => {
            setLoading(true);
            try {
                  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                  setUser(userCredential.user);
                  return userCredential.user;
            } catch (error) {
                  console.error("Error creating user:", error.message);
                  throw error;
            } finally {
                  setLoading(false);
            }
      };

      // Listen for authentication state changes
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  console.log('Logged In user:', currentUser);
                  setLoading(false)
            })

            return () => unsubscribe();
      }, [auth])

      const authInfo = {
            user,
            loading,
            createUser, // Expose createUser function
      };

      return (
            <AuthContent.Provider value={authInfo}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node,
};

export default AuthProvider;
