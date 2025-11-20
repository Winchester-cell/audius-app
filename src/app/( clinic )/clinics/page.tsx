import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function Clinics() {
    const clinicManagement = [
        {
            id:1,
            title: "clinics total",
            number: "5",
            color: "text-orange-700"
        },
        {
            id:2,
            title: "Active",
            number: "4",
            color: "text-green-700"
        },
        {
            id:3,
            title: "Premium",
            number: "3",
            color: "text-purple-700"
        },
        {
            id:4,
            title: "All The Devices",
            number: "41",
            color: "text-blue-700"
        },
    ]
    const clinics = [
        {
            id:1,
            clinicName: "Tehran Heart Clinic",
            manager: "Dr. Ahmadi",
            date: "2023-08-03",
            city: "Tehran",
            devices: 8,
            subscription: "Premium",
            status: "Active",
        },
        {
            id:2,
            clinicName: "Shiraz Skin Clinic",
            manager: "Dr. Rezai",
            date: "2023-09-11",
            city: "Shiraz",
            devices: 12,
            subscription: "Premium",
            status: "Active",
        },
        {
            id:3,
            clinicName: "Isfahan Laser Center",
            manager: "Dr. Rahimi",
            date: "2023-10-07",
            city: "Isfahan",
            devices: 6,
            subscription: "Standard",
            status: "Active",
        },
        {
            id:4,
            clinicName: "Mashhad Beauty Clinic",
            manager: "Dr. Nouri",
            date: "2023-10-23",
            city: "Mashhad",
            devices: 10,
            subscription: "Premium",
            status: "Active",
        },
        {
            id:5,
            clinicName: "Tabriz Medical Center",
            manager: "Dr. Mohammadi",
            date: "2023-11-30",
            city: "Tabriz",
            devices: 5,
            subscription: "Standard",
            status: "Inactive",
        }
    ];
  return (
    <div className='px-5'>
        {/* Clinics Management */}
        <div className='flex justify-between pb-5 p-5 neu__inner rounded-2xl mb-5'>
            <div>
                <p className='font-bold text-xl mb-1'>Clinics Management</p>
                <p>clinics Mangement Overview</p>
            </div>
            <div className='neu__norm flex items-center justify-center gap-2 px-6 py-1 rounded-xl'>
                <FaPlus />
                <button>Update</button>
            </div>
        </div>
        {/* Total Clinics Managment Number */}
        <div className='grid grid-cols-4 gap-5 pb-5'>
            {clinicManagement.map((clinic) => {
                return(
                    <div key={clinic.id} className='neu__norm rounded-2xl px-4 py-4'>
                        <div>
                            <p className='font-medium text-[16px]'>{clinic.title}</p>
                            <span className={`${clinic.color} font-extrabold text-3xl`}>{clinic.number}</span>
                        </div>
                    </div>
                )
            })}
        </div>
      <div>
        {/* Header Of Table */}
        <div className='neu__norm grid grid-cols-7 rounded-t-2xl p-3 font-semibold text-[15px]'>
            <div>Clinic Name</div>
            <div>Manager</div>
            <div className='ml-[23px]'>City</div>
            <div>Devices</div>
            <div>Subscription</div>
            <div className='ml-[17px]'>Status</div>
            <div className='ml-[25px]'>Operation</div>
        </div>
        {/* Body Of Table */}
        <div className='neu__norm rounded-b-2xl flex flex-col gap-4 p-3 mb-5'>
            {clinics.map((clinic) => {
                return(
                    <div key={clinic.id} className='grid grid-cols-7 gap-3 items-center'>
                       <div>
                         <p>{clinic.clinicName}</p>
                         <span>{clinic.date}</span>
                       </div>
                       <p>{clinic.manager}</p>
                       <p className='bg-[#6a7282b8] px-3 py-1 rounded-lg w-[50%] text-center font-bold text-white'>{clinic.city}</p>
                       <p className='bg-[#dab2ffa6] text-purple-900 px-3 py-1 rounded-lg w-[25%] text-center font-bold '>{clinic.devices}</p>
                       <p className={`${clinic.subscription === 'Premium' ? 'bg-[#ff6900a6] px-3 py-1 rounded-lg w-[48%] text-center font-bold text-orange-900' : 'bg-[#6a7282b8] px-3 py-1 rounded-lg w-[48%] text-center text-white font-bold'}`}>{clinic.subscription}</p>
                       <p className={`${clinic.status === 'Active' ? 'bg-[#00c951c2] px-3 py-1 rounded-lg w-[40%] text-center font-bold text-green-900' : 'bg-[#6a7282b8] px-3 py-1 rounded-lg w-[45%] text-white text-center font-bold'}`}>{clinic.status}</p>
                       <div className='flex gap-2'>
                        <button className='bg-[#9810faab] text-purple-950 font-bold rounded-lg px-3 py-1'>Edit</button>
                        <button className='bg-[#155dfcb0] text-blue-950 font-bold rounded-lg px-3 py-1'>View</button>
                       </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}
