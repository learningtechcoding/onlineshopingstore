import React from 'react'
import './logsignup.css'
import banner from '../img/banner.png'
const Login = () => {
  return (
    <>
   <section className='logsection'>
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img src={banner} alt="" /></div>
        <div className="formBx">
          <form action="">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
          </form>
        </div>
      </div>
      
    </div>
  </section>
    </>
  )
}

export default Login
