import React, { useEffect, useState } from 'react'
import './Style/Estimate.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


function Estimate() {


  const [state, setState] = useState("");

  const navigate = useNavigate();
  const [estimate, setEstimate] = useState({
    "name": "",
    "email": "",
    "mobileNumber": "",
    "origin": "",
    "status": false,
    "destination": ""
  })

 

  const onInputChange = (e) => {
   
  
    setEstimate({...estimate, [e.target.name]: e.target.value });

    if (e.target.name === 'origin') {
      Cookies.set('origin', e.target.value);
    }
    if (e.target.name === 'destination'){
      Cookies.set('destination', e.target.value);
    }
    if (e.target.name === 'name'){
      Cookies.set('name', e.target.value);
    }
    if (e.target.name === 'mobileNumber'){
      Cookies.set('mobileNumber', e.target.value);
    }
    if (e.target.name === 'email'){
      Cookies.set('email', e.target.value);
    }

   
    
    
    }

    


  const onPost = async (e) => {
    e.preventDefault()
   
   await axios.post("http://localhost:4444/api/rest/User", estimate)

    toast( " Thank you for Sharing, Origin Location Details Added");
    navigate("/ItemList")
  }



  return (
    <div class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div id="Comp">
      <ToastContainer />
        <form onSubmit={(e) => onPost(e)}>


          <div id="Estimate-Box">

            <div id="Holder">
              <label>Name</label>
              <input type="text" name="name"  placeholder="Enter your name" required onChange={(e) => onInputChange(e)}  />
             
            </div>
            <div id="Holder">
              <label>Mail</label>
              <input type="text" name="email"  placeholder="Enter your email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required onChange={(e) => onInputChange(e)}  />
             
            </div>
            <div id="Holder">
              <label>Contact</label>
              <input type="tel" name="mobileNumber"  inputmode="numeric" placeholder="Enter Contact number" required pattern="[0-9]*" onChange={(e) => onInputChange(e)}   />
            
            </div>
            <div id="Holder">
              <label>Origin</label>
              <input type="text" name="origin"  placeholder="Sending from" required onChange={(e) => onInputChange(e)} />
              
            </div>
            <div id="Holder">
              <label>Destination</label>
              <input type="text" name="destination"  placeholder="Receiving End" required onChange={(e) => onInputChange(e)} />
            
            </div>
            <div id="Holder">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Estimate</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Estimate
