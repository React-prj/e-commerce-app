import { createContext, useState, useEffect } from 'react'

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

//as the actual value you want to access
export const UserContext = createContext({
  //default value for the context
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  //empty dependencies means only runs it once when components mounts
  useEffect(() => {
    //we need to avoid memory leaks here
    //so we tell it to stop listening whenever component unmount
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
      // console.log(user)
    })
    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}