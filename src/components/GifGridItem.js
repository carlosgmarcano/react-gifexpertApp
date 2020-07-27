import React from 'react'

const GifGridItem = ({title, url}) => {

    //console.log();

    return (
        <div className="card animate__heartBeat">
            <img 
                src={url}
                alt= {title}
            />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
