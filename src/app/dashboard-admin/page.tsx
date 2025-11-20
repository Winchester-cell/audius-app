import React from 'react'
import { RxUpdate } from "react-icons/rx";
import { BiClinic } from "react-icons/bi";
import { TbDeviceDesktop } from "react-icons/tb";
import { VscGoToEditingSession } from "react-icons/vsc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CgSoftwareDownload } from "react-icons/cg";
import { IoWarningOutline } from "react-icons/io5";



export default function DashboardAdmin() {
    const summaryCards = [
    {
        id:1,
        title: "System Health",
        value: "98%",
        status: "High",
        icon: <IoIosCheckmarkCircleOutline className='text-2xl'/>,
        color:"text-green-400"

    },
    {
        id:2,
        title: "Today’s Sessions",
        value: "487",
        change: "12% ↑",
        description: "Increase across all clinics",
        icon: <VscGoToEditingSession className='text-2xl'/>,
        color:"text-orange-400"
    },
    {
        id:3,
        title: "Online Devices",
        value: 142,
        total: 156,
        percentage: "91%",
        icon: <TbDeviceDesktop className='text-2xl'/>,
        color:"text-pink-400"
    },
    {
        id:4,
        title: "Total Clinics",
        value: 24,
        active: "22 active",
        inactive: "2 inactive",
        icon: <BiClinic className='text-2xl'/>,
        color: "text-blue-400"
    }
    ];
    const activeClinics = [
    {
        id: 1,
        name: "Tehran Heart Clinic",
        city: "Tehran",
        doctor: "Dr. Ahmadi",
        devices: "8 device"
    },
    {
        id: 2,
        name: "Shiraz Skin Clinic",
        city: "Shiraz",
        doctor: "Dr. Rezaei",
        devices: "12 device"
    },
    {
        id: 3,
        name: "Isfahan Laser Center",
        city: "Isfahan",
        doctor: "Dr. Rahimi",
        devices: "6 device"
    },
    {
        id: 4,
        name: "Mashhad Beauty Clinic",
        city: "Mashhad",
        doctor: "Dr. Noori",
        devices: "10 device"
    }
    ];
    const recentActivities = [
    {
        id:1,
        icon: <BiClinic className='text-2xl'/>,
        title: "New Clinic Registered",
        description: "Laser Clinic of Karaj was added to the system",
        time: "10 minutes ago"
    },
    {
        id:2,
        icon: <CgSoftwareDownload className='text-2xl'/>,
        title: "New Software Version",
        description: "RF Microneedling v2.4.1 released",
        time: "2 hours ago"
    },
    {
        id:3,
        icon:<IoWarningOutline className='text-2xl'/>,
        title: "New Device Installed",
        description: "ECG-2024-005 installed in Isfahan Clinic",
        time: "3 hours ago"
    }
    ];



  return (
    <div className='px-5'>
        <div className='flex justify-between pb-5 p-2'>
            <div>
                <p className='font-bold text-xl mb-1'>Mangament Dashboard</p>
                <p>System Overview</p>
            </div>
            <div className='neu__norm flex items-center justify-center gap-2 px-6 py-1 rounded-xl'>
                <RxUpdate />
                <button>Update</button>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-4'> 
            {
                summaryCards.map((card) => {
                    return(
                        <div key={card.id} className=' px-6 py-7 rounded-xl neu__norm'>
                            <div className='flex justify-between text-lg'>
                                <p>{card.title}</p>
                                <span className=' p-1 rounded-lg'>{card.icon}</span>
                            </div>
                            <span className={`${card.color} font-extrabold text-2xl`} >{card.value}</span>
                            {/* Total Clinics */}
                            {card.active ? <div className='flex gap-3 items-center mt-3'>
                                <p className='text-[#159c49] bg-(--box) px-2 py-1 rounded-xl'>{card.active}</p>
                                <p> {card.inactive}</p>
                            </div> : ""}
                            {/* Online Devices */}
                            {card.percentage ? <div className='flex gap-3 items-center mt-3'>
                                <p>from {card.total} device</p>
                                <p className='text-[#159c49] bg-(--box) px-2 py-1 rounded-xl'>{card.percentage}</p>
                            </div> : ""}
                            {/* Today's session */}
                            {card.description ? <div className='flex gap-3 items-center mt-3'>
                                <p>{card.description}</p>
                                <span className='text-[#159c49]'>{card.change}</span>
                            </div> : ""}
                            {/* system health */}
                            {card.status ? <div className='flex items-center gap-3 mt-3'>
                                <p>{card.status}</p>
                                <span className='h-1 w-[90%] bg-green-700 rounded-xl'></span>
                            </div> : ""}
                        </div>
                    )
                })
            }
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5 mb-10'>
            {/* The Best Clinics Section */}
            <div className='neu__norm rounded-xl p-5 flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-[16px]'>The Best Clinics</p>
                    <span className='bg-blue-500 w-5 h-5 flex items-center justify-center rounded-4xl font-bold'></span>
                </div>
                {activeClinics.map((clinic) => {
                    return(
                        <div key={clinic.id} className='flex neu__inner gap-3 justify-between items-center p-5 rounded-2xl'>
                            <div className='flex gap-2 items-center'>
                                <p className=' bg-(--num-color) text-xl font-bold px-4 py-2 rounded-lg'>{clinic.id}</p>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[16px]'>{clinic.name}</p>
                                    <div className='flex gap-3 text-gray-400'>
                                        <span>{clinic.city}</span>
                                        <span>{clinic.doctor}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-(--device) border border-solid border-(--device-border-color) rounded-lg w-[17%] h-[30px] flex items-center justify-center text-[#300944]'>{clinic.devices}</div>
                        </div>
                    )
                })}
            </div>
            {/* The Recent Activites Section */}
            <div className='neu__norm rounded-xl p-5 flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-[16px]'>Recent Activities</p>
                    <span className='bg-orange-400 w-5 h-5 flex items-center justify-center rounded-4xl font-bold'></span>
                </div>
                {recentActivities.map((activity) => {
                    return(
                        <div key={activity.id} className='flex neu__inner gap-3 justify-between items-center p-5 rounded-2xl'>
                            <div className='flex gap-5 items-center'>
                                <p className=' bg-(--num-color) text-xl font-bold px-3 flex items-center rounded-lg w-10 h-10'>{activity.icon}</p>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[16px]'>{activity.title}</p>
                                    <span>{activity.description}</span>
                                    <span className='text-gray-500'>{activity.time}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
