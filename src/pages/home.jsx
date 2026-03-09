import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../Assest/sk45.mp4'
import { useState } from 'react';
import { FaAccessibleIcon } from "react-icons/fa";

export default function Home() {
    const [showAccessibility, setShowAccessibility] = useState(false);
    const [activeTab, setActiveTab] = useState('profiles');

    return (
        <>
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

                    {/* Video Overlay */}
                    <div className="video-overlay"></div>

                    {/* Hero Content - Simple Text Only */}
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">A warm welcome</h1>
                            <h2 className="hero-subtitle">awaits you.</h2>
                            <p className="hero-link">EXPLORE ACCOMMODATIONS</p>
                        </div>
                    </div>

                    {/* Accessibility Button */}
                    <div className="accessibility-button">
                        <button
                            className="accessibility-btn"
                            onClick={() => setShowAccessibility(true)}
                            aria-label="Accessibility Options"
                        >
                            <FaAccessibleIcon />
                        </button>
                    </div>

                    {/* Accessibility Panel */}
                    {showAccessibility && (
                        <div className="accessibility-panel">
                            <div className="accessibility-content">
                                {/* Header */}
                                <div className="accessibility-header">
                                    <button
                                        className="close-btn"
                                        onClick={() => setShowAccessibility(false)}
                                    >
                                        ×
                                    </button>
                                    <div className="language-selector">
                                        <img src="https://flagcdn.com/w20/us.png" alt="US Flag" />
                                        <span>ENGLISH (US)</span>
                                        <span>▼</span>
                                    </div>
                                </div>

                                <h2 className="panel-title">Accessibility Adjustments</h2>

                                {/* Action Buttons */}
                                <div className="action-buttons">
                                    <button className="action-btn">🔄 Reset Settings</button>
                                    <button className="action-btn">📄 Statement</button>
                                    <button className="action-btn">🚫 Hide Interface</button>
                                </div>

                                {/* Search */}
                                <div className="search-section">
                                    <input
                                        type="text"
                                        placeholder="Unclear content? Search in dictionary..."
                                        className="search-input"
                                    />
                                </div>

                                {/* Tab Navigation */}
                                <div className="tab-navigation">
                                    <button
                                        className={`tab-btn ${activeTab === 'profiles' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('profiles')}
                                    >
                                        Profiles
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('content')}
                                    >
                                        Content
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'color' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('color')}
                                    >
                                        Color
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'orientation' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('orientation')}
                                    >
                                        Orientation
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    {activeTab === 'profiles' && (
                                        <div className="profiles-content">
                                            <h3>Choose the right accessibility profile for you</h3>

                                            <div className="profile-item">
                                                <div className="profile-toggle">
                                                    <span className="toggle-off">OFF</span>
                                                    <span className="toggle-on">ON</span>
                                                </div>
                                                <div className="profile-info">
                                                    <h4>⚡ Seizure Safe Profile</h4>
                                                    <p>Clear flashes & reduces color</p>
                                                </div>
                                            </div>

                                            <div className="profile-item">
                                                <div className="profile-toggle">
                                                    <span className="toggle-off">OFF</span>
                                                    <span className="toggle-on">ON</span>
                                                </div>
                                                <div className="profile-info">
                                                    <h4>👁️ Vision Impaired Profile</h4>
                                                    <p>Enhances website's visuals</p>
                                                </div>
                                            </div>

                                            <div className="profile-item">
                                                <div className="profile-toggle">
                                                    <span className="toggle-off">OFF</span>
                                                    <span className="toggle-on">ON</span>
                                                </div>
                                                <div className="profile-info">
                                                    <h4>📚 ADHD Friendly Profile</h4>
                                                    <p>More focus & fewer distractions</p>
                                                </div>
                                            </div>

                                            <div className="profile-item">
                                                <div className="profile-toggle">
                                                    <span className="toggle-off">OFF</span>
                                                    <span className="toggle-on">ON</span>
                                                </div>
                                                <div className="profile-info">
                                                    <h4>🎯 Cognitive Disability Profile</h4>
                                                    <p>Assists with reading & focusing</p>
                                                </div>
                                            </div>

                                            <div className="profile-item">
                                                <div className="profile-toggle">
                                                    <span className="toggle-off">OFF</span>
                                                    <span className="toggle-on">ON</span>
                                                </div>
                                                <div className="profile-info">
                                                    <h4>⌨️ Keyboard Navigation (Motor)</h4>
                                                    <p>Use website with the keyboard</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'content' && (
                                        <div className="content-adjustments">
                                            <h3>Content Adjustments</h3>

                                            <div className="adjustment-row">
                                                <div className="adjustment-item">
                                                    <span>🔍 Content Scaling</span>
                                                    <div className="scale-controls">
                                                        <button>-</button>
                                                        <span>Default</span>
                                                        <button>+</button>
                                                    </div>
                                                </div>
                                                <div className="adjustment-item">
                                                    <span>📖 Readable Font</span>
                                                </div>
                                            </div>

                                            <div className="adjustment-grid">
                                                <button className="grid-btn">📝 Highlight Titles</button>
                                                <button className="grid-btn">🔗 Highlight Links</button>
                                                <button className="grid-btn">🔍 Text Magnifier</button>
                                            </div>

                                            <div className="adjustment-row">
                                                <span>📏 Adjust Font Sizing</span>
                                                <div className="scale-controls">
                                                    <button>-</button>
                                                    <span>Default</span>
                                                    <button>+</button>
                                                </div>
                                            </div>

                                            <div className="adjustment-row">
                                                <span>📐 Adjust Line Height</span>
                                                <div className="scale-controls">
                                                    <button>-</button>
                                                    <span>Default</span>
                                                    <button>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'color' && (
                                        <div className="color-adjustments">
                                            <h3>Color Adjustments</h3>

                                            <div className="color-grid">
                                                <button className="color-btn">🌙 Dark Contrast</button>
                                                <button className="color-btn">☀️ Light Contrast</button>
                                                <button className="color-btn">⚫ High Contrast</button>
                                                <button className="color-btn">💧 High Saturation</button>
                                            </div>

                                            <div className="color-section">
                                                <h4>Adjust Text Colors</h4>
                                                <div className="color-palette">
                                                    <span className="color-dot blue"></span>
                                                    <span className="color-dot purple"></span>
                                                    <span className="color-dot red"></span>
                                                    <span className="color-dot orange"></span>
                                                    <span className="color-dot teal"></span>
                                                    <span className="color-dot green"></span>
                                                    <span className="color-dot black"></span>
                                                </div>
                                                <button className="cancel-btn">Cancel</button>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'orientation' && (
                                        <div className="orientation-adjustments">
                                            <h3>Orientation Adjustments</h3>

                                            <div className="orientation-grid">
                                                <button className="orientation-btn">🔇 Mute Sounds</button>
                                                <button className="orientation-btn">🖼️ Hide Images</button>
                                                <button className="orientation-btn">📖 Read Mode</button>
                                                <button className="orientation-btn">📏 Reading Guide</button>
                                                <button className="orientation-btn">⚡ Stop Animations</button>
                                                <button className="orientation-btn">🎯 Reading Mask</button>
                                                <button className="orientation-btn">🎯 Highlight Focus</button>
                                                <button className="orientation-btn">🖱️ Big Black Cursor</button>
                                                <button className="orientation-btn">🖱️ Big White Cursor</button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="accessibility-footer">
                                    <span>Web Accessibility By</span>
                                    <strong> accessiBe</strong>
                                    <button>Learn More ›</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}