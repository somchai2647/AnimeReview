import React from 'react'

export default function StatusCard() {
    return (
        <div>
            <div className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div>
                    <div className="font-semibold mb-1">Security</div>
                    <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                </div>
            </div>
        </div>
    )
}
