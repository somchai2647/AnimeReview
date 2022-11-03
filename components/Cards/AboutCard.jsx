import React from 'react'

export default function AboutCard({ src }) {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
                        {/* image - start */}
                        <div className="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
                            <img src={src} loading="lazy" alt="Photo by Andras Vas" className="w-full h-full object-cover object-center" />
                        </div>
                        {/* image - end */}
                        {/* content - start */}
                        <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
                            <h2 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">Help center</h2>
                            <p className="max-w-md text-gray-600 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                            <div className="mt-auto">
                                <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact support</a>
                            </div>
                        </div>
                        {/* content - end */}
                    </div>
                </div>
            </div>

        </div>
    )
}
