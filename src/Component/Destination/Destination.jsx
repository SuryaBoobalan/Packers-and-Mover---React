import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import img from '../Images/undraw_Delivery_re_f50b.png';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Destination() {

    const userId = Cookies.get("userId");
    const nav = useNavigate();

    const [destination, setDestination] = useState({
        "floorNo": "",
        "doorstepToVehicle": "",
        "user": {
            "userId": userId
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await axios.post("http://localhost:4444/api/rest/Destination", destination)
        toast( " Thank you for Sharing, Destination Location Details Added");
        nav('/Calculate')

    }

    const onInputChange = (event) => {
        setDestination({ ...destination, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <section class="bg-white">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <img class="w-full mx-auto" src={img} alt="" />

                            <div class="w-full max-w-md mx-auto xl:max-w-xl">


                                <div class="flex items-center justify-center mt-10 space-x-3">
                                    <div class="bg-orange-500 rounded-full w-20 h-1.5"></div>

                                    <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>

                                    <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center px-4 py-5 bg-white sm:px-6 lg:px-8 sm:py-10 lg:py-5">
                        <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Complete with Sharing about your Destination Location</h2>

                            <form onSubmit={(e) => handleSubmit(e)} class="mt-8">
                                <div class="space-y-5">
                                    <div>
                                        <div class="mt-2.5">
                                            <input
                                                type="text"
                                                name="floorNo"
                                                id=""
                                                required
                                                autoComplete='off'
                                                placeholder="Enter your Floor Number"
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div class="mt-2.5">
                                            <input
                                                type="text"
                                                name="doorstepToVehicle"
                                                id=""
                                                required
                                                autoComplete='off'
                                                placeholder="Door Step to Vehicle"
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                   

                                    <div>
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </section>

        </div>
    )
}

export default Destination
