import React, { useEffect, useState } from 'react'

export default function AnimeCard({ item }) {

    const [score, setScore] = useState([])

    var string = "this is a string";
    var length = 7;
    var trimmedString = string.substring(0, length);
    useEffect(() => {
        console.log(item)
        const textScore = item.Score
        const arr1 = textScore.split("|")
        const TextScore2 = arr1[5]
        setScore(TextScore2.split(" ")[2])
    }, [])

    return (
        <div>
            <figure className="snip1477">
                <img src={item.PictureAnime} alt="sample38" />
                <div className="title">
                    <div className='drop-shadow-lg'>
                        <h2 className=''>คะแนนรวม</h2>
                        <h4>⭐ {score}</h4>
                    </div>
                </div>
                <figcaption>
                    <p className='ml-4'>
                        <span className='font-extrabold'>{item.Name}</span> <br />
                        {item.Synopsis.substring(0, 201)}...
                    </p>
                </figcaption>
                <a href="#" />
            </figure>
        </div>

    )
}
//https://codepen.io/littlesnippets/pen/dGLbXY