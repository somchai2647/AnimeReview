import React, { useEffect } from 'react'

export default function AnimeCard({ item }) {

    var string = "this is a string";
    var length = 7;
    var trimmedString = string.substring(0, length);
    useEffect(() => {
        const textScore = item.Score
        const arr1 = textScore.split("|")
        console.log(arr1.map(text=>{
            return text.split(" ")
        }))
    }, [])

    return (
        <div>
            <figure className="snip1477">
                <img src={item.PictureAnime} alt="sample38" />
                <div className="title">
                    <div>
                        <h2>{ }</h2>
                        <h4>Tool</h4>
                    </div>
                </div>
                <figcaption>
                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                </figcaption>
                <a href="#" />
            </figure>
        </div>

    )
}
//https://codepen.io/littlesnippets/pen/dGLbXY