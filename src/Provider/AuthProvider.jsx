import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Config/Firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiHandler = UseAxiosPublic();

  // Create new user with email and password
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update user's profile with name and photo URL
  const updateUser = async (name, image) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
      return auth.currentUser;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log in existing user with email and password
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log in user with Google
  const googleLogIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return userCredential.user;
    } catch (error) {
      console.error("Error with Google login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log in user with GitHub
  const githubLogIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, githubProvider);
      return userCredential.user;
    } catch (error) {
      console.error("Error with GitHub login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log out user
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Monitor auth state changes and set user accordingly
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      const userInfo = { email: currentUser?.email };
      if (currentUser) {
        const response = await apiHandler.post("/jwt", userInfo, {
          withCredentials: true,
        });
        console.log(response);
      } else {
        setLoading(false);
      }
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUser,
    logIn,
    googleLogIn,
    githubLogIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
