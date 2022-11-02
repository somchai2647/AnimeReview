import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAnime from '../hooks/useAnime'
import AnimeCard from '../../components/Cards/AnimeCard'
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
            <h1 className='text-center text-orange-600 text-7xl font-bold'>{name}</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {anime.map((item) => (
                    <AnimeCard item={item} key={item.Name} />
                ))}
            </div>
        </div>
    )
}
