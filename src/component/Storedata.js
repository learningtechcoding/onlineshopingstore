import React from 'react'
import './home.css'
import {Link} from "react-router-dom";
import Homecard from './Homecard';
const Storedata = (props) => {
  return (
    <div>
    
    <section className="label">
        <h1>Our Top Products</h1>
    </section>
    <section className="browsing-history">
        <Link to="/detail" className="nav-link">
           
            <Homecard 
            imgdata={props.data[0].img}
            headdata={props.data[0].head}
            
            />
        </Link>

        <Homecard 
            imgdata={props.data[1].img}
            headdata={props.data[1].head}
            />
<Homecard 
            imgdata={props.data[2].img}
            headdata={props.data[2].head}
            />
            <Homecard 
            imgdata={props.data[3].img}
            headdata={props.data[3].head}
            />
        <Link to="/detail" className="nav-link">
            <Homecard 
            imgdata={props.data[4].img}
            headdata={props.data[4].head}
            
            />
        </Link>

        <Homecard 
            imgdata={props.data[5].img}
            headdata={props.data[5].head}
            />
<Homecard 
            imgdata={props.data[6].img}
            headdata={props.data[6].head}
            />
            <Homecard 
            imgdata={props.data[7].img}
            headdata={props.data[7].head}
            />
              <Link to="/detail" className="nav-link">
           
           <Homecard 
           imgdata={props.data[0].img}
           headdata={props.data[0].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[1].img}
           headdata={props.data[1].head}
           />
<Homecard 
           imgdata={props.data[2].img}
           headdata={props.data[2].head}
           />
           <Homecard 
           imgdata={props.data[3].img}
           headdata={props.data[3].head}
           />
       <Link to="/detail" className="nav-link">
           <Homecard 
           imgdata={props.data[4].img}
           headdata={props.data[4].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[5].img}
           headdata={props.data[5].head}
           />
<Homecard 
           imgdata={props.data[6].img}
           headdata={props.data[6].head}
           />
           <Homecard 
           imgdata={props.data[7].img}
           headdata={props.data[7].head}
           />
             <Link to="/detail" className="nav-link">
           
           <Homecard 
           imgdata={props.data[0].img}
           headdata={props.data[0].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[1].img}
           headdata={props.data[1].head}
           />
<Homecard 
           imgdata={props.data[2].img}
           headdata={props.data[2].head}
           />
           <Homecard 
           imgdata={props.data[3].img}
           headdata={props.data[3].head}
           />
       <Link to="/detail" className="nav-link">
           <Homecard 
           imgdata={props.data[4].img}
           headdata={props.data[4].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[5].img}
           headdata={props.data[5].head}
           />
<Homecard 
           imgdata={props.data[6].img}
           headdata={props.data[6].head}
           />
           <Homecard 
           imgdata={props.data[7].img}
           headdata={props.data[7].head}
           />
             <Link to="/detail" className="nav-link">
           
           <Homecard 
           imgdata={props.data[0].img}
           headdata={props.data[0].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[1].img}
           headdata={props.data[1].head}
           />
<Homecard 
           imgdata={props.data[2].img}
           headdata={props.data[2].head}
           />
           <Homecard 
           imgdata={props.data[3].img}
           headdata={props.data[3].head}
           />
       <Link to="/detail" className="nav-link">
           <Homecard 
           imgdata={props.data[4].img}
           headdata={props.data[4].head}
           
           />
       </Link>

       <Homecard 
           imgdata={props.data[5].img}
           headdata={props.data[5].head}
           />
<Homecard 
           imgdata={props.data[6].img}
           headdata={props.data[6].head}
           />
           <Homecard 
           imgdata={props.data[7].img}
           headdata={props.data[7].head}
           />
    </section>
   </div>
  )
}

export default Storedata
