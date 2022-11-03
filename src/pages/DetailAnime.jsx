import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAnime from '../hooks/useAnime'
import StatusCard from '../../components/Cards/StatusCard'


export default function DetailAnime() {

    const { name } = useParams()
    const [anime, setAnime] = useState([])
    const [textReview, setTextReview] = useState([])
    const { getAnime } = useAnime()

    async function fetchData() {
        const data = await getAnime(name)
        if (data) {
            setTextReview(data.Review.split("|"))
            setAnime(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-xl bg-white rounded-lg p-6 px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                <img src={anime.PictureAnime} loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                        <div className="md:pt-8">
                            <p className="text-indigo-500 font-bold text-center text-2xl md:text-left">{anime.Company}</p>
                            <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 ">{anime.Name}</h1>
                            <h3 className='text-2xl mb-4 font-bold text-center md:text-left'>{anime.Episodes} Episodes</h3>
                            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                {anime.Synopsis}
                            </p>
                            <ul>
                                <li><span className='font-bold'>วันที่ฉาย: </span>{anime.Aired}</li>
                                <li><span className='font-bold'>ฤดูการลที่ฉาย: </span>{anime.SeasonalAnime}</li>
                                <li><span className='font-bold'>สร้างจาก: </span>{anime.Source}</li>
                                <li><span className='font-bold'>แนว: </span>{anime.Genres}</li>
                                <li><span className='font-bold'>ธีม: </span>{anime.Theme}</li>
                                <li><span className='font-bold'>ระยะเวลาการฉาย: </span>{anime.Duration}</li>
                                <li><span className='font-bold'>อายุที่แนะนำ: </span>{anime.Rating}</li>
                                <li><span className='font-bold'>ระยะเวลาการฉาย: </span>{anime.Duration}</li>
                            </ul>
                            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Review</h2>
                            {textReview.map((text) => (
                                <p className='sm:text-lg mb-6 md:mb-3 text-gray-500'>{text}</p>
                            ))}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div>
                                    <StatusCard />
                                </div>
                                <div>
                                    <StatusCard />
                                </div>
                                <div>
                                    <StatusCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
