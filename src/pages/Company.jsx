import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAnime from '../hooks/useAnime'
import AnimeCard from '../../components/Cards/AnimeCard'
import CompanyNavbar from '../../components/CompanyNavbar'
export default function Company() {

    const { name } = useParams()
    const { getAnimes } = useAnime()

    const [anime, setAnime] = useState([])

    async function fetchData() {
        const data = await getAnimes(name)
        if (data) {
            setAnime(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {/* <h1 className='text-center  title-conpany bg-white bg-gradient-to-r from-pink-200 p-4 bg-opacity-60  text-7xl mb-10 underline text-red-500 font-bold'>{name}</h1> */}
            <CompanyNavbar />
            <div className="flex flex-wrap justify-center gap-4">
                {anime.map((item) => (
                    <AnimeCard item={item} key={item.Name} />
                ))}
            </div>


        </div>
    )
}
