import React from 'react'

export default function AnimeCard({ item }) {
    return (
        <div>
            <figure className="snip1401">
                <img src={item.PictureAnime} className="overflow-visible" alt="sample67" />
                <figcaption>
                    <h3>{item.Name}</h3>
                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                </figcaption><i className="ion-ios-home-outline" />
                <a href="#" />
            </figure>
            {/* <figure className="snip1401">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample67.jpg" alt="sample67" />
                <figcaption>
                    <h3>Eleanor Fant</h3>
                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                </figcaption><i className="ion-ios-home-outline" />
                <a href="#" />
            </figure> */}
        </div>

    )
}
//https://codepen.io/littlesnippets/pen/dGLbXY