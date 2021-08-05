import React from 'react'
import './favouriteItems.css'
import { ImYoutube, ImReddit, ImTwitter, ImGithub } from 'react-icons/im'

const favouriteItems = () => {
    return (
        <div className="FavouriteItemsContainer">
            <a href="https://www.youtube.com"><ImYoutube className="faveIcon"/></a>
            <a href="https://www.reddit.com"><ImReddit className="faveIcon"/></a>
            <a href="https://www.twitter.com"><ImTwitter className="faveIcon"/></a>
            <a href="https://www.github.com"><ImGithub className="faveIcon"/></a>
        </div>
    )
}

export default favouriteItems
