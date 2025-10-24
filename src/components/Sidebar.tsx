import React from 'react'
import Image from 'next/image'
import { FaReact } from "react-icons/fa";
import { SidebarMenuItem } from './SidebarMenuItem';
import { IoCalculator } from "react-icons/io5";
import { MdDashboard, MdOutlineCatchingPokemon } from "react-icons/md";

const menuItems = [
    {
        title: 'Dashboard',
        subTittle: 'Overview of your activity',
        icon: <MdDashboard size={40}/>,
        path: '/dashboard/main'
    },
    {
        title: 'Counter',
        subTittle: 'Contador Client Side',
        icon: <IoCalculator size={40}/>,
        path: '/dashboard/counter'
    },
    {
        title: 'Pokemons',
        subTittle: 'Generacion Estatica',
        icon: <MdOutlineCatchingPokemon size={40}/>,
        path: '/dashboard/pokemons'
    },
];

export const Sidebar = () => {
    return (
        <div id="menu"
            className="fixed bg-gray-900 h-screen z-10 text-slate-300 left-0 top-0 overflow-y-auto w-[300px]">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <FaReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt='User Avatar' width={50} height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Juan C. Fernandez
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem key={item.path} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}
