import classes from './NavLang.module.css'
import LangItemInput from './LangItemInput'

const NavLang = (props) => {
    return (
        <nav className={`${classes['nav-lang']} ${props.className}`} style={props.style}>
            <ul>
                <LangItemInput />
            </ul>
        </nav>
    )
}

export default NavLang