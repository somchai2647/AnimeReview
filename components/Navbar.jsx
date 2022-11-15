import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="flex z-50 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg justify-between items-center sticky top-0 py-4 px-4">
            {/* logo - start */}
            <Link to={"/"} aria-label="logo" className="animate-charcter inline-flex items-center text-black-800 text-indigo-600 text-2xl md:text-3xl font-bold gap-2.5">
                {/* <svg width={95} height={94} viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg> */}
                <img src="/~sec2assign1/assets/avatarlogo.webp" className='rounded-full' alt="logo" width={48} />
                AnimeReview
            </Link>
            <nav className="hidden lg:flex gap-12 mr-20">
                <Link to={"/"} className="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1">
                    หน้าหลัก
                </Link>
                <Link to={"/about"} className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</Link>
            </nav>
        </header>
    )
}
