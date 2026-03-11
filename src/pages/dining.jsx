import './dining.css'
import Header from '../components/header'
import video from '../Assest/dining.mp4'

import pasta from '../Assest/food1.png'
import interior from '../Assest/interior.jpg'
import foodbg from '../Assest/pancake.jpg'

/* NEW IMAGES */
import pancake from '../Assest/Downtown.jpg'
import interiorBig from '../Assest/locanda.jpg'

export default function Dining() {
    return (
        <>
            <Header />

            <div className="dining-container">

                {/* HERO VIDEO */}
                <section className="dining-video-section">

                    <video
                        className="dining-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                    </video>

                    <div className="dining-video-overlay"></div>

                    <div className="dining-hero-content">
                        <h1 className="hero-title">Crossroads Inn</h1>

                        <p className="hero-desc">
                            A casual neighborhood taverna in TriBeCa serving
                            Chef Andrew Carmellini's urban italian cooking.
                        </p>
                    </div>

                </section>


                {/* GRID SECTION */}
                <section className="dining-grid">

                    {/* JOIN US */}
                    <div
                        className="grid-item join-us"
                        style={{ backgroundImage: `url(${foodbg})` }}
                    >

                        <div className="join-overlay"></div>

                        <div className="join-content">

                            <span className="join-small">
                                DINE IN OR AL FRESCO
                            </span>

                            <h2>Join Us</h2>

                            <p>
                                The bustling corner restaurant has been welcoming
                                New Yorkers and travelers morning, noon and night
                                since 2009 with a warm and comfortable atmosphere,
                                leisurely Italian spirit and heartfelt cooking.
                            </p>

                            <button>
                                VISIT LOCANDAVERDENYC.COM
                            </button>

                            <span className="phone">
                                CALL 212.925.3797
                            </span>

                        </div>

                    </div>


                    {/* GREEN QUOTE */}
                    <div className="grid-item green-box">

                        <p>
                            FOR YEARS, CHEFS HAVE TRIED TO COMBINE
                            THE STYLE OF A FRENCH BRASSERIE WITH
                            ITALIAN HOME COOKING. ANDREW CARMELLINI
                            CRACKED THE CODE.
                        </p>

                        <span className="ny">
                            United States
                        </span>

                    </div>


                    {/* FOOD IMAGE */}
                    <div className="grid-item">
                        <img src={pasta} alt="food" />
                    </div>


                    {/* INTERIOR */}
                    <div className="grid-item interior">
                        <img src={interior} alt="restaurant" />
                    </div>


                    {/* NEW PANCAKE IMAGE */}
                    <div className="grid-item pancake">
                        <img src={pancake} alt="pancake" />
                    </div>


                    {/* PAPER QUOTE */}
                    <div className="grid-item paper-box">
                        <p>
                            FOOD PORN COMES TO MIND WHEN
                            DISHES ARE DELIVERED TO THE
                            TABLE AT CROSSROADS INN.
                        </p>

                        <span className="paper">
                            PAPER
                        </span>
                    </div>


                    {/* BIG INTERIOR IMAGE */}
                    <div className="grid-item big-interior">
                        <img src={interiorBig} alt="restaurant" />
                    </div>

                </section>

            </div>
        </>
    )
}