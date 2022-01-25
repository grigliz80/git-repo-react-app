import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/wellcome'>
                            WELLCOME GRIGORIY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>
                            WORDS LIST
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader