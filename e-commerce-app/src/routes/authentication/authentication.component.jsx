// import { useEffect } from 'react';

// import { getRedirectResult } from 'firebase/auth';

// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentication.styles.scss';


const Authentication = () => {
  // useEffect( async () => {
  //   const response = await getRedirectResult(auth)
  //   console.log(response)
  // } , [])
  // const logGooglePopupUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(user);
  // }


  return (
    <div  className='authentication-container'>
      {/* <button onClick={logGooglePopupUser}>sign in with Google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>sign in with Google popup</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;