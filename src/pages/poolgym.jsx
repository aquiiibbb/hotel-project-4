import './poolgym.css'
import Header from '../components/header';
import video from '../Assest/pool_gym.mp4';

export default function Poolgym() {
    return (
        <>
            <Header />

            <div className="poolgym-container">
                <div className="poolgym-video-section">
                    <video
                        className="poolgym-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="poolgym-video-overlay"></div>

                    <div className="poolgym-hero-content">
                        <div className="poolgym-hero-text">
                            <h1 className="poolgym-hero-title">Pool & Gym</h1>
                            <p className="poolgym-hero-description">An intimate environment for working out or winding down.</p>
                        </div>
                    </div>
                </div>

                {/* Pool Section */}
                <section className="pool-section">
                    <div className="pool-content">
                        <div className="pool-text">
                            <p className="section-subtitle">POOL</p>
                            <h2 className="section-title">Soak It In</h2>
                            <div className="title-underline"></div>
                            <p className="pool-description">
                                Situated within Shibui Spa, the pool and relaxation lounge offer an intimate environment to unwind, enjoy a Japanese tea, or take a morning yoga class. The fitness center features a wide array of equipment to accommodate all fitness routines.
                            </p>
                            <div className="pool-hours">
                                <p className="hours-title">OPEN DAILY 7A - 9P</p>
                                <p className="hours-subtitle">FAMILY HOURS 7AM-10AM, (CHILDREN AGES 4+ WELCOME)</p>
                            </div>
                        </div>
                        <div className="pool-image">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="Luxury Pool Area" />
                        </div>
                    </div>
                </section>

                {/* Gym Section */}
                <section className="gym-section">
                    <div className="gym-content">
                        <div className="gym-image">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Modern Gym Facility" />
                        </div>
                        <div className="gym-text">
                            <p className="section-subtitle">GYM</p>
                            <h2 className="section-title">Movement & Mindfulness</h2>
                            <div className="title-underline"></div>
                            <p className="gym-description">
                                Our skilled and dynamic instructors customize each session to support what your body and mind need most. Whether looking to try yoga or personal training for the first time, or maintain an established practice while traveling, you will bend, sweat and breathe your way to greater balance, vitality and strength.
                            </p>
                            <p className="gym-availability">AVAILABLE TO GUESTS OF THE HOTEL 16+ YEARS AND ABOVE</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}