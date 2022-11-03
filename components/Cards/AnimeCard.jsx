import React from 'react'

export default function AnimeCard({ item }) {

    var string = "this is a string";
    var length = 7;
    var trimmedString = string.substring(0, length);

    return (
        <div>
            <figure className="snip1543 shadow-lg">
                <img src={item.PictureAnime} alt={item.Name} />
                <figcaption>
                    <h3>{item.Name}</h3>
                    <p>{item.Synopsis.substring(0, 200)}</p>
                </figcaption>
                <a href="#" />
            </figure>

        </div>

    )
}
//https://codepen.io/littlesnippets/pen/dGLbXY