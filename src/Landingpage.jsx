// App.js
import React from 'react';
import './Landing.css';
import athleteImage from './assets/ronaldo.jpg'; // You'll need to add this image to your project

function App() {
    return (
        <div className="landing-page">
            <div className="container">
                <header className="header">
                    <div className="logo">CoachPro</div>
                </header>

                <main className="main-content">
                    <div className="hero-section">
                        <div className="hero-text">
                            <h1>Elevate Your Coaching Experience</h1>
                            <p>The complete sports coaching platform designed to analyze performance, manage teams, and achieve winning results.</p>
                            <button className="cta-button">Start Your Free Trial</button>
                        </div>
                        <div className="hero-image">
                            {/* Replace with your actual image */}
                            <img src={athleteImage} alt="Athlete training" />
                        </div>
                    </div>

                    <div className="features-section">
                        <h2>Why Choose CoachPro?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon performance"></div>
                                <h3>Performance Analytics</h3>
                                <p>Track individual and team progress with comprehensive data analysis tools.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon schedule"></div>
                                <h3>Smart Scheduling</h3>
                                <p>Organize training sessions, matches, and events with our intuitive calendar.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon communication"></div>
                                <h3>Team Communication</h3>
                                <p>Keep everyone on the same page with built-in messaging and updates.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon training"></div>
                                <h3>Custom Training Plans</h3>
                                <p>Create personalized development programs for each athlete on your team.</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-section">
                        <div className="testimonial">
                            <p>"CoachPro transformed how I manage my basketball team. The analytics give me insights I never had before."</p>
                            <div className="testimonial-author">- Michael Johnson, Basketball Coach</div>
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stat">
                            <div className="stat-number">10,000+</div>
                            <div className="stat-label">Active Coaches</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Clubs & Organizations</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Satisfaction Rate</div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h2>Ready to transform your coaching?</h2>
                        <p>Join thousands of coaches who are elevating their game with CoachPro.</p>
                        <button className="cta-button">Get Started Today</button>
                    </div>
                </main>

                <footer className="footer">
                    <div className="copyright">© 2025 CoachPro. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
}

export default App;