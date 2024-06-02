import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function ItemList() {

    const [products, setProducts] = useState([]);
    const navi = useNavigate();

    const dest = Cookies.get('destination')
    const loader = async () => {
        const response = await axios.get("http://localhost:4444/api/rest/Product");

        setProducts(response.data);
        console.log(response.data)

    }

    useEffect(() => {
        document.cookie.split(";").forEach(function (c) {
            if (c.includes("userId")) {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            }
        });

        const request = axios.get("http://localhost:4444/api/rest/UserLast");
        request.then((response) => {

            setUser(response.data);
            response.data.map((d, index) => {
                Cookies.set("userId", d.userId);
                Cookies.set("name", d.name);
            });
            const Id = Cookies.get("userId");
            setUserId(Id);
        });
    }, []);

    useEffect(() => {

        loader();
        // assigner();
    }, [])

    const [showCheckOut, setShowCheckOut] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);


    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState("");


    // const assigner = async () => {

    //         const request = await axios.get("http://localhost:4444/api/rest/UserLast");
    //         setUser(request.data);
    //         user.map((d, index) => {
    //             Cookies.set("userId", d.userId);
    //         });
    //         const Id = Cookies.get("userId");
    //         setUserId(Id);

    // };


    const [item, setItem] = useState({
        "product": " ",
        "quantity": 1,
        "user": {
            "userId": ""
        }
    })

    const nav = () => {
        navi("/Items")
    }

    const handleArticles = async (d) => {
        try {
            console.log(d);
            console.log(userId);
            const name = d.productName;

            setItem({
                ...item,
                product: name,
                quantity: 1,
                user: {
                    ...item.user,
                    userId: userId
                }
            });

            console.log(item);

            if (item.product !== "") {
                await axios.post("http://localhost:4444/api/rest/Item", item);
                toast(name + " Added");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };



    return (
        <div class="flex min-h-screen justify-center bg-gray-100">

            <section class="py-24">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">Articles
                        <button onClick={() => setShowCheckOut(!showCheckOut)} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded-full mx-4">
                            <span class="material-symbols-outlined">
                                {showCheckOut ? 'close' : 'shopping_cart'}
                            </span>
                        </button>
                        {showCheckOut && <button onClick={() => nav()} class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full mx-4">
                            Review
                        </button>}</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {
                            products.map((d, index) => {
                                return (
                                    <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
                                        <div class="flex-1">
                                            <div class="flex items-center">
                                                <div style={{ width: '48px', height: '48px', alignItems: 'center', display: 'flex' }}>
                                                    <span class="material-symbols-outlined">
                                                        {d.productImage}
                                                    </span>

                                                </div>
                                                <h2 class="text-xl font-bold text-gray-800">{d.productName}</h2>
                                            </div>

                                        </div>
                                        <button onClick={(e) => handleArticles(d)} className={`bg-${selectedProduct === d? 'green' : 'blue'}-500 hover:bg-green-700 text-white font-bold py-0 px-0 rounded-full mx-4`}>
                                            <span class="material-symbols-outlined">
                                                check
                                            </span>
                                        </button>

                                    </div>
                                )
                            }
                            )
                        }

                    </div>

                </div>
            </section>
            <ToastContainer />

        </div>
    )
}

export default ItemList
