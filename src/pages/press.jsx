import './press.css'

import p1 from '../Assest/press1.jpg'
import p2 from '../Assest/press2.jpg'
import p3 from '../Assest/press3.jpg'
import p4 from '../Assest/press4.jpg'
import p5 from '../Assest/press5.jpg'
import p6 from '../Assest/press6.jpg'

export default function Press() {

    return (

        <div className="press-container">

            {/* HERO */}

            <div className="press-hero">

                <h1>Press</h1>

                <p>
                    Read what the world's leading travel and lifestyle publications
                    are saying about our hotel, dining, and neighborhood experience.
                </p>

            </div>


            {/* PRESS GRID */}

            <div className="press-grid">


                <a href="https://nytimes.com" target="_blank" className="press-card">

                    <img src={p1} alt="press" />

                    <div className="press-content">

                        <span className="press-source">New York Times</span>

                        <h3>
                            A Hidden Gem in the Heart of Tribeca
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


                <a href="https://vogue.com" target="_blank" className="press-card">

                    <img src={p2} alt="press" />

                    <div className="press-content">

                        <span className="press-source">Vogue</span>

                        <h3>
                            Luxury Meets Authentic Downtown Charm
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


                <a href="https://cntraveler.com" target="_blank" className="press-card">

                    <img src={p3} alt="press" />

                    <div className="press-content">

                        <span className="press-source">Condé Nast Traveler</span>

                        <h3>
                            One of New York’s Most Beautiful Boutique Hotels
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


                <a href="https://forbes.com" target="_blank" className="press-card">

                    <img src={p4} alt="press" />

                    <div className="press-content">

                        <span className="press-source">Forbes</span>

                        <h3>
                            Where Design, Wellness and Hospitality Meet
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


                <a href="https://travelandleisure.com" target="_blank" className="press-card">

                    <img src={p5} alt="press" />

                    <div className="press-content">

                        <span className="press-source">Travel + Leisure</span>

                        <h3>
                            Why Travelers Love This Downtown Hotel
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


                <a href="https://architecturaldigest.com" target="_blank" className="press-card">

                    <img src={p6} alt="press" />

                    <div className="press-content">

                        <span className="press-source">Architectural Digest</span>

                        <h3>
                            Inside One of NYC's Most Stylish Hotels
                        </h3>

                        <button>READ ARTICLE</button>

                    </div>

                </a>


            </div>

        </div>

    )

}