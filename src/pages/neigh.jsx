import './neigh.css'

import img1 from '../Assest/neigh1.jpg'
import img2 from '../Assest/neigh2.jpg'
import img3 from '../Assest/neigh3.jpg'
import img4 from '../Assest/neigh4.jpg'
import img5 from '../Assest/neigh5.jpg'
import img6 from '../Assest/neigh6.jpg'
import img7 from '../Assest/neigh7.jpg'
import img8 from '../Assest/neigh8.jpg'
import img9 from '../Assest/neigh9.jpg'

export default function Neigh() {

    return (

        <div className="neigh-container">

            {/* TOP TITLE */}

            <div className="neigh-header">

                <h2>THE NEIGHBORHOOD GUIDE</h2>

                <span>MAP</span>

            </div>


            {/* CATEGORY BAR */}

            <div className="neigh-tabs">

                <span className="active">FOOD & DRINK</span>
                <span>SIGHTS & LANDMARKS</span>
                <span>FAMILY & FUN</span>
                <span>SHOPS & GALLERIES</span>
                <span>HEALTH & WELLNESS</span>

            </div>


            {/* GRID */}

            <div className="neigh-grid">


                <div className="card big">
                    <img src={img1} />
                    <div className="label green">
                        <h3>Locanda Verde</h3>
                        <p>FOOD & DRINK</p>
                    </div>
                </div>


                <div className="card">
                    <img src={img2} />
                    <div className="label green small">
                        LA COLOMBE
                    </div>
                </div>


                <div className="card">
                    <img src={img3} />
                    <div className="label teal small">
                        COLOR ME MINE
                    </div>
                </div>


                <div className="card">
                    <img src={img4} />
                    <div className="label blue small">
                        ISSEY MIYAKE
                    </div>
                </div>


                <div className="card">
                    <img src={img5} />
                    <div className="label green small">
                        MR. CHOW
                    </div>
                </div>


                <div className="card">
                    <img src={img6} />
                    <div className="label blue small">
                        APEXART
                    </div>
                </div>


                <div className="card">
                    <img src={img7} />
                    <div className="label green small">
                        SMITH & MILLS
                    </div>
                </div>


                <div className="card">
                    <img src={img8} />
                    <div className="label blue small">
                        CARINI LANG
                    </div>
                </div>


                <div className="card">
                    <img src={img9} />
                    <div className="label blue small">
                        FOUNTAIN PEN HOSPITAL
                    </div>
                </div>


            </div>

        </div>

    )

}