import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Modal } from "flowbite-react";
import Swal from 'sweetalert2'

function Panel() {

    const [panelData, setPanelData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const loader = async () => {

        const response = await axios.get("http://localhost:4444/api/rest/Panel")
        setPanelData(response.data);
        console.log(response.data)
    }

    const notify = (panel) => {
        // (panel.userEmail)
        const formData = new FormData();
        formData.append("email", panel.userEmail);
        formData.append("name", panel.userName);
        formData.append("estimate", panel.estimate);
        formData.append("origin", panel.userOrigin);
        formData.append("destination", panel.userDestination);

        Swal.fire({
            title: "Do you want to Notify the User?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `Don't`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.post("http://localhost:4444/api/rest/sendEmailOTP", formData)
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Mail delivered to " + panel.userName,
                showConfirmButton: false,
                timer: 1500
              });
            } else if (result.isDenied) {
              Swal.fire("Notification Cancelled", "", "info");
            }
          });

        
    }

    const viewer = async (Id) => {
        setShowModal(true);
        
        const response = await axios.get(`http://localhost:4444/api/rest/Item/${Id}`)
        
        setData(response.data);

    }

    useEffect(() => {
        loader()
    }, [])

    return (
        <div>

            <div class="flex min-h-screen items-center justify-center bg-white">
                <div style={{width: '1400px', marginTop: '40px'}}>
                <div class="p-12 overflow-scroll px-6 " >
                    <table class="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Name</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Number</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Origin Location</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Destination Location</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Email</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Number of Items</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Kilometer</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Estimate</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Items</p>
                                </th>
                                <th class="border-y border-blue-gray-100 text-center bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Notify</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                panelData.map((panel, index) => {
                                    return (

                                        <tr>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-bold capitalize">{panel.userName}</p>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-normal">{panel.userNumber}</p>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <p class="block antialiased font-sans text-sm leading-normal uppercase  text-center text-blue-gray-900 font-normal ">{panel.userOrigin}</p>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="w-max">
                                                    <div class="relative grid items-center font-sans font-bold text-center uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" style={{ opacity: '1' }}>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-normal">{panel.userDestination}</p>

                                                        {/* <span class="">{panel.userDestination}</span> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">

                                                    <div class="flex flex-col">
                                                        <p class="block antialiased font-sans text-sm text-center leading-normal text-blue-gray-900 font-normal ">

                                                            {panel.userEmail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-bold">{panel.itemCount}</p>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-bold">{panel.miles}</p>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-center text-blue-gray-900 font-bold">₹{panel.estimate}</p>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <button onClick={() => viewer(panel.user.userId)} class="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded">
                                                        View
                                                    </button>
                                                </div>
                                            </td>
                                            <td class="p-4 border-b border-blue-gray-50">
                                                <div class="flex items-center gap-3">
                                                    <button onClick={() => notify(panel)} data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                                        Notifiy {panel.userName}
                                                    </button>
                                                    {/* <button  class="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded">
                                                        
                                                    </button> */}
                                                </div>
                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>

                </div>
            </div>

            {/* MODAL */}


            <Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
                <div style={{display: 'flex' , justifyContent: 'center', fontWeight: '600'}}>
                <Modal.Header><b>List Of Items</b></Modal.Header>
                </div>
                <Modal.Body>
                    <div className="space-y-6">
                    {
                                data.map((d, index) => {
                                    return (
                                        <div class="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">

                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div>
                                                    <p class="text-xl font-semibold text-black" style={{ padding: '5px' }}>{d.product}</p>
                                                </div>
                                                <div>
                                                    <p class="text-xl font-semibold text-black" style={{ padding: '5px' }}> || Quantity : {d.quantity}</p>
                                                </div>
                                              
                                            </div>

                                        </div>

                                    )
                                })

                            }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal>






        </div>
    )
}

export default Panel
