import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Calculate() {

    const nav = useNavigate();
    const origin = Cookies.get('origin');
    const dest = Cookies.get('destination');

    const name = Cookies.get('name');
    const userId = Cookies.get('userId')
    const email = Cookies.get('email')
    const length = Cookies.get('length')
    const number = Cookies.get('mobileNumber')
    const [mile, setMile] = useState();
    const [amount, setAmount] = useState()
    const [distanceData, setDistanceData] = useState([]);

    const [latOne, setLatOne] = useState("");
    const [longOne, setLongOne] = useState("");
    const [latTwo, setLatTwo] = useState("");
    const [longTwo, setLongTwo] = useState("");

    const [kilometer, setKilometer] = useState(0)
    const [budget, setBudget] = useState(0)
    const [distance, setDistance] = useState([])
    const [estimate, setEstimate] = useState();
    const [invoice, setInvoice] = useState({});
    
    // const [invoice, setInvoice] = useState({
    //     "userName": name,
    //     "userNumber": number,
    //     "userOrigin": origin,
    //     "userDestination": dest,
    //     "userEmail": email,
    //     "estimate": estimate,
    //     "itemCount": length,
    //     "miles": mile,
    //     "user": {
    //         "userId": userId
    //     }

    // });


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://driving-distance-calculator-between-two-points.p.rapidapi.com/data',
            params: {
                origin: origin,
                destination: dest
            },
            headers: {

                //Lokesh API
                // 'X-RapidAPI-Key': 'f709cc73d1mshf1b0a25ef507e89p1ca71ejsna6df1f05abd3',
                // 'X-RapidAPI-Host': 'driving-distance-calculator-between-two-points.p.rapidapi.com'

                // //Surya API
                // 'X-RapidAPI-Key': 'cbab2d242dmshd01a91412c80a5ep10bdb0jsn1e94c15a7cfa',
                //  'X-RapidAPI-Host': 'driving-distance-calculator-between-two-points.p.rapidapi.com'

                 //Another 
                //  'X-RapidAPI-Key': '8fc98f9abamshaf5b24b8fe6a4fap1c33cfjsn56b377d4f97d', 
                // 'X-RapidAPI-Host': 'driving-distance-calculator-between-two-points.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(response => {
                console.log(response.data);
                setDistance(response.data)
                
                
               
               
            })
            .catch(error => {
                console.error(error);
            });

      
        

            
    }, []);
     
    useEffect(() =>{
        console.log("1")
        setMile( Math.floor(distance.distance_in_kilometers));
    },[distance])

    useEffect(() => {
        console.log("2")
        console.log(mile)
        setEstimate(mile * 15);
        
        
        
    }, [mile])

    useEffect(() => {
        console.log("3")
        settingVoice();
    }, [estimate])

   const settingVoice = () => {

    console.log("kilometer")
    console.log(mile)
    console.log("budget")
    console.log(estimate)

    setInvoice({
        ...invoice,
        userName : name,
        userNumber: number,
        userOrigin: origin,
        userDestination : dest,
        userEmail: email,
        estimate: estimate,
        itemCount: length,
        miles: mile,
        user: {
            userId: userId
        }
    })
   }
       


    // const handleSubmit = (e) => {
    //     //console.log(invoice)
       
    //     settingVoice()
    //     console.log(invoice);
        
    //     axios.post("http://localhost:4444/api/rest/Panel", invoice);
    //     nav("/")
    // }

    const handleSubmit = (e) => {
        
        axios.post("http://localhost:4444/api/rest/Panel", invoice);
        nav("/");
    };
    
  



    return (
        <div>
            <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-36">
                <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for visiting !</h2>
                    <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your Service Request <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">#75{userId}</a> will be processed within next 4 hours. We will notify you by email once your request consideration is complete.</p>
                    <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Customer Name</dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{name}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Distance between the Location</dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{mile} Kilometer</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Origin Location</dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{origin}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Destination Location</dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{dest}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Expected Date for Packaging</dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">31-05-2024</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Estimated Amount </dt>
                            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">₹{(mile * 15)}</dd>
                        </dl>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                        <button onClick={handleSubmit} class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to Home</button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Calculate
