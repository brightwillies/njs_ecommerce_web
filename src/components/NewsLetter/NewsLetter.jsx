import "./NewsLetter.scss"

import React from 'react'

function NewsLetter() {
    return (
        <div className="newsletter">
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>Subscribe to our news letter and stay updated </p>
            <div>
                <input type="email" placeholder="your email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
