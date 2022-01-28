import classes from './NavLang.module.css'

const NavLang = (props) => {
    return (
        <nav className={`${classes['nav-lang']} ${props.className}`} style={props.style}>
            <ul>
                <li>UK</li>
                <li>RU</li>
                <li>EN</li>
                <li>HU</li>
            </ul>
        </nav>
    )
}

export default NavLang