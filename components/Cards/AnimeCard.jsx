import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnimeCard({ item }) {

    const [score, setScore] = useState([])

    useEffect(() => {
        const textScore = item.Score
        const arr1 = textScore.split("|")
        const TextScore2 = arr1[5]
        setScore(TextScore2.split(" ")[2])
    }, [])

    async function handleClick() {
        console.log("CLICK")
    }

    return (
        <Link to={`/anime/${item.Name}`}>
            <figure className="snip1477 cursor-pointer rounded-xl drop-shadow-xl">
                <img src={item.PictureAnime} alt="sample38" />
                <div className="title bg-slate-200  bg-opacity-30">
                    <div className='drop-shadow-lg'>
                        <h2 className=''>คะแนนรวม</h2>
                        <h4>⭐ {score}</h4>
                    </div>
                </div>
                <figcaption>
                    <p className='ml-4 break-all'>
                        {item.Synopsis.substring(0, 201)}...
                    </p>
                </figcaption>
            </figure>
        </Link>

    )
}
//https://codepen.io/littlesnippets/pen/dGLbXY