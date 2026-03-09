import './shibui.css'
import Header from '../components/header';
import video from '../Assest/shibui.mp4';

export default function shibui() {
    return (
        <>
            <Header />

            <div className="accommodations-container">
                <div className="video-section">
                    <video
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="video-overlay"></div>

                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Shibui Spa</h1>
                            <p className="hero-description">Shibui spa is a place to unwind, cleanse
                                body and mind, and heal.</p>
                        </div>
                    </div>
                </div>

                {/* Philosophy Section */}
                <section className="philosophy-section">
                    <div className="philosophy-content">
                        <div className="philosophy-text">
                            <p className="section-subtitle">OUR PHILOSOPHY</p>
                            <h2 className="section-title">Balance</h2>
                            <div className="title-underline"></div>
                            <p className="philosophy-description">
                                Our philosophy is one of balance—balance between the traditional and the modern and between nature and city. To enter Shibui is to be embraced by wood, water, and stone—much of it with a storied past—and our treatments are rooted in the same simplicity and reverence for nature. The products we use are plant-based and, whenever possible, organic. Our practitioners, who are experts in ancient as well as contemporary healing techniques, approach their craft as art—with devotion, dedication, and compassion.
                            </p>
                        </div>
                        <div className="philosophy-image">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Spa Reception" />
                        </div>
                    </div>
                </section>

                {/* Treatments Section */}
                <section className="treatments-section">
                    <div className="treatments-content">
                        <div className="treatments-image">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Treatment Room" />
                        </div>
                        <div className="treatments-text">
                            <p className="section-subtitle">MASSAGE, SKINCARE & MORE</p>
                            <h2 className="section-title">Treatments</h2>
                            <div className="title-underline"></div>
                            <button className="download-btn">DOWNLOAD SPA MENU</button>
                        </div>
                    </div>
                </section>

                {/* Facilities Section */}
                <section className="facilities-section">
                    <div className="facilities-content">
                        <div className="facilities-text">
                            <p className="section-subtitle">FACILITIES & AMENITIES</p>
                            <h2 className="section-title">Our Facilities</h2>
                            <div className="title-underline"></div>
                            <ul className="facilities-list">
                                <li>Heated Swimming Pool</li>
                                <li>Relaxation Lounge</li>
                                <li>Changing Areas with Steam & Rain showers</li>
                                <li>Five Individual Treatment Rooms</li>
                                <li>Personalized Spa Concierge Service</li>
                                <li>Complimentary tea, water and dried fruits</li>
                                <li>Japanese Yukata Robes</li>
                                <li>Red Flower shower Amenities</li>
                                <li>Spa Retail Boutique</li>
                                <li>ADA accessible facilities</li>
                            </ul>
                        </div>
                        <div className="facilities-image">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="Spa Facilities" />
                        </div>
                    </div>
                </section>

                {/* Bottom Cards Section */}
                <section className="bottom-cards">
                    <div className="card">
                        <p className="card-subtitle">TREAT SOMEONE YOU LOVE</p>
                        <h3 className="card-title">Gift Cards</h3>
                        <div className="card-underline"></div>
                        <p className="card-description">
                            Give the gift of relaxation with customised gift certificates to friends and family.
                        </p>
                        <button className="card-btn">PURCHASE NOW</button>
                    </div>

                    <div className="card">
                        <p className="card-subtitle">RESERVATIONS & INFORMATION</p>
                        <h3 className="card-title">Contact Us</h3>
                        <div className="card-underline"></div>
                        <p className="card-description">
                            For more information, please email us. To reserve your experience, please call 646.203.0045
                        </p>
                        <div className="contact-buttons">
                            <button className="card-btn">EMAIL</button>
                            <button className="card-btn">CALL</button>
                        </div>
                    </div>

                    <div className="card">
                        <p className="card-subtitle">POLICIES & INFORMATION</p>
                        <h3 className="card-title">Spa Specifics</h3>
                        <div className="card-underline"></div>
                        <p className="card-description">
                            Learn more about the Shibui Spa experience, policies, and etiquette guidelines.
                        </p>
                        <button className="card-btn">MORE INFORMATION</button>
                    </div>
                </section>
            </div>
        </>
    )
}