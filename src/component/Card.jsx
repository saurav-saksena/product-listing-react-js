import React from 'react'

export default function Card(props) {
    let badgeText
    if (props.spot === 0) {
        badgeText = "SOLD OUT"

    } else if (props.country === "online") {
        badgeText = "ONLINE"
    }
    return (

        <div className='card' style={{ backgroundColor: props.background, color: props.Color }}>
            {badgeText && <div className='card--badge' style={{ color: "black" }}>{badgeText}</div>}
            <img src={props.img} alt="img" className='card--image' />
            <div className='card--stats'>
                <img src='/images/starr.png' className='card--star' alt="hello" />
                <span>{props.ratings}</span>
                <span className='gray'>({props.reviewCount})</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>$ {props.price}</span>  / person</p>

        </div>
    )
}
