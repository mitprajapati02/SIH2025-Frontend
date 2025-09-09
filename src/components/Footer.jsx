function Footer() {
    return (
        <>
            <footer style={{ borderRadius: '9px' }}>
                <div className="footer-content " style={{ borderRadius: '9px' }}>
                    <div>
                        <h1 style={{ color: '#03045e', fontWeight: 700, fontSize: '2.5rem' }}>VidyaSetu</h1>
                        <p>Detect Early. Intervene Timely. Save Futures.</p>
                    </div>
                    <div className="footer-links" style={{ borderRadius: '9px' }}>
                        <h2>Quick Links</h2>
                        <div className="footer-links-div">
                            <ul className="footer-links-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">© 2025 VidyaSetu. All rights reserved.</div>
            </footer></>
    )
}

export default Footer;