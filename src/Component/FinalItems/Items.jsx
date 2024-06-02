import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function Items() {

    const [items, setItems] = useState([]);
    const nav = useNavigate();

    const handleIncrement = (itemId) => {
        console.log(itemId)
        axios.put(`http://localhost:4444/api/rest/item/${itemId}`)
        
    };

    const handleDecrement = (itemId) => {
        axios.put(`http://localhost:4444/api/rest/itemDecrease/${itemId}`)
    };


    useEffect(() => {
        loader()
    }, [items, handleIncrement, handleDecrement])

   

    const deleteItem = (Id) => {
        console.log(Id)
        axios.delete(`http://localhost:4444/api/rest/Item/${Id}`)
            .then(() => {
                const updatedItems = items.filter(item => item.productId !== Id);
                setItems(updatedItems);


            })
            .catch(error => {
                console.error(error);
            });


    }

    const loader = async () => {
        const userId = Cookies.get("userId");

        const response = await axios.get(`http://localhost:4444/api/rest/Item/${userId}`)
        setItems(response.data)
        Cookies.set('length', items.length);
        
    }

    const navi = () => {
        nav('/Origin')

    }
    return (
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="px-2 mx-auto max-w-7xl sm:px-1 lg:px-3">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-1xl lg:text-5xl">Review the Items</h2>
                    </div>

                    <div class="max-w-sm mx-auto mt-8 sm:mt-16">
                        <div class="space-y-3">
                            {
                                items.map((d, index) => {
                                    return (
                                        <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div>
                                                    <p class="text-xl font-semibold text-black" style={{ padding: '5px' }}>{d.product}</p>
                                                </div>
                                                <div class="flex items-center">
                                                    <button type="button" onClick={() => handleDecrement(d.itemId)} id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={d.quantity} required />
                                                    <button type="button"onClick={() => handleIncrement(d.itemId)} id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button onClick={() => deleteItem(d.itemId)} type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span class="material-symbols-outlined">
                                                        delete
                                                    </span></button>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })

                            }

                            <div>
                                <button onClick={() => navi()} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Finish Review</button>

                            </div>


                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Items
