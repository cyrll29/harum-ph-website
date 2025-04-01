'use client';

import { createContext, useState, useEffect } from "react";
import { auth } from "@/services/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const FirebaseAuthContext = createContext(null)

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    })
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ user, loading }}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}