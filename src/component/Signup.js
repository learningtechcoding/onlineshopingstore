import React from 'react'
import './logsignup.css'
import banner from '../img/banner.png'
const Signup = () => {
  return (
    <>
    <section className='logsection'>
     <div className="container">
       <div className="user signinBx">
         <div className="imgBx"><img src={banner} alt="" /></div>
         <div className="formBx">
           <form action="">
             <h2>Sign Up</h2>
             <input type="text" name="" placeholder="Username" />
             <input type="email" name="" id=""  placeholder='Email Address'/>
             <input type="number" name="" id=""  placeholder='Mobile Number'/>
             <input type="password" name="" placeholder="Password" />
             <input type="submit" name="" value="Submit" />
           </form>
         </div>
       </div>
       
     </div>
   </section>
     </>
  )
}

export default Signup