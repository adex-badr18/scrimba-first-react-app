import logo from '../assets/react.svg'

export default function Navbar(props) {
    return (
        <header className={props.lightMode ? 'light' : ''}>
            <nav>
                <img src={logo} className='logo-img' alt="Logo" />
                <h3 className='logo-text'>ReactFacts</h3>
                
                <div className="toggler">
                    <p className="light-text">Light</p>

                    <div className="toggler-slider" onClick={props.toggleMode}>
                        <div className="toggler-slider-circle"></div>
                    </div>

                    <p className="dark-text">Dark</p>
                </div>
            </nav>
        </header>
    )
}