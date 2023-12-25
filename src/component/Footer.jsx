import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footo">
                    <div className="foot1">
                        <h4 className="about">About Company</h4>
                        <img src="/images/airbnb.png" alt="Company description" id="foot-img" />
                        <p>This is the right place where you get the great suggestion direct from the experts in various fields
                            all over the world!
                            And make your life easier than your imagination with their life expriences. And that's great!
                        </p>

                    </div>
                    <div className="foot2">
                        <h4 className="about">Explore link</h4>
                        <ul>
                            <li><a href="/" className="foota">Our services</a></li>
                            <li><a href="/" className="foota">Meet our team</a></li>
                            <li><a href="/" className="foota">Forum</a></li>
                            <li><a href="/" className="foota">Help center</a></li>
                            <li><a href="/" className="foota">Project</a></li>
                            <li><a href="/" className="foota">Privacy policy</a></li>
                            <li><a href="/" className="foota">Terms & condition</a></li>
                            <li><a href="/" className="foota">Site map</a></li>

                        </ul>

                    </div>
                    <div className="foot3">
                        <h4 className="about">Latest Post</h4>
                        <a href="/" className="posta">1 July </a>
                        <a href="/" className="posta">30 June</a>
                        <a href="/" className="posta">28 June</a>
                        <a href="/" className="posta">25 June</a>
                        <a href="/" className="posta">20 June</a>

                        <a href="/" className="posta">19 June</a>

                    </div>
                    <div className="foot4">
                        <h4 className="about">Contact us</h4>
                        <p>124 New subline Noida sec-15</p>
                        <p>airbnb@gmail.com</p>
                        <p> &#128222; +44 00 00 1234<br />
                            &#128222; +44 00 00 1235 <br />
                            &#128222; +44 00 00 1236</p>

                    </div>
                </div>
                <h3 className="copyright"> &#169; Copyright 2023 | Designed By <span className="ks">Ks-square.com</span></h3>
            </footer>

        </>
    )
}
