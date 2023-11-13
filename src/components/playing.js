import React from 'react'

import "./playing.css"

export const Playing = ({xPlaying}) => {
    return (
        <div className="playing">
            <span className={`x-playing ${!xPlaying && "notplaying"}`}>X is playing</span>
            <span className={`o-playing ${xPlaying && "notplaying"}`}>O is playing</span>
        </div>
    )
}