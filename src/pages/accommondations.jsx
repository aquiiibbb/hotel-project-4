import './accomondation.css'
import { useState, useEffect } from 'react';
import Header from '../components/header';
import video from '../Assest/accomodation.mp4';

export default function Accommodations() {
    const [activeTab, setActiveTab] = useState('ALL ACCOMMODATIONS');
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    const tabs = [
        'ALL ACCOMMODATIONS',
        'ROOMS',
        'SUITES',
        'DUPLEXES & PENTHOUSE',
        'ADA ACCESSIBLE'
    ];

    // Amenities data
    const amenitiesData = [
        'High-Speed Wireless internet',
        'Minibar snacks, water, and soft drinks',
        'Domestic and International phone calls',
        'PressReader – digital access to global newspapers and magazines',
        'Printed newspapers upon request',
        'Packing and unpacking service upon request',
        'House car for short trips within downtown NYC on availability',
        'Nespresso set up',
        'Tea set up upon request',
        'Coffee and tea when ordered with wake up call',
        'Extra twin bed or crib upon request in advance'
    ];

    // Sample accommodation data with multiple images
    const accommodationsData = {
        'ALL ACCOMMODATIONS': {
            title: 'All Accommodations',
            description: 'Discover our complete range of luxury accommodations, each thoughtfully designed to provide an exceptional experience in the heart of Greenwich Village.',
            rooms: [
                {
                    id: 1,
                    name: 'Superior Room',
                    type: 'Room',
                    size: '350 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop'
                    ],
                    features: ['King Bed', 'City View', 'Marble Bathroom', 'WiFi']
                },
                {
                    id: 2,
                    name: 'Greenwich Suite',
                    type: 'Suite',
                    size: '650 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
                    ],
                    features: ['Separate Living Area', 'King Bed', 'Garden View', 'Kitchenette']
                },
                {
                    id: 3,
                    name: 'Penthouse Suite',
                    type: 'Penthouse',
                    size: '1200 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop'
                    ],
                    features: ['Private Terrace', 'Two Bedrooms', 'Full Kitchen', 'City Views']
                }
            ]
        },
        'ROOMS': {
            title: 'Rooms',
            description: 'Elegant rooms designed for comfort and style, featuring luxurious amenities and thoughtful details.',
            rooms: [
                {
                    id: 1,
                    name: 'Superior Room',
                    type: 'Room',
                    size: '350 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop'
                    ],
                    features: ['King Bed', 'City View', 'Marble Bathroom', 'WiFi']
                },
                {
                    id: 2,
                    name: 'Deluxe Room',
                    type: 'Room',
                    size: '400 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop'
                    ],
                    features: ['King Bed', 'Garden View', 'Soaking Tub', 'Mini Bar']
                }
            ]
        },
        'SUITES': {
            title: 'Suites',
            description: 'Spacious suites with premium amenities, perfect for extended stays and special occasions.',
            rooms: [
                {
                    id: 1,
                    name: 'Greenwich Suite',
                    type: 'Suite',
                    size: '650 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
                    ],
                    features: ['Separate Living Area', 'King Bed', 'Garden View', 'Kitchenette']
                },
                {
                    id: 2,
                    name: 'Executive Suite',
                    type: 'Suite',
                    size: '800 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop'
                    ],
                    features: ['Two Rooms', 'Work Area', 'Premium Amenities', 'City View']
                }
            ]
        },
        'DUPLEXES & PENTHOUSE': {
            title: 'Duplexes & Penthouse',
            description: 'Ultimate luxury in our exclusive duplexes and penthouse, offering unparalleled space and privacy.',
            rooms: [
                {
                    id: 1,
                    name: 'Penthouse Suite',
                    type: 'Penthouse',
                    size: '1200 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop'
                    ],
                    features: ['Private Terrace', 'Two Bedrooms', 'Full Kitchen', 'City Views']
                },
                {
                    id: 2,
                    name: 'Duplex Suite',
                    type: 'Duplex',
                    size: '1000 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
                    ],
                    features: ['Two Levels', 'Living Room', 'Dining Area', 'Private Entrance']
                }
            ]
        },
        'ADA ACCESSIBLE': {
            title: 'ADA Accessible',
            description: 'Fully accessible accommodations meeting ADA standards, ensuring comfort for all guests.',
            rooms: [
                {
                    id: 1,
                    name: 'Accessible Superior Room',
                    type: 'Room',
                    size: '375 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
                    ],
                    features: ['Roll-in Shower', 'Accessible Bathroom', 'Lowered Fixtures', 'Wide Doorways']
                },
                {
                    id: 2,
                    name: 'Accessible Suite',
                    type: 'Suite',
                    size: '650 sq ft',
                    images: [
                        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop',
                        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop'
                    ],
                    features: ['Accessible Kitchen', 'Roll-in Shower', 'Hearing Accessible', 'Mobility Features']
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
                            <h1 className="hero-title">Accommodations</h1>
                            <p className="hero-description">86 uniquely appointed guest rooms and suites, of which no two are alike.</p>
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

                            {/* Amenities Section - Left Text, Right Image */}
                            
                        </div>
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
                                            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=500&fit=crop"
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