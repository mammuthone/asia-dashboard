import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../configs/firebase";

var cookie = require("@boiseitguru/cookie-cutter");

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, uid: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('auth state changed...')
    // auth.onAuthStateChanged(function handle(user) {

    // })
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    try {

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('log in... ', user);
      const idToken = await user.getIdToken();
      console.log('idToken', idToken);
      const postOptions = {
        method: 'POST',
        body: JSON.stringify({ idToken }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }

      const response = await fetch('/api/sessionLogin', postOptions);

      return response;
        
    }
    catch (err) {
      console.error(err)
    }
  };

  const logOut = async () => {
    console.log('log out...')
    setUser({ email: null, uid: null });
    await signOut(auth);
    const response = await fetch('/api/sessionLogout');
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};