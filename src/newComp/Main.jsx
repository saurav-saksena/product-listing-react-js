import React from 'react'

export default function Main(props) {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "1100px", margin: "auto" }}>
                <div className="row g-0">
                    <div className="col-md-4 border">
                        <img src={props.img} className="main--img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <img className='location' src='/new-img/newlocation.jpeg' alt='location' />
                            <span className='location--text'>{props.location}</span>
                            <a href={props.map}
                                className='location--map'>view on Google maps</a>
                            <h5 className="card-title title--font">{props.title}</h5>
                            <p className="des--font">{props.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
