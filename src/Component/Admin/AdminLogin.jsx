import React, { useState } from 'react'
import Logo from '../Images/Logo/PMA Logo.png';

function AdminLogin() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const logger = (e) => {
        e.preventDefault();
        if(user == "admin" && password == "admin"){
            window.location.href = "/Panel";
        }
        else{
            alert("Invalid Credentials")
        }
    }

    return (
        <div>
            <form>
                <div class="flex items-center justify-center h-screen bg-gray-100">
                    <div class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                    <img class="w-auto h-8 lg:h-10" src={Logo} alt="" style={{height: '70px', marginLeft: '30px'}} />
                        <div class="space-y-4 mt-6">
                            <div class="w-full">
                                <input type="text" name = "username" placeholder="Admin Name"  onChange={(e) => setUser(e.target.value)} class="px-4 py-2 bg-gray-50" />
                            </div>
                            <div class="w-full">
                                <input type="password" name = "password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} class="px-4 py-2 bg-gray-50" />
                            </div>
                           
                        </div>
                        <button onClick={logger} class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin
