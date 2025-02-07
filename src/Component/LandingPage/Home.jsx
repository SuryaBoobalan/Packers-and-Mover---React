import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const nav = useNavigate();

    const navigate = () => {
        nav('/Estimation')
    }
    return (
        <div>
            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Trusted by <span class="text-blue-600">30k+</span> Families for Safe and Secure Delivery</h2>
                    </div>

                    <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-4 gap-x-6 xl:gap-x-12 gap-y-6">
                        <div class="overflow-hidden bg-white rounded-md shadow">
                            <div class="px-8 py-12">
                                <div class="relative w-24 h-24 mx-auto">
                                    <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://d3apkeya39jz4k.cloudfront.net/2_wheelers_274869b2af_7262e4dde4.webp" alt="" />
                                    <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote class="mt-7">
                                    <p class="text-lg text-black">Two Wheeler Delivery</p>
                                </blockquote>

                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded-md shadow">
                            <div class="px-8 py-12">
                                <div class="relative w-24 h-24 mx-auto">
                                    <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://d3apkeya39jz4k.cloudfront.net/trucks_293a94a860_cc4b2d6d06.webp" alt="" />
                                    <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote class="mt-7">
                                    <p class="text-lg text-black">Truck Delivery</p>
                                </blockquote>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded-md shadow">
                            <div class="px-8 py-12">
                                <div class="relative w-24 h-24 mx-auto">
                                    <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://d3apkeya39jz4k.cloudfront.net/all_india_courier_service_3b0f4df07f.webp" alt="" />
                                    <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote class="mt-7">
                                    <p class="text-lg text-black">All India Delivery</p>
                                </blockquote>

                            </div>
                        </div>

                        <div class="overflow-hidden bg-blue rounded-md shadow" >
                            
                                
                                    <button type="button" onClick={navigate} class="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get an Estimate
                                    <p>takes about 5 minutes</p>
                                    <p>→</p>
                                    </button>
                                
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
