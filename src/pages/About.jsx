import React from 'react'
import AboutCard from '../../components/Cards/AboutCard'

export default function About() {
    return (
        <div>
            <center className="mt-4  textfont">
                <div className='max-w-screen-xl bg-white rounded-lg p-6 px-4 md:px-8 mx-auto'>
                    <h1 className='text-3xl'>จัดทำโดย</h1>
                    <div className='mt-4'>
                        <p className='text-2xl mb-4'>นายสมชาย บริบูรณ์ รหัสนักศึกษา 6506021421072</p>
                        <p className='text-2xl mb-4'>นายกิติศักดิ์ โฉมงาม รหัสนักศึกษา 6506021421102</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl mb-4'>ITI B 27</p>
                    </div>
                </div>
            </center>
        </div>
    )
}
