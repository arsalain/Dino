"use client"
import {useState} from 'react'
import Booking from '@/Components/Booking';
import Sidebar from '@/Components/Sidebar'
import Image from 'next/image'


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex h-screen flex-row bg-white justify-start">

        <Sidebar />
        Blog dhashboard
        <button 
                onClick={() => setShowPopup(true)}
                className="bg-green-500 text-white  rounded w-40 h-10"
            >
                Book Now
            </button>

            {showPopup && <Booking  onClose={() => setShowPopup(false)} />}
    </div>
  )
}
