'use client';
import React, { createContext, useContext, useState } from 'react';
import {
  onAuthStateChanged,
  getAuth,
  User,
} from 'firebase/auth';
import firebase_app from '@/app/firebase/config';

export interface AuthContextType {
  user?: any
}

const auth = getAuth(firebase_app);

export const AuthContext = createContext<AuthContextType>({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};