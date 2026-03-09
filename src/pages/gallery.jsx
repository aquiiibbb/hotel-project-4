import './gallery.css'
import { Link } from 'react-router-dom'

import guest from '../Assest/ladies.jpg'
import hotel from '../Assest/hotel.jpg'

export default function Gallery() {

    return (

        <div className="gallery-container">

            {/* LEFT SIDE */}
            <Link to="/guest-gallery" className="gallery-box">

                <img src={guest} alt="Guest Gallery" />

                <div className="gallery-overlay">

                    <h2>Guest Gallery</h2>

                    <span>VIEW GALLERY</span>

                </div>

            </Link>


            {/* RIGHT SIDE */}
            <Link to="/hotel-gallery" className="gallery-box">

                <img src={hotel} alt="Hotel Gallery" />

                <div className="gallery-overlay">

                    <h2>Hotel Gallery</h2>

                    <span>VIEW GALLERY</span>

                </div>

            </Link>

        </div>

    )
}