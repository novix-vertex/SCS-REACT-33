import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav-left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" className="apple" alt="apple icon" />
                </div>
                <div className="nav-item">
                    <p>Shiny</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="nav-right"></div>
        </nav>
    )
}

export default Navbar