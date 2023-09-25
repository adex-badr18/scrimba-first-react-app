import logo from '../assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} className='logo-img' alt="Logo" />
                <h3 className='logo-text'>ReactFacts</h3>
                <h4 className='course-title'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}