import React, { useState } from 'react'
import img from '../Images/Logo/undraw_Order_delivered_re_v4ab.png';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Origin() {

    const userId = Cookies.get("userId");
    const navi = useNavigate();
    const length = Cookies.get('length')
    const [origin, setOrigin] = useState({
        "floorNo": "",
        "liftService": "",
        "truckParking": "",
        "pickupdate": "",
        "user": {
            "userId": userId
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4444/api/rest/Origin", origin)
        toast(" Thank you for Sharing, Origin Location Details Added");
        navi('/Destination')
    }

    const onInputChange = (event) => {
        setOrigin({ ...origin, [event.target.name]: event.target.value })
        console.log(origin)
        console.log(length)
    }
    return (
        <div>
            <section class="bg-white">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="flex items-center justify-center px-4 py-5 bg-white sm:px-6 lg:px-8 sm:py-10 lg:py-5">
                        <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Please Share about your Packing Location</h2>

                            <form onSubmit={(e) => handleSubmit(e)} class="mt-8">
                                <div class="space-y-5">
                                    <div>
                                        <div class="mt-2.5">
                                            <input
                                                type="text"
                                                name="floorNo"
                                                id=""
                                                required
                                                placeholder="Enter your Floor Number"
                                                autoComplete='off'
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div class="mt-2.5">
                                            <input
                                                type="text"
                                                name="liftService"
                                                id=""
                                                required
                                                autoComplete='off'
                                                placeholder="Lift Service Available"
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    {/* <div>

                                        <div class="flex items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="Yes" onChange={(e) => onInputChange(e)} name="liftService" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input checked id="default-radio-2" type="radio" value="No" onChange={(e) => onInputChange(e)} name="liftService" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        </div>

                                    </div> */}

                                    <div>

                                        <div class="mt-2.5">
                                            <input
                                                type="text"
                                                name="truckParking"
                                                id=""
                                                required
                                                autoComplete='off'
                                                placeholder="Parking Space Availablity"
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Proposed Date for Packing </label>

                                        <div class="mt-2.5">
                                            <input
                                                type="date"
                                                name="pickupdate"
                                                id=""
                                                required
                                                autoComplete='off'
                                                placeholder="Parking Space Availablity"
                                                onChange={(e) => onInputChange(e)}
                                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                min={new Date().toISOString().split('T')[0]}
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
                    <ToastContainer />
                </div>
            </section>

        </div>
    )
}

export default Origin


