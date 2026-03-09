import './drawing.css'
import Header from '../components/header';
import video23 from '../Assest/Drawing-Room.mp4';

export default function Drawing() {
    return (
        <>
            <Header />

            <div className="drawing-container">
                <div className="drawing-video-section">
                    <video
                        className="drawing-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={video23} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="drawing-video-overlay"></div>

                    <div className="drawing-hero-content">
                        <div className="drawing-hero-text">
                            <h1 className="drawing-hero-title">Drawing Room</h1>
                            <p className="drawing-hero-description">An elegant space for relaxation and intimate gatherings.</p>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <section className="drawing-grid">
                    <div className="grid-container">

                        {/* Text Section */}
                        <div className="grid-item text-section">
                            <div className="text-content">
                                <p className="section-subtitle">DRAWING ROOM & COURTYARD</p>
                                <h2 className="section-title">A Quiet Atmosphere</h2>
                                <p className="section-description">
                                    Reserved exclusively for Hotel Guests, the Drawing Room bar and open-air Courtyard offer a secluded
                                    atmosphere to enjoy a drink or dine on menus from Locanda Verde throughout the day and night.
                                </p>
                            </div>
                        </div>

                        {/* Image 1 - Garden/Courtyard */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Garden Courtyard" />
                        </div>

                        {/* Quote Section - Orange */}
                        <div className="grid-item quote-section orange-bg">
                            <div className="quote-content">
                                <p className="quote-subtitle">THE ATMOSPHERE OF A DISCREET MEMBER'S CLUB AND DELICIOUS FEELING OF SPACE AND SERENITY</p>
                                <div className="quote-brand">
                                    <span className="brand-name">Traveler</span>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 - Interior */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Drawing Room Interior" />
                        </div>

                        {/* Image 3 - Modern Interior */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Modern Interior" />
                        </div>

                        {/* Quote Section - Green */}
                        <div className="grid-item quote-section green-bg">
                            <div className="quote-content">
                                <p className="quote-subtitle">IT'S VERY VERY STEALTH WEALTH</p>
                                <div className="quote-brand">
                                    <span className="brand-name">ELLE</span>
                                </div>
                            </div>
                        </div>

                        {/* Image 4 - Courtyard Aerial */}
                        <div className="grid-item image-item large">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" alt="Luxury Lounge Area" />
                        </div>

                        {/* Image 5 - Plants/Nature */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Garden Plants" />
                        </div>

                        {/* Quote Section - Brown */}
                        <div className="grid-item quote-section brown-bg">
                            <div className="quote-content">
                                <p className="quote-subtitle">OUR FAVORITE PROPERTY DOWNTOWN</p>
                                <div className="quote-brand">
                                    <span className="brand-name">Andrew Harper</span>
                                </div>
                            </div>
                        </div>

                        {/* Image 6 - Restaurant Interior */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Restaurant Interior" />
                        </div>

                        {/* Image 7 - Hotel Lobby */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Hotel Lobby" />
                        </div>

                        {/* Image 8 - Courtyard Evening */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Courtyard Evening" />
                        </div>

                        {/* Image 9 - Bar Area */}
                        <div className="grid-item image-item">
                            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Bar Area" />
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}