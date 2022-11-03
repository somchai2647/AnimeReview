import { useEffect, useState } from 'react'
import AnimeData from '../data/Data-Anime.json'

export default function useAnime() {

    async function getAnimes(company) {

        const data = await JSON.parse(JSON.stringify(AnimeData))
        return data.filter(item => item.Company == company)
    }

    async function getAnime(name) {

        const data = await JSON.parse(JSON.stringify(AnimeData))
        return data.filter(item => item.Name == name)[0]
    }

    return { getAnimes, getAnime }

}





