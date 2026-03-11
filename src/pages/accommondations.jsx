import './accomondation.css'
import { useState, useEffect } from 'react';
import Header from '../components/header';
import video from '../Assest/accomodation.mp4';

export default function Accommodations() {
    const [activeTab, setActiveTab] = useState('ALL ACCOMMODATIONS');
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    const tabs = [
        'ALL ACCOMMODATIONS',
        'STANDARD ROOMS',
        'DELUXE ROOMS',
        'FAMILY SUITES',
        'ADA ACCESSIBLE'
    ];

    // Amenities data - Original version kept
    const amenitiesData = [
        'Great for your stay',
        'Bathroom',
        'Bedroom',
        'Kitchen',
        'Living Area',
        'Media & Technology',
        'Internet',
        'Parking',
        'Services',
        'Reception Services',
        'Sefety & Security',
        'General',
        'Accessibility',
        'Languages Spoken'
    ];

    // Sample accommodation data with multiple images - Updated for Crossroads Inn
    const accommodationsData = {
        'ALL ACCOMMODATIONS': {
            title: 'All Accommodations',
            description: 'Comfortable accommodations in Fort Pierce with modern amenities, convenient facilities, and easy access to local attractions.',
            rooms: [
                {
                    id: 1,
                    name: 'Double Room',
                    type: '2 double beds',
                  
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max500/822020183.jpg?k=ab4e178448acb6a3489e44bb9072107db288cf4560e34a54528a516aa16eafa4&o=',
                     
                    ],
                    features: ['Queen Bed', 'Free WiFi', 'Private Bathroom', 'Work Desk']
                },
                {
                    id: 2,
                    name: 'King Room-Disability Access',
                    type: '1 extra-large double bed',
                  
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020375.jpg?k=d2f8486cd1de778ee86b312a6b4b418f5db4e8dc64924ae7fd448e00e0ef471b&o=',
                       
                    ],
                    features: ['King Bed', 'Refrigerator', 'Microwave', 'Free Parking']
                },
                {
                    id: 3,
                    name: 'King Room',
                    type: '1 extra-large diuble bed',
                    
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020379.jpg?k=ee0f85f331f229439b7adb988ee7f57c6708fa486e1180926be9889e11491516&o=',
  
                    ],
                    features: ['Two Queen Bedhttps://www.booking.com/hotel/us/crossroads-inn-fort-pierce.en-gb.html?aid=356980&label=gog235jc-10CAso7AFCGmNyb3Nzcm9hZHMtaW5uLWZvcnQtcGllcmNlSAlYA2hsiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALm177NBsACAdICJGRiZjliM2Q3LWVkODgtNGMyYy1hZjU3LTUwMDRiYmU3YTQyNtgCAeACAQ&sid=02571dda123f3e1460a7d2ab706f7395&all_sr_blocks=1580077904_429104546_2_0_0&checkin=2026-08-01&checkout=2026-08-02&dest_id=20022354&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1580077904_429104546_2_0_0&hpos=1&matching_block_id=1580077904_429104546_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1580077904_429104546_2_0_0__10999&srepoch=1773120492&srpvid=ce392673baf101eb&type=total&ucfs=1&#RD1580077905s', 'Separate Seating', 'Mini Kitchen', 'Daily Housekeeping']
                }
            ]
        },
        'STANDARD ROOMS': {
            title: 'Standard Rooms',
            description: 'Comfortable standard rooms with essential amenities for a pleasant stay in Fort Pierce.',
            rooms: [
                {
                    id: 1,
                    name: 'Double Room',
                    type: '2 double beds',
                   
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020379.jpg?k=ee0f85f331f229439b7adb988ee7f57c6708fa486e1180926be9889e11491516&o=',
                       
                    ],
                    features: ['Queen Bed', 'Free WiFi', 'Private Bathroom', 'Work Desk']
                },
                {
                    id: 2,
                    name: 'Double Room',
                    type: '1 double bed',
                   
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020375.jpg?k=d2f8486cd1de778ee86b312a6b4b418f5db4e8dc64924ae7fd448e00e0ef471b&o=',
                     
                    ],
                    features: ['Two Double Beds', 'Air Conditioning', 'TV', 'Carpeted Floors']
                }
            ]
        },
        'DELUXE ROOMS': {
            title: 'Deluxe Rooms',
            description: 'Enhanced comfort with additional amenities including refrigerator and microwave for extended stays.',
            rooms: [
                {
                    id: 1,
                    name: 'Deluxe King Room',
                    type: '1 extra-large double bed',
                  
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020361.jpg?k=0f9c2801bc9402424bc0760b50ded8b0a70adddfbba3f2a052fa6115bb8607f6&o=',
                        
                    ],
                    features: ['King Bed', 'Refrigerator', 'Microwave', 'Walk-in Shower']
                },
                {
                    id: 2,
                    name: 'Deluxe Room',
                    type: '2 diuble beds',
                   
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max300/822020375.jpg?k=d2f8486cd1de778ee86b312a6b4b418f5db4e8dc64924ae7fd448e00e0ef471b&o=',
                       
                    ],
                    features: ['Queen Bed', 'Mini Fridge', 'Work Station', 'Free Parking']
                }
            ]
        },
        'FAMILY SUITES': {
            title: 'Family Suites',
            description: 'Spacious accommodations perfect for families, featuring separate areas and additional amenities.',
            rooms: [
                {
                    id: 1,
                    name: 'Two King Family Suite',
                    type: 'Suite',
                    
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/822020385.jpg?k=9ae43e2a9c6e09587771556f03d80224ab0afb54e82f3fc17e939b5128c565b6&o=',
                        
                    ],
                    features: ['Two Queen Beds', 'Separate Seating', 'Mini Kitchen', 'Daily Housekeeping']
                },
                {
                    id: 2,
                    name: 'Extended Stay Suite',
                    type: 'Suite',
                   
                    images: [
                        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/822020375.jpg?k=d2f8486cd1de778ee86b312a6b4b418f5db4e8dc64924ae7fd448e00e0ef471b&o=',
                        
                    ],
                    features: ['King Bed + Sofa Bed', 'Kitchenette', 'Dining Area', 'Extra Storage']
                }
            ]
        },
        'ADA ACCESSIBLE': {
            title: 'ADA Accessible Rooms',
            description: 'Fully accessible accommodations designed to meet ADA standards for guests with mobility needs.',
            rooms: [
                {
                    id: 1,
                    name: 'Double Room - Disability Access',
                    type: '2 double beds',
                   
                    images: [
                        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop',
                        
                    ],
                    features: ['Roll-in Shower', 'Grab Bars', 'Lowered Fixtures', 'Wide Doorways']
                },
                {
                    id: 2,
                    name: 'King Room - Disability Access',
                    type: '1 extra - large double bed',
                   
                    images: [
                        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
                       
                    ],
                    features: ['Accessible Bathroom', 'Hearing Accessible', 'Mobility Features', 'Emergency Systems']
                }
            ]
        }
    };

    const currentData = accommodationsData[activeTab];

    // Auto-change image every 5 seconds
    useEffect(() => {
        const intervals = {};

        currentData?.rooms?.forEach((room) => {
            if (!currentImageIndex[room.id]) {
                setCurrentImageIndex(prev => ({
                    ...prev,
                    [room.id]: 0
                }));
            }

            intervals[room.id] = setInterval(() => {
                setCurrentImageIndex(prev => {
                    const currentIndex = prev[room.id] || 0;
                    const nextIndex = (currentIndex + 1) % room.images.length;
                    return {
                        ...prev,
                        [room.id]: nextIndex
                    };
                });
            }, 5000);
        });

        return () => {
            Object.values(intervals).forEach(interval => {
                if (interval) clearInterval(interval);
            });
        };
    }, [currentData?.rooms, currentImageIndex]);

    // Handle indicator click
    const handleIndicatorClick = (roomId, index) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [roomId]: index
        }));
    };

    return (
        <>
            <Header />

            <div className="home-container">
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
                            <h1 className="hero-title">Crossroads Inn</h1>
                            <p className="hero-description">Comfortable accommodations in Fort Pierce with modern amenities and convenient location.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="accommodations-section">
                <div className="container">
                    {/* Navigation Tabs */}
                    <div className="accommodations-nav">
                        <div className="nav-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="accommodations-content">
                        <div className="tab-content">
                            <div className="content-header">
                                <h2>{currentData?.title}</h2>
                                <p className="content-description">{currentData?.description}</p>
                            </div>

                            {/* Room Cards Grid */}
                            <div className="rooms-grid">
                                {currentData?.rooms?.map((room) => (
                                    <div key={room.id} className="room-card">
                                        <div className="room-image">
                                            {room.images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`${room.name} - View ${index + 1}`}
                                                    className={`room-img ${index === (currentImageIndex[room.id] || 0) ? 'active' : ''}`}
                                                />
                                            ))}

                                            <div className="photo-counter">
                                                {(currentImageIndex[room.id] || 0) + 1}/{room.images.length}
                                            </div>

                                            <div className="image-indicators">
                                                {room.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`indicator ${index === (currentImageIndex[room.id] || 0) ? 'active' : ''}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleIndicatorClick(room.id, index);
                                                        }}
                                                        aria-label={`View image ${index + 1}`}
                                                    />
                                                ))}
                                            </div>

                                            <div className="room-overlay">
                                                <button className="view-details-btn">View Details</button>
                                            </div>
                                        </div>

                                        <div className="room-info">
                                            <h3>{room.name}</h3>
                                            {room.type && <span className="room-type">{room.type}</span>}
                                            <p className="room-size">{room.size}</p>
                                            <div className="room-features">
                                                {room.features.map((feature, index) => (
                                                    <span key={index} className="feature-tag">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                            <button className="book-now-btn">Book Now</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Amenities Section - Only show on ALL ACCOMMODATIONS tab */}
                        {activeTab === 'ALL ACCOMMODATIONS' && (
                            <div className="amenities-section">
                                <div className="amenities-container">
                                    {/* Left Side - Text */}
                                    <div className="amenities-content">
                                        <p className="amenities-label">AMENITIES</p>
                                        <h2 className="amenities-title">All Stays Include</h2>
                                        <ul className="amenities-list">
                                            {amenitiesData.map((amenity, index) => (
                                                <li key={index} className="amenity-item">
                                                    {amenity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Side - Image */}
                                    <div className="amenities-image">
                                        <img
                                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/822020379.jpg?k=ee0f85f331f229439b7adb988ee7f57c6708fa486e1180926be9889e11491516&o="
                                            alt="Luxury Room Amenities"
                                            className="amenity-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}