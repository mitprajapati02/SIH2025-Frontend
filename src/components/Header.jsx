import Logo from '../assets/logo.jpg';

function Header() {
    return (
        <>
            <header>
                <div className="header-logo"><img src={Logo} alt="Logo" height={40} /></div>
                <div className="header-nav">
                    <div className="header-btn">Take trial</div>
                    <div className="header-btn">Login</div>
                </div>
            </header>
        </>
    );
}

export default Header;