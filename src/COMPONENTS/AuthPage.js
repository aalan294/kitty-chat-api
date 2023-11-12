import React from 'react'
import '../STYLES/auth.css'

const AuthPage = ({usernameSI,setUsernameSI,passwordI,setPasswordI,handleSignIn,handleSignUp,usernameSU,setUsernameSU,passwordU,setPasswordU}) => {
  return (
    <div className='auth'>
        <h1>Sign In</h1>
        <form action="" className='signin' onSubmit={handleSignIn}>
            <input type="text" required placeholder='username' value={usernameSI} onChange={(e)=>{setUsernameSI(e.target.value)}}  />
            <input type="password" required placeholder='password' value={passwordI} onChange={(e)=>{setPasswordI(e.target.value)}} /> <br />
            <button type='submit'>signIn</button>
        </form>
        <h1>Sign Up</h1>
        <form action="" className='signup' onSubmit={handleSignUp}>
            <input type="text" required placeholder='username' value={usernameSU} onChange={(e)=>{setUsernameSU(e.target.value)}}  />
            <input type="password" required placeholder='password' value={passwordU} onChange={(e)=>{setPasswordU(e.target.value)}} /> <br />
            <button type='submit'>signUp</button>
        </form>
    </div>
  )
}

export default AuthPage